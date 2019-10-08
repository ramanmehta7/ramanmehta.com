$(window).load(function() {
  $(".col-xs-12").twentytwenty();
});

$("#name").click(function(){
    $("#name").text("Don't Disturb me!");
//    $("#handJS").html("<div></div>");
});

$("#nav-name").click(function(){
    $("#name").text("Don't Disturb me!");
//    $("#handJS").html("<div></div>");
});

$(document).ready(function(){
    $("#aboutid").click(function(){
        $("#aboutdiv1").delay(1000).fadeIn("slow");
        $("#aboutdiv2").delay(1750).fadeIn("slow");
        $("#aboutdiv3").delay(2700).fadeIn("slow");
        $("#aboutdiv4").delay(3450).fadeIn("slow");
    });
});
