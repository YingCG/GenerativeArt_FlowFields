const resetBtn = document.getElementById("generate")
const canvases = document.querySelectorAll("canvas");


resetBtn.addEventListener("click", () => {
    canvases.forEach((canvas) => {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log("Redrawing canvases...");
        drawRandomLines();
        drawContinueLines();
        drawAnimateLines()
        drawRainingLines()
    })
})



