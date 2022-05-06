<?php

class database
{

  private static function pegarConeccao()
  {

    $host = 'localhost';
    $dbname = 'testepd';
    $username = 'root';
    $password = '';

    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    return $conn;
  }

  public static function execSql($sql)
  {
    try {
      $conn = database::pegarConeccao();
      $stmt = $conn->prepare($sql);
      $stmt->execute();
      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
      return $result;
    } catch (Exception $e) {
      echo "Erro: " . $e->getMessage();
    }
  }

  public static function addSql($sql){
    try {
      $conn = database::pegarConeccao();
      $stmt = $conn->prepare($sql);
      if($stmt->execute()){
        return 'true';
      } else{
        return 'false';
      }
    } catch (Exception $e) {
      echo "Erro: " . $e->getMessage();
      return false;
    }
  }

  public static function execNoEchoSql($sql)
  {
    $conn = database::pegarConeccao();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $result = json_encode($result);
    //echo $result;
    return $result;
  }
}

// $teste = database::execSql("SELECT * FROM musica");
