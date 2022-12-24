const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.screen.availWidth;
canvas.height = window.screen.availHeight;
let pointRadius = 2;

// ctx.fillRect(0, 0, canvas.width, canvas.height)
class Vector2
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.draw = () => {
            ctx.fillRect(this.x, this.y, pointRadius, pointRadius);

        }
    }
}

let pointArr = [];
let randomPoint;
let prevPoint; 
let startingPoints;
let count = 4;

function setup()
{
    point1 = new Vector2(canvas.width/2, 50);
    point2 = new Vector2(400, 900);
    point3 = new Vector2(1400, 900);
    startingPoints = [point1, point2, point3];

    pointArr.push(...startingPoints);

    prevPoint = new Vector2(570, 300);
    pointArr.push(prevPoint);
    randomPoint = chooseRandom(startingPoints);
    
    pointArr.forEach(elem => elem.draw());
}

function draw()
{
    let point = new Vector2(prevPoint.x + (randomPoint.x - prevPoint.x)/2, prevPoint.y + (randomPoint.y - prevPoint.y)/2)
    point.draw();
    prevPoint = point;
    randomPoint = chooseRandom(startingPoints);
    requestAnimationFrame(draw);
    count++;
}

function chooseRandom(arr)
{
    let random = Math.random();
    let index = Math.floor(random*arr.length);
    return arr[index];
}

setup();
draw();