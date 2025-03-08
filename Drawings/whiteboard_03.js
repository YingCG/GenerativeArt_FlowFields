(function drawOnCanvas03() {
    const canvas = document.getElementById("drawing3");
    const ctx = canvas.getContext('2d');

canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
canvas.addEventListener('mousemove', (e) => {
    ctx.beginPath();
    ctx.fillStyle = "white"
    ctx.arc(200 , 200, 100, 0, Math.PI * 2);
    ctx.stroke()
})


})();
