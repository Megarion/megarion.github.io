// List
let projectsList = [
    ["Polygon Rush", "🔺 Game Submission for One Minute Jam", "https://megarion.itch.io/polygon-rush", false],
    ["Card Generator", "🎴 Website to generate Cards and share them", "https://megarion.github.io/Card-Generator/", false],
    ["Aggressify", "😡 TURN TEXT INTO ANGRY MESSAGES!!!!", "https://megarion.github.io/Aggressify/", false],
    ["ChromeDuck", "🦆 An useless Chrome extension that adds a duck at the bottom of your screen", "https://megarion.github.io/ChromeDuck", false],
    ["Website Fetcher", "🔭 Program to fetch the content of an URL (links, images, videos...)", "https://megarion.github.io/Website-Fetcher", false],
    ["Hold Up", "🔼 Game Submission for Winter Barjam 2021", "https://megarion.itch.io/hold-up", false],
    ["NoCopy", "🈺 Text converter that change normal characters to look-alike Unicode characters that behaves differently", "https://megarion.github.io/NOCOPY", false],
    ["Ocean Remotion", "🌊 Game made for SeaJam", "https://megarion.itch.io/ocean-remotion", false],
    ["D-BUG", "🐛 Game Submission for Game Off 2021", "https://megarion.itch.io/d-bug", false],
    ["MoistImg", "A (joke) Chrome extension that replace all images with MoistCr1TiKaL", "https://megarion.github.io/MoistImg", false],
    ["RediRoll", "A Chrome extension that redirects to the Rick Roll everytime the user clicks a link", "https://megarion.github.io/RediRoll", false],
];

let programsList = [
    ["Gun Recoil Simulator", "🔫 [C/C++ - Raylib] Simulating Gun Recoil in Raylib", "https://github.com/Megarion/GunRecoil-Raylib", false],
    ["Fuse Simulator", "🧨 [C/C++ - Raylib] Simulating Fuse in Raylib", "https://github.com/Megarion/FuseSimulator-Raylib", false],
    ["Connect Four", "🔵 [Java] Connect Four game played in console", "https://github.com/Megarion/Connect4-Java", false],
    ["Data Generator", "📁 [Python] Program to generate files based on data and template", "https://github.com/Megarion/Data-Generator", false],
];

// Template
let projectsListRep = ["#title", "#description", "#link"];
let projectTemplate = '<div class="col-md"><a href="#link"><div><span><h4>#title</h4><p>#description</p></span></div></a></div>';

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
            projectEdit+= '</div>';
        }
        content+=projectEdit;
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
            projectEdit+= '</div>';
        }
        content+=projectEdit;
    }
    content += '</div>';
    return content;
}

function featuredGen() {
    let featured = false;
    let content = '<div class="container">';
    for (let i = 0; i < programsList.length; i++) {
        let projectSel = programsList[i];

        let projectEdit = "";
        if (projectSel[3]) {
            featured = true;
            if (i % 3 == 0) {
                projectEdit += '<div class="row">';
            }
    
            projectEdit += projectTemplate;
            for (let j = 0; j < projectsListRep.length; j++) {
                let re = new RegExp(projectsListRep[j], 'g');
                projectEdit = projectEdit.replace(re, projectSel[j]);
            }
    
            if (i % 3 == 2 || i == programsList.length - 1) {
                projectEdit+= '</div>';
            }
        }
        content+=projectEdit;
    }
    for (let i = 0; i < projectsList.length; i++) {
        let projectSel = projectsList[i];

        let projectEdit = "";
        if (projectSel[3]) {
            featured = true;
            if (i % 3 == 0) {
                projectEdit += '<div class="row">';
            }
            projectEdit += projectTemplate;
            for (let j = 0; j < projectsListRep.length; j++) {
                let re = new RegExp(projectsListRep[j], 'g');
                projectEdit = projectEdit.replace(re, projectSel[j]);
            }

            if (i % 3 == 2 || i == projectsList.length - 1) {
                projectEdit+= '</div>';
            }
        }
        content+=projectEdit;
    }
    content += '</div>';

    if (featured) {
        return content;
    }
    
    return "<p class='sub'>Nothing here yet...</p>";
}