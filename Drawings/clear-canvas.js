const resetBtn = document.getElementById("regenerate")
const canvases = document.querySelectorAll("canvas");

function startDrawing() {
    drawRandomLines();
    drawContinueLines();
    drawLinesFromOnePoint();
}

startDrawing()

resetBtn.addEventListener("click", () => {
    canvases.forEach((canvas) => {
        const ctx = canvas.getContext("2d");
        // ctx.reset();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("Redrawing canvases...");
        startDrawing()
    })
})



