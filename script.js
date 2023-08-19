class SECTION {
    constructor(title, content) {
        this.title = title; // text
        this.content = content; // html
    }
}

const urlParams = new URLSearchParams(window.location.search);


const slider = document.querySelector("#slider"),
    points = slider.querySelectorAll(".point"),
    container = document.querySelector("#container"),
    textArea = document.querySelector("#textArea"),
    textDisplay = document.querySelector("#textDisplay"),
    textDisplayTitle = document.querySelector("#textDisplayTitle"),
    textDisplayContent = document.querySelector("#textDisplayContent"),
    maxDelta = window.innerWidth / 3 * 2,
    content = [
        new SECTION("Projects", `<ul>
            <li><a class="link" href="https://temp-anywhere.vercel.app/" target="_blank">Temperature Anywhere</a> Get weather data anywhere on the map</li>
            <li><a class="link" href="https://megarion.github.io/DemonlistBot/" target="_blank">DemonlistBot</a> Discord bot to fetch the Geometry Dash Demonlist data</li>
            <li><a class="link" href="https://github.com/Megarion/NoYoutubeShorts" target="_blank">NoYoutubeShorts</a> Chrome extension that lets you browse YouTube shorts like normal YouTube videos</li>
        </ul><br>
        <details>
            <summary>All projects</summary>
            <p>Hover over item for details</p>
            <details open>
                <summary>2023</summary>
                <ul>
                    <li><a href="page/desktopchess/" target="_blank" title="Chess on the Windows 10 desktop">Desktop Chess</a></li>
                    <li><a href="https://github.com/Megarion/minecraft-zombie-apocalypse" target="_blank" title="(Bad) Zombie apocalypse datapack">minecraft-zombie-apocalypse</a></li>
                    <li><a href="https://temp-anywhere.vercel.app/" target="_blank" title="Get weather data anywhere on the map">Temperature Anywhere</a></li>
                    <li><a href="https://github.com/Megarion/NoYoutubeShorts" target="_blank" title="Chrome extension that lets you browse YouTube shorts like normal YouTube videos">NoYoutubeShorts</a></li>
                    <li><a href="page/reactFlaskApi-template/" target="_blank" title="Template for a React app with Flask as backend">reactFlaskApi-template</a></li>
                </ul>
            </details>
            <details>
                <summary>2022</summary>
                <ul>
                    <li><a href="https://megarion.github.io/DemonlistBot/" target="_blank" title="Discord bot to fetch the Geometry Dash Demonlist data">DemonlistBot</a></li>
                    <li><a href="https://github.com/Megarion/mccg-archive/" target="_blank" title="(Bad) Minecraft PVE map">mccg-archive</a></li>
                    <li>
                        <details>
                            <summary><a href="https://megarion.github.io/TextTools/" target="_blank" title="Text conversion tools">TextTools</a></summary>
                            <ul>
                                <li><a href="https://megarion.github.io/TextTools/Germanize/" target="_blank">Germanize</a></li>
                                <li><a href="https://megarion.github.io/TextTools/TextBypass/" target="_blank">TextBypass <i>(formerly NoCopy)</i></a></li>
                                <li><a href="https://megarion.github.io/TextTools/Aggressify/" target="_blank">Aggressify</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="https://megarion.github.io/neighbors/" target="_blank" title="A project to simulate neighbors moving without communication (can lead to some messy results)">neighbors</a></li>
                </ul>
            </details>
        </details><br>
        <p>Most of my projects are licensed under the <a href="https://github.com/Megarion/megarion.github.io/blob/main/LICENSE" target="_blank">GPL-3.0 license</a></p>
        <button onclick="exit()">Exit</button>`),
        new SECTION("Links", `<ul>
            <li><a href="https://github.com/Megarion" target="_blank">GitHub</a></li>
            <li><a href="https://www.youtube.com/channel/UCBrlr_nVSQ_4kZtsY58Q8wA" target="_blank">YouTube</a></li>
            <li><a href="" onclick="return false;">Discord</a>: megarionn (Megarion#0892)</li>
            <li><a href="https://ch.tetr.io/u/megarion" target="_blank">tetr.io</a></li>
        </ul><button onclick="exit()">Exit</button>`),
        new SECTION("Docs", `<p></p><ol reversed>
            <li><a href="doc/1.html" target="_blank">No longer open-sourcing some projects</a></li>
        </ol><button onclick="exit()">Exit</button>`),
        new SECTION("Dumpster", `<p>Under construction :)</p><button onclick="exit()">Exit</button>`),
    ];

function clamp(min, num, max, exceedFunction) {
    const v = Math.min(Math.max(num, min), max);
    if (v != num) { exceedFunction(); }
    return v;
}

