// (function drawOnCanvas01() {
    const canvas = document.getElementById("drawing1");
    const ctx = canvas.getContext('2d');
    
    canvas.width = screen.availWidth;
    canvas.height = screen.availHeight;
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";

    ctx.fillText("Click here",50,100);
canvas.addEventListener('click', (e) => {
    console.log(e)
    ctx.fillStyle = "#B771E5"
    ctx.fillRect(canvas.width/2 + e.x*2,canvas.height/2 + e.y *2, 50, 50);
console.log(e.x, e.y)
console.log(e.layerX, e.layerY)
console.log(e.screenX, e.screenY)
})



// })();
