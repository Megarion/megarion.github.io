function hideAllTabs(){
    $('#po').hide();
    $('#ga').hide();
    $('#to').hide();
    $('#pr').hide();

    $('#tpo').css("filter", "brightness(100%)");
    $('#tga').css("filter", "brightness(100%)");
    $('#tto').css("filter", "brightness(100%)");
    $('#tpr').css("filter", "brightness(100%)");
}

$(document).ready(function(){
    // Fade in effect
    $("body").hide();
    $("body").fadeIn("slow");
    $("body").show();

    // Tabs
    hideAllTabs();

    $('#po').show();
    $('#tpo').css("filter", "brightness(120%)");

    $('#tpo').click(function(){
        hideAllTabs();
        $('#po').show();
        $('#tpo').css("filter", "brightness(120%)");
    });

    $('#tga').click(function(){
        hideAllTabs();
        $('#ga').show();
        $('#tga').css("filter", "brightness(120%)");
    });

    $('#tto').click(function(){
        hideAllTabs();
        $('#to').show();
        $('#tto').css("filter", "brightness(120%)");
    });

    $('#tpr').click(function(){
        hideAllTabs();
        $('#pr').show();
        $('#tpr').css("filter", "brightness(120%)");
    });
});