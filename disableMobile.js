const html = document.querySelector("html");

function clearScreen() {
    const body = document.querySelector("body");
    const nbody = document.createElement("nbody");
    const text = document.createElement("div");
    text.innerText = "Not For Mobile. Mobile Version being Prepared.";
    text.style.fontSize = "4rem";
    html.removeChild(body);
    nbody.appendChild(text);
    html.appendChild(nbody);
}

function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("[Alert] vante is not for Mobile, but PC. Thank you.");
        clearScreen();
    }
}


function init() {
    checkMobile();
}

init();