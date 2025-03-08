(function drawOnCanvas03() {

const canvas = document.getElementById("drawing2")
const ctx = canvas.getContext('2d')

canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

ctx.beginPath();
ctx.arc(200, 200, 100, Math.PI, Math.PI*2);
ctx.arc(500, 200, 100, 0, Math.PI*2);
ctx.arc(800, 200, 100, Math.PI *2, Math.PI);
ctx.fillStyle = "white";
ctx.fill();

const degToRadios = (deg) => {
    return (deg / 180) * Math.PI;
};
ctx.beginPath();
ctx.arc(1100, 200, 100, degToRadios(270), degToRadios(90))
ctx.strokeStyle = "orange";
ctx.lineWidth = 10;
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
console.log("drawing a circle");

})();