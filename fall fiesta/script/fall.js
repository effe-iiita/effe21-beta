const fallCanvas = document.querySelector(".fall-canvas");

fallCanvas.width = window.innerWidth * 0.6;
fallCanvas.height = window.innerHeight * 0.9;

const fallCtx = fallCanvas.getContext("2d");
let leafFallArray = [];

class LeafFall {
  constructor() {
    this.x = Math.random() * fallCanvas.width;
    this.y = Math.random() * fallCanvas.height + fallCanvas.height * 0.4;
    this.size = 15;
    this.speedX = (Math.random() - 0.5) * 1;
    this.speedY = Math.random() * 2;
  }
  update = () => {
    this.x += this.speedX;
    this.y += this.speedY;
  };
  draw = () => {
    fallCtx.fillStyle = "rgb(255,123,3)";
    fallCtx.beginPath();
    fallCtx.arc(this.x, this.y, this.size, 0, Math.PI / 2);
    fallCtx.fill();
  };
}

const fallLeaves = () => {
  for (let i = 0; i < leafFallArray.length; ++i) {
    leafFallArray[i].update();
    leafFallArray[i].draw();
    if (leafFallArray[i].size <= 0.3) {
      leafFallArray.splice(i, 1);
      i--;
    }
  }
};
let leafCount = 10;
if (window.innerWidth <= 450) {
  leafCount = 4;
}
for (let i = 0; i < leafCount; ++i) {
  leafFallArray.push(new LeafFall());
}

fallLeaves();

setInterval(() => {
  for (let i = 0; i < 10; ++i) {
    leafFallArray.push(new LeafFall());
  }

  fallLeaves();
}, 4000);

const leafFallAnimate = () => {
  fallCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  fallLeaves();
  requestAnimationFrame(leafFallAnimate);
};
leafFallAnimate();
