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
            <li>Soon</li>
        </ul>
        <br>
        <p>Other filler projects are on my <a href="https://github.com/Megarion" target="_blank">GitHub</a></p>
        <p>Most of my projects are licensed under the <a href="https://github.com/Megarion/megarion.github.io/blob/main/LICENSE" target="_blank">GPL-3.0 license</a></p>
        <button onclick="exit()">Exit</button>`),
        new SECTION("Links", `<ul>
            <li><a href="https://github.com/Megarion" target="_blank">GitHub</a></li>
            <li><a href="https://www.youtube.com/channel/UCBrlr_nVSQ_4kZtsY58Q8wA" target="_blank">YouTube</a></li>
            <li><a href="" onclick="return false;">Discord</a>: megarionn (Megarion#0892)</li>
            <li><a href="https://ch.tetr.io/u/megarion" target="_blank">tetr.io</a></li>
        </ul><button onclick="exit()">Exit</button>`),
        new SECTION("...", `<p>Under construction</p><button onclick="exit()">Exit</button>`),
        new SECTION("...", `<p>Under construction</p><button onclick="exit()">Exit</button>`),
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

let allowScroll = true

// Filetypes (0/img, 1/aud, 2/vid)
const filetypes = [
    ["jpeg", "gif", "png", "apng", "svg", "ico", "bmp", "jpg", "avif", "webp", "tiff"],
    ["mp3", "wav", "ogg"],
    ["mp4", "webm", "ogv"], // ogg
]

for (const i in points) {
    const img = points[i];
    img.onclick = function () {
        if (!sliderMoveAllow) { return; }
        currentImg = i;
        sliderMoveAllow = false;
        allowScroll = false;

        originalPos.top = slider.getBoundingClientRect().top;
        originalPos.left = img.getBoundingClientRect().left;
        container.style.display = "flex";
        container.style.position = "fixed";
        textDisplayTitle.innerHTML = content[i].title;
        textDisplayContent.innerHTML = content[i].content;

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

        container.animate(
            [
                { top: `${originalPos.top+16}px`, left: `${originalPos.left+16}px`, width: "0px", height: "0px" },
                { width: "300vmax", height: "300vmax", top: `calc(${originalPos.top+16}px - 150vmax)`, left: `calc(${originalPos.left+16}px - 150vmax)` }
            ],
            { duration: 600, fill: "forwards", easing: "ease-in-out" }
        );
    }
}

function exit() {
    if (!pointFixedClickAllow) { return; }
    pointFixedClickAllow = false;

    if (urlParams.get('gallery')==1){
        container.animate(
            [
                { width: "300vmax", height: "300vmax", top: `calc(${originalPos.top+16}px - 150vmax)`, left: `calc(${originalPos.left+16}px - 150vmax)` },
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
                    { width: "300vmax", height: "300vmax", top: `calc(${originalPos.top+16}px - 150vmax)`, left: `calc(${originalPos.left+16}px - 150vmax)` },
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
            allowScroll = true;
        }, 1800);
    }
}

function down(e) {
    mouseDownAt = e.clientX;
    mouseDown = true;
}

window.onmousedown = e => down(e);
ontouchstart = (e) => down(e);

function up(e) {
    mouseDown = false;
    prevMouseMoved = mouseMoved;
}

window.onmouseup = e => up(e);
ontouchend = (e) => up(e);

function move(e) {
    if (!mouseDown || !sliderMoveAllow || !allowScroll) { return; }
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

window.onmousemove = e => move(e);
touchmove = e => move(e);

addEventListener("wheel", (e) => {
    if (!sliderMoveAllow || !allowScroll) { return; }
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