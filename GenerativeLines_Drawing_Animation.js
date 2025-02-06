function drawLinesFromOnePoint() {

const canvas3 = document.getElementById("canvas3")
const ctx3 = canvas3.getContext("2d");
canvas3.width = screen.availWidth /2;
canvas3.height = screen.availHeight /2;

class Line3{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    draw(context){
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.strokeStyle = "pink"
    }
}

const linesArray = []
const numberOfLines = 50;
for (let i = 0; i < numberOfLines; i++){
    const x = Math.random() * canvas3.height;
    const y = Math.random() * canvas3.width;
    linesArray.push(new Line3(x, y))
}
// console.log(linesArray)
function animate(){
    // clear frame after aninmation
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height)
    linesArray.forEach(line => 
        //draw line
        line.draw(ctx3)
        // update line
        )
    requestAnimationFrame(animate)
    // console.log("animating")
}
console.log("Drawing lines from the same starting point")

animate('animating')
}