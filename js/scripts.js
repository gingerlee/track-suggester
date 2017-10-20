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
    $(".survey, .nomatches, #c, #ruby").hide();
  } else if (work === "frontend" && company === "small" || work === "frontend" && company === "agency" || work === "frontend" && company === "enterprise") {
    $("#ruby, .return, .matched").show();
    $(".survey, .nomatches, #design, #c").hide();
  } else if (computer === "pc" && company === "enterprise" || computer === "pc" && work === "backend" || company === "enterprise" && work === "backend") {
    $("#c, .return, .matched").show();
    $(".survey, .nomatches, #design, #ruby").hide();
  } else {
    $(".nomatches, .return").show();
    $(".survey").hide();
  }

  if (firstName === "")  {
    $("input#first").addClass("is-invalid");
    $(".invalid-feedback#first, .survey").show();
    $("#c, #design, #ruby, .return, .matched").hide();
  }

  if (lastName === "")  {
    $("input#last").addClass("is-invalid");
    $(".invalid-feedback#last, .survey").show();
    $("#c, #design, #ruby, .return, .matched").hide();
  }

  });
});
