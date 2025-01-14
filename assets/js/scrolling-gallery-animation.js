const gallery = document.getElementById('gallery');
let scrollPosition = 0;
const scrollSpeed = 1; 

const galleryContent = gallery.innerHTML;
gallery.innerHTML += galleryContent;  

function animateScroll() {
    scrollPosition += scrollSpeed;
    
    if (scrollPosition >= gallery.scrollWidth / 2) {
        scrollPosition = 0;
    }
    
    gallery.scrollLeft = scrollPosition;
    requestAnimationFrame(animateScroll);
}

animateScroll();
