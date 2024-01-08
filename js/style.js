var slideindex = 0;
showslides();

function showslides() {
    if (n > showslides.length){slideindex = 1}
    if (n < 1) {slideindex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[slideindex-1].style.display ="none";
    }
    slides[slideindex-1].style.display = "block";
    setTimeout(showslides, 3000)
}
function plusslides(n) {
    showslides(slideindex += n);
}
