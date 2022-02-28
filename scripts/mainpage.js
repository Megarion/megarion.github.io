let tablist = [
    "about", "contacts", "projects"
];

let visitProjects = false;
let visitContacts = false;

// Utility functions
function gID(elem){
    return document.getElementById(elem);
}

function hide(elem) {
    elem.style.display = 'none';
}

function show(elem) {
    elem.style.display = 'block';
}

// Interactive functions
function hideAllTabs(){
    for (let i = 0; i < tablist.length; i++) {
        hide(gID(tablist[i]));
    }
}

function addAnimAbout() {
    gID('anim1').classList.add("animation1");
    gID('anim2').classList.add("animation2");
}

function removeAnimAbout() {
    gID('anim1').classList.remove("animation1");
    gID('anim2').classList.remove("animation2");
}

function addAnimProjects(){
    gID('anim1PL').classList.add("animation4");
    gID('anim2PL').classList.add("animation5");
    gID('featuredPL').classList.add("animation6");
    gID('lessPL').classList.add("animation7");
}

function removeAnimProjects(patch){
    if (!patch) {
        gID('anim1PL').classList.remove("animation4");
    }

    gID('anim2PL').classList.remove("animation5");
    gID('featuredPL').classList.remove("animation6");
    gID('lessPL').classList.remove("animation7");
}

function addAnimContacts(){
    gID('anim1CT').classList.add("animation4");
    gID('anim2CT').classList.add("animation5");
    gID('anim3CT').classList.add("animation6");
}

function removeAnimContacts(patch){
    if (!patch) {
        gID('anim1CT').classList.remove("animation4");
    }

    gID('anim2CT').classList.remove("animation5");
    gID('anim3CT').classList.remove("animation6");
}

function addAnimNav() {
    gID('navanim1').classList.add("animation8");
    gID('navanim2').classList.add("animation9");
    gID('navanim3').classList.add("animation10");
    gID('navanim4').classList.add("animation11");
}


function removeAnimNav() {
    gID('navanim1').classList.remove("animation8");
    gID('navanim2').classList.remove("animation9");
    gID('navanim3').classList.remove("animation10");
    gID('navanim4').classList.remove("animation11");
}

function tabSwitch(tab){
    hideAllTabs();

    if (!(tab == 'about')) {
        removeAnimAbout();
    }

    if (tab == 'projects') {
        visitProjects = true;

        setTimeout(() => {
            removeAnimProjects(true);
        }, 2250);
    }

    if (!(tab == 'projects') && visitProjects) {
        removeAnimProjects(false);
    }

    if (tab == 'contacts') {
        visitContacts = true;

        setTimeout(() => {
            removeAnimContacts(true);
        }, 2250);
    }

    if (!(tab == 'contacts') && visitContacts) {
        removeAnimContacts(false);
    }

    show(gID(tab));
}

function aboutHidden(){
    hide(gID('more'));
    hide(gID('less'));
}

function aboutExpand(){
    aboutHidden();
    show(gID('more'));
}

function aboutCollapse(){
    aboutHidden();
    show(gID('less'));
}

function projectHidden(){
    hide(gID('morePL'));
    hide(gID('lessPL'));
}

function projectExpand(){
    projectHidden();
    show(gID('morePL'));
}

function projectCollapse(){
    projectHidden();
    show(gID('lessPL'));
}

function showPopup(title, description, image, input, type){
    gID('popupTitle').innerText = title;
    gID('popupText').innerText = description;
    gID('popupImage').src = image;
    if (type == 'open') { // input = link
        gID('popupButton').onclick = function () {
            window.open(input, '_blank');
        } 
        gID('popupButton').innerText = 'Open!';
    } else if (type == 'copy') { // input = text
        gID('popupButton').onclick = function () {
            navigator.clipboard.writeText(input);
        } 
        gID('popupButton').innerText = 'Copy!';
    }
    setTimeout(() => {
        show(gID('popup'));
    }, 10);
}

function hidePopup() {
    hide(gID('popup'));
}

// Main code
window.addEventListener("load", () => {
    // Preparation
    hide(gID('morePL'));

    // Items
    gID('toolsPL').innerHTML = projectGen(toolsList);
    gID('gamesPL').innerHTML = projectGen(gamesList);
    gID('programsPL').innerHTML = projectGen(programsList);
    gID('featuredPL').innerHTML = featuredGen(featuredList);

    gID('loading').classList.add("animationLoading");
    addAnimNav();
    addAnimAbout();
    addAnimProjects();
    addAnimContacts();

    setTimeout(() => {
        gID('loading').style.marginTop = '-100vh';

        removeAnimNav();
    }, 1500);
});
