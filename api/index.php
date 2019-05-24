<?php
$locale = [
    'sell' => 'Срок сдачи',
    'price' => 'Цена за м2',
    'cost' => 'Цена',
];
$data = json_decode(file_get_contents('php://input'), true);
$pismo = $data['from']['target'] . "\n";
foreach ($data['from']['data'] as $key => $value) {
    $pismo .= ($locale[$key] ? $locale[$key] : $key) . ' : ' . $value . "\n";
}
$pismo .= "\n\n";
foreach ($data['data'] as $key => $value) {
    $pismo .= ($locale[$key] ? $locale[$key] : $key) . ' : ' . $value . "\n";
}
echo $pismo;
echo "Отправлено: " . mail('for.a.work.wgif@mail.ru', 'Тест', $pismo);
// var_dump($_REQUEST);
// print_r($_REQUEST['mdata']);
