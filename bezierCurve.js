const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const strokeRadius = 3;
const step = 0.003;
let t = 0;
let p1, h1, p2, h2;
let pointsArr = [];
let totalLength = 0;
let error = 3;
let percentageDistance = 0.041;
let distanceBetweenPoints;
let numOfPointsDrawn = 0;
let totalFrames = 200;
let currentLength = 0;

function drawPoint(x, y, color = "#000") {
    let prevFillStyle = ctx.fillStyle;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, strokeRadius, strokeRadius, 1, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = prevFillStyle;
}

class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw = (color = "#000") => {
        drawPoint(this.x, this.y, color);
    };
}

function calcLength(p0, p1, p2, p3) {
    let newpath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );
    newpath.setAttributeNS(
        null,
        "d",
        `M ${p0.x},${p0.y} C ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`
    );
    return newpath.getTotalLength();
}

function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    p1 = new Point2D(400, 200);
    p2 = new Point2D(900, 500);
    h1 = new Point2D(1000, 400);
    h2 = new Point2D(200, 400);
    drawHandles();

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    // ctx.moveTo(p1.x, p1.y);
    // ctx.bezierCurveTo(h1.x, h1.y, h2.x, h2.y, p2.x, p2.y);
    ctx.stroke();
    totalLength = calcLength(p1, h1, h2, p2);
}

function getTfromLength(length) {
    return parseFloat(dataSet[Math.floor(length)]);
}

ctx.beginPath();
function draw() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // else ctx.closePath();
    let curve = calculateBezier(p1, p2, h1, h2);
    // bezierPoint = new Point2D(x, y);
    let length = calcLength(p1, curve[0], curve[1], curve[2]);
    // bezierPoint.draw("#fff");
    // if (t !== 0) ctx.lineTo(x, y);
    if (
        length >= totalLength * percentageDistance * numOfPointsDrawn - error &&
        length <= totalLength * percentageDistance * numOfPointsDrawn + error
    ) {
        console.log(`${numOfPointsDrawn * percentageDistance * 100}%`);
        let point = new Point2D(curve[2].x, curve[2].y);
        pointsArr.push(point);
        point.draw("#f00");
        numOfPointsDrawn++;
    }
    let point = new Point2D(length, t * 100);
    point.draw("#f77");
    document.body.children[1].innerText = currentLength;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.bezierCurveTo(
        curve[0].x,
        curve[0].y,
        curve[1].x,
        curve[1].y,
        curve[2].x,
        curve[2].y
    );
    ctx.stroke();
    ctx.closePath();
    pointsArr.forEach((elem) => drawPoint(elem.x, elem.y, "#f09"));
    if (t == 1) return;
    lerp(length);
    requestAnimationFrame(draw);
    totalFrames++;
}

setup();
draw();

console.log(totalLength);
function lerp() {
    if (currentLength < totalLength) currentLength += totalLength / totalFrames;
    if (t < 1) {
        t = getTfromLength(length);
    } else t = 1;
}

function calculateBezier(p1, p2, h1, h2) {
    let t1 = new Point2D((h1.x - p1.x) * t + p1.x, (h1.y - p1.y) * t + p1.y);
    let t2 = new Point2D((h2.x - h1.x) * t + h1.x, (h2.y - h1.y) * t + h1.y);
    let t3 = new Point2D((p2.x - h2.x) * t + h2.x, (p2.y - h2.y) * t + h2.y);
    let t4 = new Point2D((t2.x - t1.x) * t + t1.x, (t2.y - t1.y) * t + t1.y);
    let t5 = new Point2D((t3.x - t2.x) * t + t2.x, (t3.y - t2.y) * t + t2.y);
    let t6 = new Point2D((t5.x - t4.x) * t + t4.x, (t5.y - t4.y) * t + t4.y);
    // return { x: t6.x, y: t6.y };
    return [t1, t4, t6];
}

function drawHandles() {
    h2.draw("#9f67ff");
    h1.draw("#9f67ff");
    p2.draw("#ff679f");
    p1.draw("#ff679f");
}
