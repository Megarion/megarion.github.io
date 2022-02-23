let tablist = [
    "about", "contacts", "projects"
];

let visitProjects = false;

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

function tabSwitch(tab){
    hideAllTabs();

    if (!(tab == 'about')) {
        gID('anim1').classList.remove("animation1");
        gID('anim2').classList.remove("animation2");
        gID('anim3').classList.remove("animation3");
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

function showPopup(title, description, image, link){
    gID('popupTitle').innerHTML = title;
    gID('popupText').innerHTML = description;
    gID('popupImage').src = image;
    gID('popupButton').onclick = function () {
        window.open(link, '_blank');
    } 
    setTimeout(() => {
        show(gID('popup'));
    }, 15);
    
}

function hidePopup() {
    hide(gID('popup'));
}

// Main code
window.addEventListener("load", () => {
    // Preparation
    hide(gID('more'));
    hide(gID('morePL'));
    tabSwitch('about');

    // Items
    gID('toolsPL').innerHTML = projectGen(toolsList);
    gID('gamesPL').innerHTML = projectGen(gamesList);
    gID('programsPL').innerHTML = projectGen(programsList);
    gID('featuredPL').innerHTML = featuredGen(featuredList);

    gID('loading').classList.add("animationLoading");
    gID('anim1').classList.add("animation1");
    gID('anim2').classList.add("animation2");
    gID('anim3').classList.add("animation3");
    setTimeout(() => {
        gID('loading').style.marginTop = '-100vh';
    }, 3000);
});
