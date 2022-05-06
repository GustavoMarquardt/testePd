<?php

include 'DataBaseControler.php';


$description = $_POST["description"];
$employeeId = $_POST["employeeId"];
$spendHours = $_POST["spendHours"];
//ALTER TABLE reports ADD dataNow INF(10);
$agora = new DateTime(); // Pega o momento atual
$agora = $agora->format('Y/m/d H:i');

$sql = "INSERT INTO reports (descricao,employeeId,spendHours,dataNow) VALUES ('$description','$employeeId','$spendHours','$agora')";
$conn = database::addSql($sql);

if($conn == 'true'){
    $json = json_encode(array('status' => 'sucesso'));
    echo $json;
    return $json;
} else{
    $json = json_encode(array('status' => 'falha'));
    echo $json;
    return $json;
}
