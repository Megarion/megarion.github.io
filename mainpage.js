let homepageActive = true;

function home() {
    if (homepageActive) return;
    homepageActive = true;
    $('#projects-element').fadeOut(500);
    setTimeout(() => {
        $('#home-element').fadeIn(500);
    }, 500);
}

function projects() {
    if (!homepageActive) return;
    homepageActive = false;
    $('#home-element').fadeOut(500);
    setTimeout(() => {
        $('#projects-element').fadeIn(500);
    }, 500);
}

$(document).ready(function () {
    $('#projects-display').html(projectGen());
    $('#navbar-contact').html(contactGen());
    $('#home-contact').html(contactGenAlt());

    $('body').hide();
    $('body').fadeIn(500);
    $('body').show();

    $('#projects-element').hide();

    $('#home-navi').click(function () {
        home();
    });

    $('#projects-navi').click(function () {
        projects();
    });

});