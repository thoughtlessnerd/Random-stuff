const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const span = document.querySelector("span#pi");

const n = 10;
const divisions = 10;
let toothpickCount = 1000000000;
let count = 0;
let intersectCount = 0;
const toothpickLength = canvas.width / divisions / 10;

class Toothpick {
  constructor(x, y, length, angle) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = angle;
  }
  draw() {
    if (this.intersect()) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "green";
    } else {
      ctx.strokeStyle = "#999";
      ctx.lineWidth = 0.4;
    }
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x + this.length * Math.cos(this.angle),
      this.y + this.length * Math.sin(this.angle)
    );
    ctx.stroke();
  }
  intersect() {
    // console.log(
    //   this.x + this.length * Math.cos(this.angle),
    //   this.y + this.length * Math.sin(this.angle)
    // );
    for (let i = 0; i < divisions - 1; i++) {
      let x = (width / divisions) * (i + 1);
      if (this.x < x && this.x + this.length * Math.cos(this.angle) > x) {
        return true;
      } else if (
        this.x > x &&
        this.x + this.length * Math.cos(this.angle) < x
      ) {
        return true;
      }
    }
    return false;
  }
}

function init() {
  makeDivisions(divisions);
  draw();
}

function draw() {
  for (let i = 0; i < 1000000; i++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    let angle = Math.random() * Math.PI;
    let length = toothpickLength;
    let toothpick = new Toothpick(x, y, length, angle);
    if (i < 100) toothpick.draw();
    if (toothpick.intersect()) {
      intersectCount++;
    }
    count++;
  }
  span.innerHTML = (
    (2 * toothpickLength) /
    ((intersectCount / count) * (width / (divisions - 1)))
  ).toFixed(n);
  if (toothpickCount - count > 0) requestAnimationFrame(draw);
  else return 0;
}

function makeDivisions(divisions, strokeColor = "white") {
  let original = ctx.strokeStyle;
  ctx.strokeStyle = strokeColor;
  for (let i = 1; i < divisions; i++) {
    const x = width / divisions;
    ctx.beginPath();
    ctx.moveTo(x * i, 0);
    ctx.lineTo(x * i, height);
    ctx.stroke();
  }
  ctx.strokeStyle = original;
}

init();
