// List
let toolsList = [
    ["Neighborhood Simulator", "Visuals math project", "https://megarion.github.io/neighbors"],
    ["NoCopy", "Text converter that change normal characters to look-alike Unicode characters that behaves differently", "https://megarion.github.io/TextTools/NOCOPY"],
    ["Aggressify", "😡 TURN TEXT INTO ANGRY MESSAGES!!!!", "https://megarion.github.io/TextTools/Aggressify"],
    ["ChromeDuck", "🦆 An useless Chrome extension that adds a duck at the bottom of your screen", "https://megarion.github.io/ChromeDuck"],
    ["MoistImg", "A (joke) Chrome extension that replace all images with MoistCr1TiKaL", "https://megarion.github.io/MoistImg"],
    ["RediRoll", "A Chrome extension that redirects to the Rick Roll everytime the user clicks a link", "https://megarion.github.io/RediRoll"],
];

// let gamesList = [
// ];

// let programsList = [
// ];

let featuredList = [
    [toolsList[0], "assets/img/3.png"],
    [toolsList[2], "assets/img/1.png"],
    [toolsList[4], "assets/img/2.png"],
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
        result+= `<button onclick="showPopup('${
            item[0][0]
        }', '${
            item[0][1]
        }', '${
            item[1]
        }', '${
            item[0][2]
        }', 'open')">${
            item[0][0]
        }</button>`;
    }
    return result;
}