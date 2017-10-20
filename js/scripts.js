$(document).ready(function() {
  $("form#quiz").submit(function(event) {
  event.preventDefault();
  var computer = $("#computer").val();
  var work = $("#work").val();
  var company = $("#company").val();
  var firstName = $("#first").val();
  var lastName = $("#last").val();


  if (work === "design" && company === "agency" || work === "design" && company === "small") {
    $("#design, .return").show();
    $(".survey, #c, #ruby").hide();
  } else if (work === "frontend" && company === "small" || work === "frontend" && company === "agency") {
    $("#ruby, .return").show();
    $(".survey, #design, #c").hide();
  } else if (computer === "pc" || company === "enterprise" || work === "backend" || company === "enterprise" && work === "backend") {
    $("#c, .return").show();

  } else {
    $(".nomatches, .return").show();
    $(".survey").hide();
  }

  if (firstName === "")  {
  $("input#first").addClass("is-invalid");
  $(".invalid-feedback#first, .survey").show();
  $("#c, #design, #ruby").hide();
}

if (lastName === "")  {
$("input#last").addClass("is-invalid");
$(".invalid-feedback#last, .survey").show();
$("#c, #design, #ruby").hide();
}




  });
});
