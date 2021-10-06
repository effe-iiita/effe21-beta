const header = document.querySelector(".header");
const events = document.querySelector(".events");
const about = document.querySelector(".about");
const scrollToAbout = document.querySelector(".scrollToAbout");
const main = document.querySelector("main");

let leafDistance = 0;
const count = 25;
for (let i = 0; i < count; ++i) {
  leafDistance += 100 / count;

  header.innerHTML += `
  <img style= 'z-index:10;position: fixed;left: -2%; width:80px; top: 
  ${leafDistance - 8}%; transform: rotateZ(${Math.random() * 90}deg) scale(${
    Math.random() + 0.2
  });  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.4));' 
  src="./img/leave.png" />

  `;

  header.innerHTML += `
  <img style= 'position: fixed;right: -2%; width:80px; top: 
  ${leafDistance - 8}%; transform: rotateZ(${
    270 - Math.random() * 90
  }deg) scale(${Math.random() + 0.2});  ' 
  src="./img/leave.png" />

  `;
}

window.addEventListener("wheel", () => {
  if (
    events.getBoundingClientRect().y < window.innerHeight * 0.4 &&
    treeCanvas.classList.contains("fixed")
  ) {
    treeCanvas.classList.remove("fixed");
    // fallCanvas.classList.remove("fixed");
    // fallCanvas.classList.add("absolute");
    treeCanvas.classList.add("absolute");
  }
  if (
    events.getBoundingClientRect().y > window.innerHeight * 0.4 &&
    treeCanvas.classList.contains("absolute")
  ) {
    treeCanvas.classList.remove("absolute");
    // fallCanvas.classList.remove("absolute");
    // fallCanvas.classList.add("fixed");
    treeCanvas.classList.add("fixed");
  }
});
