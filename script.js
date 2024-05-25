const images = [
    'images/bac1.png',
    'images/bac2.png',
    'images/bac3.png',
    'images/bac4.png',
    'images/bac5.png'
];

let currentImageIndex = 0;
const heroSection = document.getElementById('hero-1785');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeBackgroundImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeBackgroundImage();
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

changeBackgroundImage();

function filterCards(type) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}