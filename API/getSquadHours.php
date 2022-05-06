<?php

include 'DataBaseControler.php';

// $_POST['squadId'] = 11;
// $_POST['diaInicio'] = '2022-04-01';
// $_POST['diaFim'] = '2022-05-1';
$id = $_POST['squadId'];
$dataInicio = $_POST['diaInicio'];
$dataFim = $_POST['diaFim'];

$sql = "SELECT * FROM employes
INNER JOIN
reports ON employes.id = reports.employeeId AND employes.squadId = $id AND reports.dataNow BETWEEN '$dataInicio' AND '$dataFim' ORDER BY reports.dataNow ASC";


$result = database::execSql($sql);
$result =  json_encode($result);
$result = database::execSql($sql);
if (count($result) > 0) {
    $json = json_encode($result);
    echo $json;
    return $json;
} else {
    $json = json_encode(array('status' => 'falha'));
    echo $json;
    return $json;
}
