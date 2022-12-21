const CANVAS = document.querySelector("canvas");
const CTX = CANVAS.getContext("2d");

CANVAS.style.width = `${Window.width * 100}px`;
CANVAS.style.height = `${Window.height * 100}px`;

let radius = [0.6, 0.8, 1.2, 1.4, 1.8, 2.2, 2.8, 3.2, 3.6, 4];
let clrs = ["#e63946", "#a8dadc", "#457b9d", "#1d3557"];
let startAngle = 0;
let endAngle = 6;

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function drawCircles() {
  for (let i = 0; i < 100; i++) {
    CTX.beginPath();
    let x = getRandom(10, CANVAS.width - 10);
    let y = getRandom(10, CANVAS.height - 10);
    CTX.fillStyle = clrs[getRandom(0, 3)];
    CTX.strokeStyle = "transparent";
    CTX.arc(x, y, radius[getRandom(0, 9)], startAngle, endAngle);
    CTX.fill();
    CTX.stroke();
  }
}

drawCircles();
