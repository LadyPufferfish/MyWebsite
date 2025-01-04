const starrySky = document.querySelector('.starry-sky');
const numberOfStars = 400;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 66}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starrySky.appendChild(star);
}

for (let i = 0; i < numberOfStars; i++) {
    createStar();
}