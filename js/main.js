const addScript = (fileName) => {
  const script = document.createElement("script");
  script.src = `./js/${fileName}.js`;
  document.body.appendChild(script);
};

window.addEventListener("load", () => {
  addScript("video");
  addScript("gallery");
  addScript("sponsors");
  addScript("galleryFunction");
});
