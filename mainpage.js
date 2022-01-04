// To add a new tab: Hide the tab and add the button's CSS in the hideAllTabs function. Add a new event that when the new button is clicked, hide all tabs and show the new tab. 

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