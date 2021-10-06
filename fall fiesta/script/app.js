const header = document.querySelector(".header");
const events = document.querySelector(".events");
const about = document.querySelector(".about");
const scrollToAbout = document.querySelector(".scrollToAbout");
const main = document.querySelector("main");

const leafImageArray = [
  // "./img/leave0.png",
  "./img/leave1.png",
  "./img/leave2.png",
  "./img/leave3.png",
  "./img/leave4.png",
  "./img/leave5.png",
  "./img/leave6.png",
];

let leafDistance = 0;
const count = 30;
for (let i = 0; i < count; ++i) {
  leafDistance += 100 / count;

  const imageNumber = Math.floor(Math.random() * 6);

  header.innerHTML += `
  <img style= 'z-index:10;position: fixed;left: -3%; width:100px; top:
  ${leafDistance - 8}%; transform: rotateZ(${Math.random() * 90}deg) scale(${
    Math.random() + 0.2
  });  filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.4));'
  src=${leafImageArray[imageNumber]} />

  `;

  header.innerHTML += `
  <img style= 'position: fixed;right: -3%; width:100px; top:
  ${leafDistance - 8}%; transform: rotateZ(${
    270 - Math.random() * 90
  }deg) scale(${
    Math.random() + 0.2
  }); filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.4));  '
  src=${leafImageArray[imageNumber]}  />

  `;
}

window.addEventListener("wheel", () => {
  if (
    events.getBoundingClientRect().y < window.innerHeight * 0.4 &&
    treeCanvas.classList.contains("fixed")
  ) {
    treeCanvas.classList.remove("fixed");
    fallCanvas.classList.remove("fixed");
    fallCanvas.classList.add("absolute");
    treeCanvas.classList.add("absolute");
  }
  if (
    events.getBoundingClientRect().y > window.innerHeight * 0.4 &&
    treeCanvas.classList.contains("absolute")
  ) {
    treeCanvas.classList.remove("absolute");
    fallCanvas.classList.remove("absolute");
    fallCanvas.classList.add("fixed");
    treeCanvas.classList.add("fixed");
  }
});
