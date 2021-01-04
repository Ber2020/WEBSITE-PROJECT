const carouselImages = document.getElementsByClassName("carousel-img");
const startButton = document.querySelector("#start-button");
const stopButton = document.getElementById("stop-button");
let currentImage = 0;
let isPlaying = true;

function nextImage() {
    carouselImages[currentImage].classList.remove("visible");
    carouselImages[currentImage].classList.add("hidden");
    currentImage++;
    checkLimit();
    carouselImages[currentImage].classList.add("visible");
    carouselImages[currentImage].classList.remove("hidden");
}

const checkLimit = () => {
    if (currentImage > carouselImages.length - 1) {
        currentImage = 0;
    }
};

let carouselInterval = setInterval(nextImage, 3000);

const startCarousel = () => {
    if (!isPlaying) {
        isPlaying = true;
        carouselInterval = setInterval(nextImage, 3000);
    }
};

function stopCarousel() {
    isPlaying = false;
    clearInterval(carouselInterval);
};

startButton.addEventListener("click", startCarousel);
stopButton.addEventListener("click", stopCarousel);



