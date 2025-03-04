
function closeModal() {
    document.getElementById("galleryModal").style.display = "none";
}

function openModal() {
    document.getElementById("galleryModal").style.display = "block";
}

var galleryIndex = 1;
showImg(galleryIndex)

function changeImg(n) {
    showImg(galleryIndex += n);
}

function currentImg(n) {
    showImg(galleryIndex = n);
}

function showImg(n) {
    var index;
    var gallery = document.getElementsByClassName("gallerySlides");
    if (n > gallery.length) {
        galleryIndex = 1;
    }
    if (n < 1) {
        galleryIndex = gallery.length;
    }
    for (index=0; index < gallery.length; index++){
        gallery[index].style.display = "none";
    }
    gallery[galleryIndex-1].style.display = "block";
}
