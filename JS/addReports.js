$(function () {
  getAllEmployee();
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();
  var now = ano + "-" + mes + "-" + dia;
  data = data.toISOString().substring(0, 10);
  console.log(data);
  $("#date").val(data);

  $("#submit").click(function () {
    event.preventDefault();
    var description = $("#description").val();
    var date = $("#date").val();
    var employeeId = $("#dropdown").val();
    var spendHours = $("#spendHours").val();
    console.log("descricao" + description);
    console.log("data" + date);
    console.log("employeeId" + employeeId);
    console.log("spendHours" + spendHours);
    if ((description != "") && (spendHours !="") && (date !="") && (employeeId !="")) {
        $.ajax({
            url : "http://localhost/testePd/API/addReport.php",
            method : "POST",
            data : {
                description : description,
                date : date,
                employeeId : employeeId,
                spendHours : spendHours
            },
            success : function(data){
                var json = JSON.parse(data);
                if(json.status == "sucesso"){
                    alert("Sucesso");
                }else{
                    alert("Erro");
                }
            }
        });
        
    } else {
      $(".alertDescricao").html(
        "<div class='alert alert-danger' role='alert'>Coloque uma descricao</div>"
      );
    }
    if (spendHours == "") {
      $(".alertHoras").html(
        "<div class='alert alert-danger' role='alert'>Coloque uma hora</div>"
      );
    }
  });
});

function getAllEmployee() {
  $.ajax({
    url: "http://localhost/testePd/API/getAllEmployee.php",
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
