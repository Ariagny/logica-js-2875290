const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const description = document.getElementById('description');
let currentIndex = 0;

function showLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'block';
    updateLightbox();
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function updateLightbox() {
    const item = galleryItems[currentIndex];
    lightboxImg.src = item.querySelector('img').src;
    description.textContent = item.getAttribute('data-description');
}

function showPrev() {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    updateLightbox();
}

function showNext() {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    updateLightbox();
}

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => showLightbox(index));
});

document.querySelector('.close').addEventListener('click', closeLightbox);
document.getElementById('prev').addEventListener('click', showPrev);
document.getElementById('next').addEventListener('click', showNext);

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== document.getElementById('prev') && e.target !== document.getElementById('next')) {
        closeLightbox();
    }
});