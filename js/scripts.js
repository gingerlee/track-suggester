$(document).ready(function() {
  $("form#quiz").submit(function(event) {
  event.preventDefault();
  var computer = $("#computer").val();
  var work = $("#work").val();
  var company = $("#company").val();


  if (company === "agency" && work === "ux") {
    $("#design, #return").show();
    $(".survey, #c, #ruby").hide();
  } else if (company === "enterprise" && work === "backend") {
    $("#c, #return").show();
    $(".survey, #design, #ruby").hide();
  } else if (work === "frontend" && company === "small") {
    $("#ruby, #return").show();
    $(".survey, #design, #c").hide();
  } else {
    $("#nomatches, #return").show();
    $(".survey").hide();

  }


  });
});
