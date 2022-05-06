$(function () {
  getAllSquads();

  $("#submit").click(function () {
    event.preventDefault();
    var nome = $("#nomeEmployes").val();
    var estimatedHours = $("#estimatedHours").val();
    var squadId = $("#dropdown").val();
    console.log(nome, estimatedHours, squadId);
    if (estimatedHours != "" && squadId != "") {
      if (estimatedHours >= 1 && estimatedHours <= 12) {
        $(".alertHoras").html("");
        if (nome != "") {
          $(".alertNome").html("");
          queryAdd(nome, estimatedHours, squadId);
        } else {
          $(".alertNome").html(
            "<div class='alert alert-danger' role='alert'>Coloque um nome</div>"
          );
        }
      } else {
        $(".alertHoras").html(
          "<div class='alert alert-danger' role='alert'>Horas deve ser entre 1 e 12</div>"
        );
      }
    } else {
      $(".alertHoras").html(
        "<div class='alert alert-danger' role='alert'>Coloque uma hora</div>"
      );
    }
    if (nome == "") {
      $(".alertNome").html(
        "<div class='alert alert-danger' role='alert'>Coloque um nome</div>"
      );
    }
  });

  function queryAdd(nome, estimatedHours, squadId) {
    //console.log(nome,estimatedHours,squadId);
    $.ajax({
      url: "../API/addEmployes.php",
      method: "POST",
      data: {
        nome: nome,
        estimatedHours: estimatedHours,
        squadId: squadId,
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
  }

  function getAllSquads() {
    $.ajax({
      url: "http://localhost/testePd/API/getAllSquads.php",
      method: "GET",
      success: function (data) {
        json = JSON.parse(data);
        json.forEach((element) => {
          $("#dropdown")
            .prepend(
              "<option value=" +
                element.id +
                " selected='selected'>" +
                element.nome +
                "</option>"
            )
            .val("");
        });
      },
    });
  }
});
