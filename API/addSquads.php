<?php

include 'DataBaseControler.php';

$nome = $_POST["nome"];

$sql = "INSERT INTO squads (nome) VALUES ('$nome')";
$conn = database::execSql($sql);


$json = json_encode(array('status' => 'sucesso'));
echo $json;
return $json;
