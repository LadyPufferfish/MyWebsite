const starrySky = document.querySelector('.starry-sky');
const container = document.querySelector('.shooting-star-container');
const numberOfStars = 400;
let counter = 0;
const colors = ['linear-gradient(to bottom, #5bcefa, rgba(0, 0, 0, 0))', 'linear-gradient(to bottom, #f5a9b8, rgba(0, 0, 0, 0))', 'linear-gradient(to bottom, white, rgba(0, 0, 0, 0))', 'linear-gradient(to bottom, #f5a9b8, rgba(0, 0, 0, 0))', 'linear-gradient(to bottom, #5bcefa, rgba(0, 0, 0, 0))']
const gamesButton = document.querySelector('.games-button')
const games = document.querySelector('.games')

/* Normal star creation, by ChatGPT */
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 66}vh`; /* Multiplied by 66 to make stars appear only on the top 2/3 of the screen */
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starrySky.appendChild(star);
}



/* Shooting star creation, by ChatGPT */
function createShootingStar() {

    const star = document.createElement('div');
    star.classList.add('shooting-star');
    // Randomize starting position slightly outside the viewport
    const startX = Math.random() * window.innerWidth - window.innerWidth/5; // Random starting x-coordinate
    const startY = Math.random() * -300; // Slightly above the top of the viewport

    // Randomize movement direction to keep it dynamic
    const endX = startX + (Math.random() * 300 - 150); // Random horizontal offset
    const endY = window.innerHeight + 100; // Moves off-screen vertically

    // Position the star initially
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    star.style.background = colors[counter];
    counter = (counter + 1) % (colors.length);

    // Randomize speed (animation duration)
    const randomDuration = Math.random() * 1 + 2; // Between 1.5s and 2.5s

    // Set animation keyframes dynamically
    star.style.animation = `shooting-star 1.5s linear forwards`;
    // Set animation duration dynamically
    star.style.animationDuration = `${randomDuration}s`;

    star.style.animationDelay = '0s';

    // Append the star to the container
    container.appendChild(star);

    // Remove the star after the animation ends
    setTimeout(() => {
        star.remove();
    }, 2000); // Match the animation duration
}

for (let i = 0; i < numberOfStars; i++) {
    createStar();
}
// Create shooting stars periodically
setInterval(createShootingStar, 2000); // Every 2 seconds

//function to allow gif to play on click
document.addEventListener("DOMContentLoaded", function () {
    let img = document.getElementById("gif");

    img.addEventListener("click", function () {
        let gifSrc = img.dataset.gif;
        let staticSrc = img.dataset.static;

        // Create a temporary image to preload the GIF
        let tempImg = new Image();
        tempImg.src = gifSrc;

        tempImg.onload = function () {
            img.src = gifSrc;

            // Reset to static image after a set duration (adjust if needed)
            setTimeout(() => {
                img.src = staticSrc;
            }, 1350); // Adjust time to match GIF duration
        };
    });
});

function gamesAnimation(element) {
    element.classList.toggle("open")
}