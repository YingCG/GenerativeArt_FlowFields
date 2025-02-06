(function(){
    const canvas4 = document.getElementById("canvas4")
    const ctx4 = canvas4.getContext("2d");
    // canvas4.width = 200;
    // canvas4.height = 150;
    
    class Line4{
        constructor(canvas){
            this.canvas = canvas;
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.history = [{x: this.x, y:this.y}];
            this.lineWidth = Math.floor(Math.random() * 15 + 1);
            this.hue = Math.floor(Math.random() * 360);
            this.maxLength = 10;
            this.speedX = 10;
            this.speedY = 5;
        }
        draw(context){
            context.strokeStyle = 'hsl(' + this.hue + ', 100%, 50%)';
            context.lineWidth = this.lineWidth;
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            context.beginPath();
            context.moveTo(this.history[0].x, this.history[0].y);
            for (let i = 0; i < 30; i++){
              
                this.history.push({x: this.x, y: this.y});
            }
            for (let i = 0; i < this.history.length; i++){
                context.lineTo(this.history[i].x, this.history[i].y);
            }
            context.stroke();
        }
    
        update(){
            this.x += this.speedX;
            this.y += this.speedY;
            this.history.push({x: this.x, y: this.y});
            if (this.history.length > this.maxLength){
                this.history.shift();
            }
        }
    }
    
    const linesArray = []
    const numberOfLines = 31;
    for (let i = 0; i < numberOfLines; i++){
        const x = Math.random() * canvas4.height;
        const y = Math.random() * canvas4.width;
        linesArray.push(new Line4(x, y))
    }
    // console.log(linesArray)
    function animate(){
        // clear frame after aninmation
        ctx4.clearRect(0, 0, canvas4.width, canvas4.height)
        linesArray.forEach(line => {
            //draw line
            line.draw(ctx4)
            // update line
            line.update()
            }
        )
        requestAnimationFrame(animate)
        // console.log("animating")
    }
    console.log("Lines Drawing animation")

    animate()
})()
