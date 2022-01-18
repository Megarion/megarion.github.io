$(document).ready(function () {

    // 0 = Tab, 1 = Button
    let selElem = [
        [$("#spo"), $("#tpo")],
        [$("#sga"), $("#tga")],
        [$("#sto"), $("#tto")],
        [$("#spr"), $("#tpr")]
    ]

    // First array = Featured
    // 0 = Title, 1 = Description, 2 = Link, 3 = Featured (true/false)
    let selOption = [
        [],

        [
            ["Polygon Rush", "🔺 Submission for One Minute Jam", "https://megarion.itch.io/polygon-rush", false],
            ["Ocean Remotion", "🌊 Game made for SeaJam", "https://megarion.itch.io/ocean-remotion", false],
            ["Hold Up", "🔼 Submission for Winter Barjam 2021", "https://megarion.itch.io/hold-up", false],
            ["D-BUG", "🐛 Submission for Game Off 2021", "https://megarion.itch.io/d-bug", false],
        ],

        [
            ["Aggressify", "😡 TURN TEXT INTO ANGRY MESSAGES!!!!", "https://megarion.github.io/Aggressify/", false],
            ["ChromeDuck", "🦆 An useless Chrome extension that adds a duck at the bottom of your screen", "https://megarion.github.io/ChromeDuck", 2, false],
            ["NoCopy", "🈺 Text converter that change normal characters to look-alike Unicode characters that behaves differently", "https://megarion.github.io/NOCOPY", 2, false],
            ["Website Fetcher", "🔭 Program to fetch the content of an URL (links, images, videos...)", "https://megarion.github.io/Website-Fetcher/", 2, false],
            ["MoistImg", "A (joke) Chrome extension that replace all images with MoistCr1TiKaL", "https://megarion.github.io/MoistImg", 2, false],
            ["RediRoll", "A Chrome extension that redirects to the Rick Roll everytime the user clicks a link", "https://megarion.github.io/RediRoll/", 2, false],
        ],

        [
            ["Fuse Simulator", "🧨 [C/C++ - Raylib] Simulating Fuse in Raylib", "https://github.com/Megarion/FuseSimulator-Raylib", 3, false],
            ["Connect Four", "🔵 [Java] Connect Four game played in console", "https://github.com/Megarion/Connect4-Java", 3, false],
            ["Gun Recoil Simulator", "🔫 [C/C++ - Raylib] Simulating Gun Recoil in Raylib", "https://github.com/Megarion/GunRecoil-Raylib", 3, false],
            ["Data Generator", "📁 [Python] Program to generate files based on data and template", "https://github.com/Megarion/Data-Generator", 3, false],
        ],
    ];

    // To add a new tab: 
    // Hide the tab and add the button's CSS in the hideAllTabs function. 
    // Add a new event that when the new button is clicked, hide all tabs and show the new tab. 

    function hideAllTabs() {
        for (let i = 0; i < selElem.length; i++) {
            selElem[i];
            selElem[i][0].hide();
            selElem[i][1].css("filter", "brightness(100%)");
        }
    }

    // Add elements to selection
    for (let i = 0; i < selElem.length; i++) {
        selElem[i][0].html("");

        selElem[i][1].click(function () {
            hideAllTabs();
            selElem[i][0].show();
            selElem[i][1].css("filter", "brightness(120%)");
        });
    }

    for (let i = 0; i < selOption.length; i++) {
        let replace = "";

        if (!(selOption[i].length > 0)) {
            replace = "<p>Nothing here yet</p>";
            continue;
        }

        for (let j = 0; j < selOption[i].length; j++) {
            if ((j + 1) % 2 == 1) {
                replace += '<div class="grid">';
            }

            let content = '<a target="_blank" class="op" href="' + selOption[i][j][2] + '"><h3>' + selOption[i][j][0] + '</h3><p>' + selOption[i][j][1] + '</p></a>';
            replace += content;

            if ((j + 1) % 2 == 0 || j + 1 == selOption[i].length) {
                replace += "</div>";
            }
        }

        selElem[i][0].html(replace);
    }

    // Fade in effect
    $("body").hide();
    $("body").fadeIn("slow");
    $("body").show();

    // Tabs
    hideAllTabs();

    selElem[0][0].show();
    selElem[0][1].css("filter", "brightness(120%)");

});