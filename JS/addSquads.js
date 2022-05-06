$(function () {

  $("#submit").click(function () {
    event.preventDefault();
    var nome = $("#nameSquads").val();
    if(nome != ""){
        $.ajax({
            url: "../API/addSquads.php",
            method: "POST",
            data: {
              nome: nome,
            },
            success: function (data) {
              var json = JSON.parse(data);
              if (json.status == "sucesso") {
                alert("Sucesso");
              } else {
                alert("Erro");
              }
            },
          });
    } else{
      console.log("nome vazio");
        $(".alertNome").html(
            "<div class='alert alert-danger' role='alert'>Coloque um nome</div>"
        );
    }

  });
});
