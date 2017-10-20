$(document).ready(function() {
  $("form#quiz").submit(function(event) {
  event.preventDefault();
  var computer = $("#computer").val();
  var work = $("#work").val();
  var company = $("#company").val();


  if (work === "ux" && computer === "mac" || work === "ux" && company === "agency" || computer === "mac" && comapny === "agency") {
    $("#design, #return").show();
    $(".survey, #c, #ruby").hide();
  }


  });
});