let mouseDownAt = 0,
    mouseDown = false,
    mouseMoved = 0,
    prevMouseMoved = 0,
    sliderMoveAllow = true,
    pointFixedClickAllow = false,
    currentImg = -1,
    originalPos = {
        top: 0,
        left: 0
    }

for (const i in points) {
    const img = points[i];
    img.onclick = function () {
        if (!sliderMoveAllow) { return; }
        currentImg = i;
        sliderMoveAllow = false;

        originalPos.top = slider.getBoundingClientRect().top;
        originalPos.left = img.getBoundingClientRect().left;
        container.style.display = "flex";
        container.style.position = "fixed";
        textDisplayTitle.innerHTML = content[i].title;
        textDisplayContent.innerHTML = content[i].content;

        container.animate(
            [
                { top: `${originalPos.top+16}px`, left: `${originalPos.left+16}px`, width: "0px", height: "0px" },
                { width: "3000px", height: "3000px", top: `${originalPos.top+16-1500}px`, left: `${originalPos.left+16-1500}px` }
            ],
            { duration: 600, fill: "forwards", easing: "ease-in-out" }
        );

        if (urlParams.get('gallery')==1){
            
        } else {
            setTimeout(() => {
                textArea.style.display = "flex";
                textDisplay.style.display = "block";
                textArea.animate(
                    [
                        { opacity: 0 },
                        { opacity: 1 }
                    ],
                    { duration: 600, fill: "forwards", easing: "ease-in-out" }
                );
            }, 600);
        }

        setTimeout(() => {
            pointFixedClickAllow = true;
        }, 600);
    }
}

function exit() {
    if (!pointFixedClickAllow) { return; }
    pointFixedClickAllow = false;

    if (urlParams.get('gallery')==1){
        container.animate(
            [
                { width: "3000px", height: "3000px", top: `${originalPos.top+16-1500}px`, left: `${originalPos.left+16-1500}px` },
                { top: `${originalPos.top+16}px`, left: `${originalPos.left+16}px`, width: "0px", height: "0px" }
            ],
            { duration: 600, fill: "forwards", easing: "ease-in-out" }
        );
        setTimeout(() => {
            container.style.display = "none";
            textArea.style.display = "none";
            textDisplay.style.display = "none";
        }, 600);
    
        setTimeout(() => {
            sliderMoveAllow = true;
        }, 1200);
    } else {
        textArea.animate(
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            { duration: 600, fill: "forwards", easing: "ease-in-out" }
        );
        setTimeout(() => {
            container.animate(
                [
                    { width: "3000px", height: "3000px", top: `${originalPos.top+16-1500}px`, left: `${originalPos.left+16-1500}px` },
                    { top: `${originalPos.top+16}px`, left: `${originalPos.left+16}px`, width: "0px", height: "0px" }
                ],
                { duration: 600, fill: "forwards", easing: "ease-in-out" }
            );
        }, 600);
        setTimeout(() => {
            container.style.display = "none";
            textArea.style.display = "none";
            textDisplay.style.display = "none";
        }, 1200);
    
        setTimeout(() => {
            sliderMoveAllow = true;
        }, 1800);
    }
}

window.onmousedown = e => {
    mouseDownAt = e.clientX;
    mouseDown = true;
}

window.onmouseup = e => {
    mouseDown = false;
    prevMouseMoved = mouseMoved;
}

window.onmousemove = e => {
    if (!mouseDown || !sliderMoveAllow) { return; }
    const mouseMove = parseFloat(mouseDownAt) - e.clientX;

    mouseMoved = clamp(0, mouseMove / maxDelta * 100 + prevMouseMoved, 100,
        function () {
            mouseDownAt = e.clientX;
            prevMouseMoved = mouseMoved;
        }
    ); // %

    slider.animate(
        { transform: `translate(${-mouseMoved}%, -50%)` },
        { duration: 600, fill: "forwards" }
    );

    for (const i of points) {
        i.animate(
            { objectPosition: `${mouseMoved}% 50%` },
            { duration: 600, fill: "forwards" }
        )
    }
}

addEventListener("wheel", (e) => {
    const mouseMove = e.deltaY;

    mouseMoved = clamp(0, mouseMove / 50 + prevMouseMoved, 100,
        function () {
            mouseDownAt = e.clientX;
            prevMouseMoved = mouseMoved;
        }
    ); // %

    slider.animate(
        { transform: `translate(${-mouseMoved}%, -50%)` },
        { duration: 600, fill: "forwards" }
    );

    for (const i of points) {
        i.animate(
            { objectPosition: `${mouseMoved}% 50%` },
            { duration: 600, fill: "forwards" }
        )
    }

    prevMouseMoved = mouseMoved;
});