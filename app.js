const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

const range = document.querySelector("#jsRange");
const colors = document.querySelectorAll(".jsColor");
const mode = document.querySelector("#jsMode");
const saveButton = document.querySelector("#jsSave");

const INITIAL_COLOR = "#2c2c2c";

ctx.fillStyle = "white";
ctx.fillRect(0,0,700,700);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

var painting = false;
var filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0,0,700,700);
    }
}

function handleCM(event) {
    event.preventDefault();
    alert("Right Click is not Available.");
}

function handleSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "vante_painted.png";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function(color) {
    color.addEventListener("click", handleColorClick);
})

if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveButton) {
    saveButton.addEventListener("click", handleSaveClick);
}