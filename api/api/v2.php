<?
require_once('./table.php');
$data = json_decode(file_get_contents('php://input'), true);
// echo $request_body;
// exit;
$locale = [
  'sell' => 'Срок сдачи',
  'price' => 'Цена за м2',
  'cost' => 'Цена',
  'rate' => 'Ставка',
  'name' => 'Имя',
  'platesh' => 'Ежемесячный платёж',
  'address' => 'Адрес',
  'email' => 'Email',
  'phone' => 'Номер телефона',
  'title' => 'Название',
];
$tableStyle = [
  'table' => 'width: 100%;',
  'cell' => 'padding: 10px;border: #e9e9e9 1px solid;'
];
if (empty($data))
{
  exit;
}
$mypismo = "Заявка: ".$data['from']['target'];
$fromData = [];
foreach ($data['from']['data'] as $key => $value) {
  if (
    $locale[$key]
  ) {
    $tmp[] = $locale[$key];
    $tmp[] = $value;
    $fromData[] = $tmp;
    $tmp = [];
  }
}
$table = new Table();
$mypismo .= $table->getTable($fromData, $tableStyle);
$mypismo .= 'Данные посетителя: ';
$personData = [];
foreach ($data['data'] as $key => $value) {
  if (
    $locale[$key]
  ) {
    $tmp[] = $locale[$key];
    $tmp[] = $value;
    $personData[] = $tmp;
    $tmp = [];
  }
}
$mypismo .= $table->getTable($personData, $tableStyle);

if ($data['banks']) {
  $mypismo .= 'Данные подобранных банков: ';
  $banksData = [
    [
      'Название',
      'Ставка',
      'Платёж'
    ]
  ];
  $tmp = [];
  foreach ($data['banks'] as $value) {
    $tmp[] = $value['name'];
    $tmp[] = $value['rate'];
    $tmp[] = $value['platesh'];
    $banksData[] = $tmp;
    $tmp = [];
  }
  $mypismo .= $table -> getTable($banksData, $tableStyle);
}

if ($data['creditParams']) {
  $mypismo .= 'Данные кредита: ';
  $creditParams = [];
  $tmp = [];
  foreach ($data['creditParams'] as $key => $value) {
    $tmp[] = $key;
    $tmp[] = $value;
    $creditParams[] = $tmp;
    $tmp = [];
  }
  $mypismo .= $table -> getTable($creditParams, $tableStyle);
}


$headers = "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Date: " . date('D, d M Y h:i:s O') . "\r\n";
$theme = 'Тест';
echo $mypismo;
echo mail('for.a.work.wgif@mail.ru', $theme, $mypismo, $headers) || 'хуйня)';
echo mail('work.proger@gmail.com', $theme, $mypismo, $headers) || 'хуйня)';
echo mail('kir645@mail.ru', $theme, $mypismo, $headers) || 'хуйня)';