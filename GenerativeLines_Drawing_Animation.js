const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d");
canvas.height = 700;
canvas.width = 900;

class Line{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw(context){
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(this.x, this.y);
        context.stroke();
    }
}

const linesArray = []
const numberOfLines = 5;
for (let i = 0; i < numberOfLines; i++){
    const x = Math.random() * canvas.height;
    const y = Math.random() * canvas.width;
    linesArray.push(new Line(x, y))
}
console.log(linesArray)
function animate(){
    // clear frame after aninmation
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //draw line
    linesArray.forEach(line => line.draw(ctx))
    // update line
    requestAnimationFrame(animate)
    // console.log("animating")
}

animate('animating')