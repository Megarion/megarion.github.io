// VSCode TS Config
// @ts-check

let list = $("#pList");

class Item {
    /**
     * @param {string} name
     * @param {string} description
     * @param {string} image
     * @param {string} link
     */
    constructor(name, description, link, image) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.link = link;
    }
}

/**
 * @param {string} s
 * @param {string[]} search
 * @param {string[]} replace
 */
function replaceAll(s, search, replace) {
    if (search > replace) {
        return s;
    }

    let sResult = s;

    for (let i = 0; i < search.length; i++) {
        const srItem = search[i];
        const rItem = replace[i];
        
        sResult = sResult.split(srItem).join(rItem);
    }

    return sResult;
}

let projects = [
    new Item("DemonlistBot", "Utility bot to fetch the Geometry Dash Pointercrate Demonlist information", "https://megarion.github.io/DemonlistBot/", "https://megarion.github.io/DemonlistBot/assets/screenshot001.png"),
    new Item("Aggressify", "Turn text into angry messages", "https://megarion.github.io/TextTools/Aggressify/", "images/1.png"),
    new Item("Neighborhood Simulator", "Visual math project", "https://megarion.github.io/neighbors/", "images/2.png"),
];

let template = `
<div class="col-4 col-12-medium">
    <span class="image fit"><img src="$image" alt="" /></span>
    <h3>$name</h3>
    <p>$description</p>
    <ul class="actions special">
        <li><a href="$link" class="button" target="_blank">Go</a></li>
    </ul>
</div>
`;

let html = "";

for (let i = 0; i < projects.length; i++) {
    const item = projects[i];
    
    if (i % 3 == 0) {
        html += `<div class="row gtr-150">`;
    }

    html +=
        replaceAll(template, 
            ["$name", "$description", "$image", "$link"], 
            [item.name, item.description, item.image, item.link]
        );

    if (i % 3 == 2 || i == projects.length - 1) {
        html += `</div>`;
    }
}

list.append(html);

// Main code
jQuery(function() { 

})