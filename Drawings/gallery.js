const shapes = document.querySelectorAll(".shape-gallery")


function expandToPage(e){
    this.classList.toggle("shape-pages")
    console.log(this, "trying to change to class - shape-pages ")
    e.style.display = "block"
}

shapes.forEach((shape) => {
    shape.addEventListener('click', expandToPage);
  });