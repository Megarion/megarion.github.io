let homepageActive = true;

// Activate home page
function home() {
    if (homepageActive) return;
    homepageActive = true;
    $('#projects-element').fadeOut(500);
    setTimeout(() => {
        $('#home-element').fadeIn(500);
    }, 500);
}

// Activate projects page
function projects() {
    if (!homepageActive) return;
    homepageActive = false;
    $('#home-element').fadeOut(500);
    setTimeout(() => {
        $('#projects-element').fadeIn(500);
    }, 500);
}

// Main script
$(document).ready(function () {
    // Prepare
    $('#projects-element').hide();

    // Generate Projects
    $('#featured-display').html(featuredGen());
    $('#projects-display').html(projectGen());
    $('#programs-display').html(programsGen());

    // Generate Contacts
    $('#navbar-contact').html(contactGen());
    $('#home-contact').html(contactGenAlt());

    // Animation
    $('body').hide();
    $('body').fadeIn(500);
    $('body').show();

    // Events
    $('#home-navi').click(function () {
        home();
    });

    $('#projects-navi').click(function () {
        projects();
    });

});