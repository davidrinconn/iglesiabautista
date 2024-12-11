// Llamar a la función para cargar la galería cuando la página cargue
window.onload = loadGallery;


let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let numParticles = 100;

function createParticle() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 5 + 2;
    let speedX = Math.random() * 2 - 1;
    let speedY = Math.random() * 1 + 1;
    particles.push({x, y, size, speedX, speedY});
}

function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.y > canvas.height) {
            particle.y = -particle.size;
        }

        if (particle.x > canvas.width || particle.x < 0) {
            particle.x = Math.random() * canvas.width;
        }
    });
}

function animate() {
    createParticle();
    drawSnow();
    requestAnimationFrame(animate);
}

animate();