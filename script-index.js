const starrySky = document.querySelector('.starry-sky');
const container = document.querySelector('.shooting-star-container');
const numberOfStars = 400;

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
    const startX = Math.random() * window.innerWidth; // Random starting x-coordinate
    const startY = Math.random() * -300; // Slightly above the top of the viewport

    // Randomize movement direction to keep it dynamic
    const endX = startX + (Math.random() * 300 - 150); // Random horizontal offset
    const endY = window.innerHeight + 100; // Moves off-screen vertically

    // Position the star initially
    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

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
setInterval(createShootingStar, Math.random()*4000); // Every 2 seconds