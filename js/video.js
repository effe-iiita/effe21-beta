const videoBackground = document.querySelector(".video-background");

videoBackground.innerHTML += `<video id="main-video" 
preload="auto" 
autoPlay="true" 
loop="true" 
muted="muted" 
 
style="object-fit: cover">
  <source type="video/mp4" src="video/effe/final.mp4" />
</video>
`;
