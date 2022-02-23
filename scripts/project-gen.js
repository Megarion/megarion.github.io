// List
let toolsList = [
    ["NoCopy", "🈺 Text converter that change normal characters to look-alike Unicode characters that behaves differently", "https://megarion.github.io/NOCOPY"],
    ["Aggressify", "😡 TURN TEXT INTO ANGRY MESSAGES!!!!", "https://megarion.github.io/Aggressify/"],
    ["Card Generator", "🎴 Website to generate Cards and share them", "https://megarion.github.io/Card-Generator/"],
    ["ChromeDuck", "🦆 An useless Chrome extension that adds a duck at the bottom of your screen", "https://megarion.github.io/ChromeDuck"],
    ["Website Fetcher", "🔭 Program to fetch the content of an URL (links, images, videos...)", "https://megarion.github.io/Website-Fetcher"],
    ["MoistImg", "A (joke) Chrome extension that replace all images with MoistCr1TiKaL", "https://megarion.github.io/MoistImg"],
    ["RediRoll", "A Chrome extension that redirects to the Rick Roll everytime the user clicks a link", "https://megarion.github.io/RediRoll"],
];

let gamesList = [
    ["Polygon Rush", "🔺 Game submission for One Minute Jam which you select polygons", "https://megarion.itch.io/polygon-rush"],
    ["Ocean Remotion", "🌊 [SeaJam] A game about cleaning up trash", "https://megarion.itch.io/ocean-remotion"],
    ["Hold Up", "🔼 [Winter Barjam 2021] Bird go brrr", "https://megarion.itch.io/hold-up"],
    ["Prime Pong", "⚪ Panasonic game recreation", "https://megarion.itch.io/prime-pong"],
    ["D-BUG", "🐛 [Game Off 2021] My debugger is console.log", "https://megarion.itch.io/d-bug"],
];

let programsList = [
    ["Gun Recoil Simulator", "🔫 [C/C++ - Raylib] Simulating Gun Recoil in Raylib", "https://github.com/Megarion/GunRecoil-Raylib"],
    ["Fuse Simulator", "🧨 [C/C++ - Raylib] Simulating Fuse in Raylib", "https://github.com/Megarion/FuseSimulator-Raylib"],
    ["Connect Four", "🔵 [Java] Connect Four game played in console", "https://github.com/Megarion/Connect4-Java"],
    ["Data Generator", "📁 [Python] Program to generate files based on data and template", "https://github.com/Megarion/Data-Generator"],
];

let featuredList = [
    [toolsList[1], "assets/img/1.png"],
    [toolsList[5], "assets/img/2.png"],
]

function projectGen(list) {
    let result = "";
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        result+= `<a href="${
            item[2]
        }" target="_blank"><div><h2>${
            item[0]
        }</h2><p>${
            item[1]
        }</p></div></a>`;
    }
    return result;
}

function featuredGen(list) {
    let result = "";
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        result+= `<button onclick="showPopup('${item[0][0]}', '${item[0][1]}', '${item[1]}', '${item[0][2]}')">${item[0][0]}</button>`;
    }
    return result;
}