var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var galleryImages = document.querySelectorAll(".img-gallery img");

var currentIndex = 0;

function openfullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    currentIndex = Array.from(galleryImages).findIndex(img => img.src === pic);
}

function closefullImg() {
    fullImgBox.style.display = "none";
}

function prev() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    fullImg.src = galleryImages[currentIndex].src;
}

function next() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    fullImg.src = galleryImages[currentIndex].src;
}
