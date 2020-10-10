let elementsDiv = document.getElementsByClassName("elements");
let blueDiv = document.getElementById("blueBox");
let purpleDivs = document.getElementsByClassName("purpleBox");
let purple = document.getElementById("purple");
for (let i = 0; i < elementsDiv.length; i++) {
    TweenLite.from(elementsDiv[i], {
        duration: 1 * .4,
        x: -100,
        alpha: 0
    });
}
blueDiv.addEventListener("mouseover", onTrailClick);

function onTrailClick() {
    TweenMax.to(blueDiv, {
        duration: 4,
        x: 200
    });
}
blueDiv.addEventListener("click", clickBack);

function clickBack() {
    TweenMax.to(blueDiv, {
        duration: 4,
        x: -200
    });
    TweenMax.to(purpleDivs, {
        duration: 3,
        x: -750,

    });
}
purple.addEventListener("mouseover", GroupClick);

function GroupClick() {
    TweenMax.to(purpleDivs, {
        duration: 3,
        x: 750,
        rotation: 360

    });
}