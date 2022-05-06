<?php

include 'DataBaseControler.php';

$sql = "SELECT * FROM squads";
$conn = database::execSql($sql);
if(count($conn) > 0){
    $json = json_encode($conn);
    echo $json;
    return $json;
} else{
    $json = json_encode(array('nome' => 'nenhum registro'));
    echo $json;
    return $json;
}