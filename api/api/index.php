<?php
require_once './table.php';
$data = [
  [
    'Телефон',
    $_GET['phone'],
  ],
  [
    'Город',
    $_GET['city'],
  ],
  [
    'Email',
    $_GET['email'],
  ],
  [
    'Страница',
    $_GET['url'],
  ],
];
$tableStyle = [
  'table' => 'width: 100%;',
  'cell' => 'padding: 10px;border: #e9e9e9 1px solid;',
];
$table = new Table();
$parcel = 'Заявка: '.$_GET['url'];
$parcel .= $table->getTable($data, $tableStyle);

$headers = "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Date: " . date('D, d M Y h:i:s O') . "\r\n";
$theme = 'Заявка matkapital33.ru';
mail('for.a.work.wgif@mail.ru', $theme, $parcel, $headers);
mail('kir645@mail.ru', $theme, $parcel, $headers);
?>
<!-- <script>
  alert('Ваша заявка была отправлена');
  window.location.href = 'http://matkapital33.ru';
</script> -->