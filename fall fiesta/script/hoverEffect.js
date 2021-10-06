const mainCanvas = document.querySelector(".main-canvas");
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

const mainCtx = mainCanvas.getContext("2d");
const leafHoverArray = [];

window.addEventListener("resize", function () {
  mainCanvas.width = window.innerWidth;
  mainCanvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};
window.addEventListener("mousemove", (e) => {
  const leafCount = Math.round(Math.random() - 0.2);
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < leafCount; ++i) {
    leafHoverArray.push(new Leaf(mouse.x, mouse.y));
  }
});

class Leaf {
  constructor(startX, startY) {
    this.x = startX + Math.random() * startX * 0.2;
    this.y = startY + Math.random() * startY * 0.2;
    this.size = Math.random() * 10 + 10;
    this.speedX = (Math.random() - 0.5) * 4;
    this.speedY = Math.random() * 3;
  }
  update = () => {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.2;
  };
  draw = () => {
    mainCtx.fillStyle = "rgb(255,123,3)";
    mainCtx.beginPath();
    mainCtx.arc(this.x, this.y, this.size, 0, Math.PI / 2);
    mainCtx.fill();
  };
}

const hoverLeaves = () => {
  for (let i = 0; i < leafHoverArray.length; ++i) {
    leafHoverArray[i].update();
    leafHoverArray[i].draw();
    if (leafHoverArray[i].size <= 0.3) {
      leafHoverArray.splice(i, 1);
      i--;
    }
  }
};
const animate = () => {
  mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  hoverLeaves();
  requestAnimationFrame(animate);
};
animate();
