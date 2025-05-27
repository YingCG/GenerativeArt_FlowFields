// (function drawOnCanvas01() {
    const canvas = document.getElementById("drawing1");
    const ctx = canvas.getContext('2d');
    
    canvas.width = screen.availWidth;
    canvas.height = screen.availHeight;
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";

    ctx.fillText("Click here",50, 100);

    function getCursorPosition(event) {
        const rect = canvas.getBoundingClientRect()
        const x = (event.clientX - rect.left) * (100/ 35) 
        const y = (event.clientY - rect.top) *( 100 /15)
        return [x, y];
    }

canvas.addEventListener('click', (e) => {
    console.log(e)
    ctx.fillStyle = "#B771E5"
    const [x, y] = getCursorPosition(e);
    ctx.fillRect(x, y, 50, 50);
console.log(x, y)
})



// })();
