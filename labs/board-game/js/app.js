let red = document.getElementById("redChecker");
let black = document.getElementById("blackChecker")
console.log(red);
console.log(black);

black.addEventListener("click", onTrailClick);
function onTrailClick(event) {
    event.target.setAttribute("cx", 250);
}

drawFrame();

function drawFrame() {
    let redX = Number(red.getAttribute("cx"));
    redX += -.5;
    red.setAttribute("cx", redX);
    requestAnimationFrame(drawFrame);
}