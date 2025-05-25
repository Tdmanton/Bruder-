const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function createStar() {
  stars.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    radius: Math.random() * 4 + 2,
    speed: Math.random() * 1 + 0.5,
    color: `hsl(${Math.random() * 360}, 80%, 70%)`
  });
}

function drawStar(s) {
  ctx.beginPath();
  ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
  ctx.fillStyle = s.color;
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let s of stars) {
    s.y -= s.speed;
    drawStar(s);
  }
  stars = stars.filter(s => s.y + s.radius > 0);
  requestAnimationFrame(animate);
}

setInterval(createStar, 100);
animate();
