// @ts-check

class LINK {
    /**
     * @param {string} url
     * @param {string} text
     */
    constructor(url, text) {
        this.url = url;
        this.text = text;
    }
}

class ITEM {
    /**
     * @param {string} name
     * @param {string} description
     * @param {LINK[]} link
     * @param {string} img
     */
    constructor(name, description, link, img) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.img = img;
    }
}

let projects = [
    new ITEM(
        "DemonlistBot",
        "Utility bot to fetch the Geometry Dash Pointercrate Demonlist information",
        [
            new LINK("https://discord.com/api/oauth2/authorize?client_id=955387454666444870&permissions=0&scope=bot", "Invite"),
            new LINK("https://megarion.github.io/DemonlistBot/", "Website")
        ],
        "https://megarion.github.io/DemonlistBot/assets/screenshot001.png"
    ),
    new ITEM(
        "Aggressify",
        "Turn text into angry messages",
        [new LINK("https://megarion.github.io/TextTools/Aggressify/", "Website")],
        "images/1.png"
    ),
    // new ITEM(
    //     "Neighbor Simulator",
    //     "Visual math simulation of a neighborhood",
    //     [new LINK("https://megarion.github.io/neighbors/", "Website")],
    //     "images/2.png"
    // ),
];

export {projects};