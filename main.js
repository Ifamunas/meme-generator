const generateMemeBtn = document.querySelector(".meme-generator-btn");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.getElementById("meme-image");

generateMemeBtn.addEventListener("click", generateMeme);

function generateMeme() {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      memeTitle.innerText = data.title;
      memeImage.src = data.url;
      memeImage.alt = data.title;
    });
}
generateMeme();