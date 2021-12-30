$("body").hide();
$("body").fadeIn("slow");

$(document).ready(function(){
    $('#po').show();
    $('#ga').hide();
    $('#to').hide();
    $('#pr').hide();

    $('#tpo').css("filter", "brightness(120%)");
    $('#tga').css("filter", "brightness(100%)");
    $('#tto').css("filter", "brightness(100%)");
    $('#tpr').css("filter", "brightness(100%)");

    $('#tpo').click(function(){
        $('#po').show();
        $('#ga').hide();
        $('#to').hide();
        $('#pr').hide();

        $('#tpo').css("filter", "brightness(120%)");
        $('#tga').css("filter", "brightness(100%)");
        $('#tto').css("filter", "brightness(100%)");
        $('#tpr').css("filter", "brightness(100%)");
    });

    $('#tga').click(function(){
        $('#po').hide();
        $('#ga').show();
        $('#to').hide();
        $('#pr').hide();

        $('#tpo').css("filter", "brightness(100%)");
        $('#tga').css("filter", "brightness(120%)");
        $('#tto').css("filter", "brightness(100%)");
        $('#tpr').css("filter", "brightness(100%)");
    });

    $('#tto').click(function(){
        $('#po').hide();
        $('#ga').hide();
        $('#to').show();
        $('#pr').hide();

        $('#tpo').css("filter", "brightness(100%)");
        $('#tga').css("filter", "brightness(100%)");
        $('#tto').css("filter", "brightness(120%)");
        $('#tpr').css("filter", "brightness(100%)");
    });

    $('#tpr').click(function(){
        $('#po').hide();
        $('#ga').hide();
        $('#to').hide();
        $('#pr').show();

        $('#tpo').css("filter", "brightness(100%)");
        $('#tga').css("filter", "brightness(100%)");
        $('#tto').css("filter", "brightness(100%)");
        $('#tpr').css("filter", "brightness(120%)");
    });
});