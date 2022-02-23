let projectsVisited = false;

let tablist = [
    "about", "contacts", "projects", "share"
];

// Utility functions
function gID(elem){
    return document.getElementById(elem);
}

function hide(elem) {
    gID(elem).style.display = 'none';
}

function show(params) {
    gID(params).style.display = 'block';
}

// Interactive functions
function hideAllTabs(){
    for (let i = 0; i < tablist.length; i++) {
        gID(tablist[i]).style.display = 'none';
    }
}

function tabSwitch(tab){
    hideAllTabs();
    gID(tab).style.display = 'block';
}

function aboutHidden(){
    gID('more').style.display = 'none';
    gID('less').style.display = 'none';
}

function aboutExpand(){
    aboutHidden();
    gID('more').style.display = 'block';
}

function aboutCollapse(){
    aboutHidden();
    gID('less').style.display = 'block';
}

// Main code
window.addEventListener("load", () => {
    tabSwitch('about');
});
