// VSCode TS Config
// @ts-check

let list = $("#pList");
let popup = {
    main: $("#popup"),
    image: $("#popup-image"),
    name: $("#popup-name"),
    description: $("#popup-description"),
    tags: $("#popup-tags"),
    details: $("#popup-details"),
    link: $("#popup-link"),
    close: $("#popup-close"),
}

popup['init-popup'] = function () {
    popup.main.hide();
};

popup['open-popup'] = function (
    /** 
     * @type {{ 
     *  image: string; 
     *  name: string;
     *  description: string;
     *  filter: string[];
     *  details: string;
     *  link: string;
     * }} 
     */ 
    
    prop
) {
    popup.image.attr("src", prop.image);
    popup.name.html(prop.name);
    popup.description.html(prop.description);
    popup.tags.html("<i>" + prop.filter.join("</i>, <i>") + "</i>");
    popup.details.html(prop.details);
    popup.link.attr("href", prop.link);

    popup.main.show();
};

popup['close-popup'] = function() {
    popup.main.hide();
};

class Item {
    /**
     * @param {string} name
     * @param {string} description
     * @param {string} image
     * @param {string} link
     * @param {string[]} filter
     * @param {string} details
     */
    constructor(name, description, link, image, filter=[], details) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.link = link;
        this.filter = filter;
        this.details = details;
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
    new Item(
        "DemonlistBot", 
        "Utility bot to fetch the Geometry Dash Pointercrate Demonlist information", 
        "https://megarion.github.io/DemonlistBot/", 
        "https://megarion.github.io/DemonlistBot/assets/screenshot001.png",
        ["tool", "gd"],
        "Javascript (discord.js)"
    ),

    new Item(
        "Aggressify", 
        "Turn text into angry messages", 
        "https://megarion.github.io/TextTools/Aggressify/", 
        "images/1.png",
        ["tool"],
        "JavaScript"
    ),

    new Item(
        "Neighborhood Simulator", 
        "Visual math project", 
        "https://megarion.github.io/neighbors/", 
        "images/2.png",
        ["interactive"],
        "JavaScript (jQuery, jCanvas)"
    ),
];

let template = `
<div class="col-4 col-12-medium">
    <span class="image fit" id="display-img"><img src="$image" alt="" /></span>
    <h3>$name</h3>
    <p>$description</p>
    <ul class="actions special">
        <li><a href="$link" class="button" target="_blank">Go</a></li>
    </ul>
</div>
`;

function display(filter="") {
    let html = "";

    for (let i = 0, j = 0; i < projects.length; i++) {
        const item = projects[i];

        let condition = [
            j % 3 == 0 ,
            filter == "" || item.filter.includes(filter), 
            j % 3 == 2 || i == projects.length - 1
        ];
        
        if (condition[0]) {
            html += `<div class="row gtr-150">`;
        }
    
        let data = replaceAll(template, 
            ["$name", "$description", "$image", "$link"], 
            [item.name, item.description, item.image, item.link]
        );
    
        if (condition[1]) {
            html += data;
        } else {
            j--;
        }
    
        if (condition[2]) {
            html += `</div>`;
        }

        j++;
    }

    list.html(html);
}

// Main code
jQuery(function() { 
    popup['init-popup']();
    display();

    popup.close.click(function() {
        popup['close-popup']();
    });

    $("[id='display-img']").click(function() {
        popup['open-popup'](projects[$(this).parent().index()]);
    });
})