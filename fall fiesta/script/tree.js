const treeCanvas = document.querySelector(".tree-canvas");

const treeCtx = treeCanvas.getContext("2d");

let curvingFactor = 10;
let lengthFactor = 0.78;
let branchWidth = 40;
let treeLengthFactor = 0.21;
let treeCanvasWidth = 0.55;

const updateValues = () => {
  if (window.innerWidth > 1250) {
    curvingFactor = 15;
    lengthFactor = 0.78;
    branchWidth = 40;
  }
  if (window.innerWidth < 1250) {
    curvingFactor = 12;
    lengthFactor = 0.75;
    branchWidth = 30;
    treeLengthFactor = 0.2;
  }
  if (window.innerWidth < 1120) {
    curvingFactor = 12;
    lengthFactor = 0.74;
    branchWidth = 25;
    treeLengthFactor = 0.18;
  }
  if (window.innerWidth < 930) {
    curvingFactor = 10;
    lengthFactor = 0.72;
    branchWidth = 20;
    treeLengthFactor = 0.2;
  }
  if (window.innerWidth < 880) {
    curvingFactor = 10;
    lengthFactor = 0.68;
    branchWidth = 20;
    treeLengthFactor = 0.2;

    treeCanvasWidth = 0.9;
  }
  if (window.innerWidth < 625) {
    curvingFactor = 15;
    lengthFactor = 0.65;
    branchWidth = 25;
    treeLengthFactor = 0.2;
  }
  if (window.innerWidth < 550) {
    curvingFactor = 12;
    lengthFactor = 0.6;
    branchWidth = 20;
    treeLengthFactor = 0.18;
  }
};
window.addEventListener("resize", () => {
  treeCanvas.width = window.innerWidth * treeCanvasWidth;
  treeCanvas.height = window.innerHeight;
  updateValues();
  drawTree(
    treeCanvas.width / 2,
    treeCanvas.height,
    treeCanvas.height * treeLengthFactor,
    0,
    branchWidth,
    "brown",
    "rgb(255,123,3)"
  );
});

updateValues();
treeCanvas.width = window.innerWidth * treeCanvasWidth;
treeCanvas.height = window.innerHeight;

function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
  treeCtx.save();
  treeCtx.beginPath();
  treeCtx.strokeStyle = color1;
  treeCtx.fillStyle = color2;
  treeCtx.shadowBlur = 5;
  treeCtx.shadowColor = "rgba(0, 0, 0, 0.5)";
  treeCtx.lineWidth = branchWidth;
  treeCtx.translate(startX, startY);
  treeCtx.rotate(angle * (Math.PI / 180));
  treeCtx.moveTo(0, 0);

  if (angle > 0) {
    treeCtx.bezierCurveTo(10, -len / 2, 10, -len / 2, 0, -len);
  } else {
    treeCtx.bezierCurveTo(10, -len / 2, -10, -len / 2, 0, -len);
  }
  treeCtx.stroke();

  if (len < 10) {
    treeCtx.beginPath();
    treeCtx.arc(0, -len, 15, 0, Math.PI / 2);
    treeCtx.fill();
    treeCtx.restore();
    return;
  }
  curve = Math.random() * 5 + curvingFactor;

  drawTree(0, -len, len * lengthFactor, angle + curve, branchWidth * 0.6);
  drawTree(0, -len, len * lengthFactor, angle - curve, branchWidth * 0.6);
  treeCtx.restore();
}

drawTree(
  treeCanvas.width / 2,
  treeCanvas.height,
  treeCanvas.height * treeLengthFactor,
  0,
  branchWidth,
  "brown",
  "rgb(255,123,3)"
);
