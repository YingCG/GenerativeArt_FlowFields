function drawContinueLines() {
const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')

canvas2.width = screen.availWidth;
canvas2.height = screen.availHeight;

class Line1 {
    constructor(canvas2){
        this.canvas = canvas2;
        this.x = Math.random() * canvas2.width;
        this.y = Math.random() * canvas2.height;
        this.history =[{x: this.x, y: this.y}];
        this.lineWidth = Math.floor(Math.random() * 10 + 1);
        this.hue =  Math.floor(Math.random() * 360);
    }

    draw(context){
        context.strokeStyle = 'hsl(' + this.hue + ', 100%, 50% )';
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);

        // how many line joining together
        for (let i =0; i < 10; i++){
            this.x = Math.random() * canvas2.width;
            this.y = Math.random() * canvas2.height;
            this.history.push({x: this.x, y: this.y});
        }

        for (let i =0; i < this.history.length; i++){
            context.lineTo(this.history[i].x, this.history[i].y);
        }

        context.stroke();
    }
}

// how many of joining lines (in different colour)
const linesArray = [];
const numberOfLines = 5
for (let i = 0; i < numberOfLines; i++){
    linesArray.push(new Line1(canvas2));
}

console.log("Continue Lines Drawing")
linesArray.forEach(line => line.draw(ctx2))
}
