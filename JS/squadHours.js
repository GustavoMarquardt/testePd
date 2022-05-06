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
              var total = 0;
            json.forEach((element) => {
                total += Number(element.spendHours);
            });
            $('#horas').append('<tr><td><h3>Total =>'+ total+'</h3></td><hr>');
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
            $("#dropdown").prepend(
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

  function formatReal(int){
    var tmp = int+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 )
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return tmp;
}
  