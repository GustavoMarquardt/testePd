<?php

include 'DataBaseControler.php';

// $_POST["nome"] = "teste";
// $_POST["estimatedHours"] = 2;
// $_POST["squadId"] = 5;

$nome = $_POST["nome"];
$estimatedHours = $_POST["estimatedHours"];
$squadId = $_POST["squadId"];

$sql = "INSERT INTO employes (nome,estimatedHours,squadId) VALUES ('$nome','$estimatedHours','$squadId')";
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

