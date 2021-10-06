const sponsorContainer = document.querySelector(".sponsors-container");

const sponsorContent = {
  name: ["GeeksforGeeks", "9stacks", "T.I.M.E."],

  imagePath: [],
  title: ["Management Partner", "Coding Partner", "Gaming Partner"],
};
for (let i = 0; i < sponsorContent.name.length; ++i) {
  sponsorContainer.innerHTML += `
<div class="sponsor-card">
  <img src="${sponsorContent.imagePath[i]}" />
  <br />
  <span class="sponsor-name"> ${sponsorContent.name[i]}</span>
  <span class="sponsor-title">${sponsorContent.title[i]}</span>
</div>
`;
}
