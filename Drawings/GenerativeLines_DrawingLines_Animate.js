function drawAnimateLines(){

const canvas3 = document.getElementById("canvas3")
const ctx3 = canvas3.getContext("2d");


class Line3{
    constructor(canvas){
        this.canvas = canvas;
        this.x =  Math.random() * this.canvas.width;
        this.y =  Math.random() * this.canvas.height;
        this.history= [{x: this.x, y: this.y}];
        this.maxLength = 10;
        this.hue = Math.floor(Math.random() * 360);
    }
    draw(context){
        context.strokeStyle = "hsl(" + this.hue + ", 100%, 50%)";
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        
        
        for (let i =0; i < this.history.length; i++){
            context.lineTo(this.history[i].x, this.history[i].y)
        }
        context.stroke();

    }
    update(){
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.history.push({x: this.x, y: this.y});
        if (this.history.length > this.maxLength){
            this.history.shift();
        }
    }
}

const linesArray = []
const numberOfLines = 3;
for (let i = 0; i < numberOfLines; i++){

    linesArray.push(new Line3(canvas3))

}
// console.log(linesArray)
function animate(){
    // clear frame after aninmation
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height)
    //draw line
    linesArray.forEach(line =>{
        line.draw(ctx3)
        line.update(ctx3)
    })
        
    requestAnimationFrame(animate)
    // console.log("animating")
}
console.log("Drawing lines from the same starting point")

animate('animating')
}
drawAnimateLines()