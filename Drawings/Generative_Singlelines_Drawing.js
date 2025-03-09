function drawRandomLines() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  // canvas.width = screen.availWidth;
  // canvas.height = screen.availHeight;

  // ctx.fillStyle = "blue";
  // ctx.fillRect(100, 100, 50, 50);
  // ctx.lineWidth = 10;
  // ctx.strokeStyle = "yellow";
  // ctx.strokeRect(100, 100, 200, 150);

  // ctx.lineWidth = 20;
  // ctx.lineCap = "round";
  // ctx.strokeStyle = "magenta";

  // ctx.beginPath();
  // ctx.moveTo(300, 300);
  // ctx.lineTo(350, 350);
  // ctx.moveTo(350, 350);
  // ctx.lineTo(450, 250);
  // ctx.stroke();

  // class Line {
  //   constructor() {
  //     this.startX = Math.random() * canvas.width - 10;
  //     this.startY = Math.random() * canvas.height -10;
  //     this.endX = Math.random() * canvas.width -10;
  //     this.endY = Math.random() * canvas.height -10;
  //     this.lineWidth = Math.floor(Math.random() * 20 + 1);
  //   }

  //   draw() {
  //     ctx.strokeStyle = "skyblue";
  //     ctx.lineWidth = this.lineWidth;
  //     ctx.beginPath();
  //     ctx.moveTo(this.startX, this.startY);
  //     ctx.lineTo(this.endX, this.endY);
  //     ctx.stroke();
  //   }
  // }

  // const line1 = new Line();
  // line1.draw();

  class Line {
    constructor(canvas) {
      this.canvas = canvas;
      this.startX = Math.random() * canvas.width - 10;
      this.startY = Math.random() * canvas.height -10 ;
      this.endX = Math.random() * canvas.width -10;
      this.endY = Math.random() * canvas.height -10;
      this.lineWidth = Math.floor(Math.random() * 5 + 1);
      this.hue = Math.floor(Math.random() * 360);
    }

    draw(context) {
      // context.strokeStyle = colour;
      context.strokeStyle = "hsl(" + this.hue + ", 100%, 50%)";
      context.lineWidth = this.lineWidth;
      context.beginPath();
      context.moveTo(this.startX, this.startY);
      context.lineTo(this.endX, this.endY);
      context.stroke();
    }
  }

  // const line1 = new Line(canvas);
  // line1.draw(ctx);


  const linesArray = [];
  const numberOfLines = 5;
  for (let i = 0; i < numberOfLines; i++) {
    linesArray.push(new Line(canvas));
  }

//   console.log("Single Lines Drawing")
  linesArray.forEach((line) => line.draw(ctx));
}

drawRandomLines()