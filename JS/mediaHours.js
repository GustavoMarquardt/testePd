$(function () {
  getAllSquads();
  $("#submit").click(function () {
    event.preventDefault();
    var squadId = $("#dropdown").val();
    var diaInicio = $("#dateInicio").val();
    console.log(diaInicio);
    var diaFim = $("#dateFim").val();
    console.log(diaFim);
    $.ajax({
      url: "../API/getSquadHours.php",
      method: "POST",
      data: {
        squadId: squadId,
        diaInicio: diaInicio,
        diaFim: diaFim,
      },
      success: function (data) {
        var json = JSON.parse(data);
        console.log(json);
        if (json.status == "falha") {
          alert("Erro");
        } else {
          console.log(json.length);
          var media = 0;
          for (var i = 0; i < json.length; i++) {
            media = media + parseInt(json[i].spendHours);
          }
          var dataInit = new Date(json[0].dataNow);
          var dataFim = new Date (json[json.length - 1].dataNow);
          difData = dataFim - dataInit;
          var timeDiff = Math.abs(dataFim.getTime() - dataInit.getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          console.log('difDatas em dias'+diffDays);
          media = media / diffDays;
          console.log('media'+media);
            $('#horas').append('<tr><td><h3>' + media + '</h3></td><hr>');
        }
      },
    });
  });
  function FormataStringData(data) {
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }

  function getAllSquads() {
    $.ajax({
      url: "http://localhost/testePd/API/getAllSquads.php",
      method: "POST",
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
