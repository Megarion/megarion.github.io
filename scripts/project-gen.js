// List
let projectsList = [
    ["Card Generator", "🎴 Website to generate Cards and share them", "https://megarion.github.io/Card-Generator/"],
    ["Aggressify", "😡 TURN TEXT INTO ANGRY MESSAGES!!!!", "https://megarion.github.io/Aggressify/"],
    ["ChromeDuck", "🦆 An useless Chrome extension that adds a duck at the bottom of your screen", "https://megarion.github.io/ChromeDuck"],
    ["Website Fetcher", "🔭 Program to fetch the content of an URL (links, images, videos...)", "https://megarion.github.io/Website-Fetcher"],
    ["NoCopy", "🈺 Text converter that change normal characters to look-alike Unicode characters that behaves differently", "https://megarion.github.io/NOCOPY"],
    ["MoistImg", "A (joke) Chrome extension that replace all images with MoistCr1TiKaL", "https://megarion.github.io/MoistImg"],
    ["RediRoll", "A Chrome extension that redirects to the Rick Roll everytime the user clicks a link", "https://megarion.github.io/RediRoll"],
];

let gamesList = [
    ["Polygon Rush", "🔺 [One Minute Jam] Choosing the correct polygons with a time limit", "https://megarion.itch.io/polygon-rush"],
    ["Prime Pong", "⚪ Panasonic game recreation which you choose prime numbers", "https://megarion.itch.io/prime-pong"],
    ["Hold Up", "🔼 [Winter Barjam 2021] Bird go brrr", "https://megarion.itch.io/hold-up"],
    ["Ocean Remotion", "🌊 [SeaJam] A game about cleaning up trash", "https://megarion.itch.io/ocean-remotion"],
    ["D-BUG", "🐛 [Game Off 2021] My debugger is console.log", "https://megarion.itch.io/d-bug"],
];

let programsList = [
    ["Gun Recoil Simulator", "🔫 [C/C++ - Raylib] Simulating Gun Recoil in Raylib", "https://github.com/Megarion/GunRecoil-Raylib"],
    ["Fuse Simulator", "🧨 [C/C++ - Raylib] Simulating Fuse in Raylib", "https://github.com/Megarion/FuseSimulator-Raylib"],
    ["Connect Four", "🔵 [Java] Connect Four game played in console", "https://github.com/Megarion/Connect4-Java"],
    ["Data Generator", "📁 [Python] Program to generate files based on data and template", "https://github.com/Megarion/Data-Generator"],
];

let featuredList = [
    gamesList[1], gamesList[0],
]

// Template
let projectsListRep = ["#title", "#description", "#link"];
let projectTemplate = '<div class="col-md"><a href="#link" target="_blank"><div><span><h4>#title</h4><p>#description</p></span></div></a></div>';

// Generate
function projectGen() {
    let content = '<div class="container">';
    for (let i = 0; i < projectsList.length; i++) {
        let projectSel = projectsList[i];

        let projectEdit = "";

        if (i % 3 == 0) {
            projectEdit += '<div class="row">';
        }

        projectEdit += projectTemplate;
        for (let j = 0; j < projectsListRep.length; j++) {
            let re = new RegExp(projectsListRep[j], 'g');
            projectEdit = projectEdit.replace(re, projectSel[j]);
        }

        if (i % 3 == 2 || i == projectsList.length - 1) {
            projectEdit += '</div>';
        }
        content += projectEdit;
    }
    content += '</div>';
    return content;
}

function gamesGen() {
    let content = '<div class="container">';
    for (let i = 0; i < gamesList.length; i++) {
        let projectSel = gamesList[i];

        let projectEdit = "";

        if (i % 3 == 0) {
            projectEdit += '<div class="row">';
        }

        projectEdit += projectTemplate;
        for (let j = 0; j < projectsListRep.length; j++) {
            let re = new RegExp(projectsListRep[j], 'g');
            projectEdit = projectEdit.replace(re, projectSel[j]);
        }

        if (i % 3 == 2 || i == gamesList.length - 1) {
            projectEdit += '</div>';
        }
        content += projectEdit;
    }
    content += '</div>';
    return content;
}

function programsGen() {
    let content = '<div class="container">';
    for (let i = 0; i < programsList.length; i++) {
        let projectSel = programsList[i];

        let projectEdit = "";

        if (i % 3 == 0) {
            projectEdit += '<div class="row">';
        }

        projectEdit += projectTemplate;
        for (let j = 0; j < projectsListRep.length; j++) {
            let re = new RegExp(projectsListRep[j], 'g');
            projectEdit = projectEdit.replace(re, projectSel[j]);
        }

        if (i % 3 == 2 || i == programsList.length - 1) {
            projectEdit += '</div>';
        }
        content += projectEdit;
    }
    content += '</div>';
    return content;
}

function featuredGen() {
    let content = '<div class="container">';
    for (let i = 0; i < featuredList.length; i++) {
        let projectSel = featuredList[i];

        let projectEdit = "";

        if (i % 3 == 0) {
            projectEdit += '<div class="row">';
        }

        projectEdit += projectTemplate;
        for (let j = 0; j < projectsListRep.length; j++) {
            let re = new RegExp(projectsListRep[j], 'g');
            projectEdit = projectEdit.replace(re, projectSel[j]);
        }

        if (i % 3 == 2 || i == featuredList.length - 1) {
            projectEdit += '</div>';
        }
        content += projectEdit;
    }
    content += '</div>';
    return content;
}