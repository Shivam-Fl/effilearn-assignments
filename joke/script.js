const generateBtn = document.querySelector("#generate-btn");
const jokeBox = document.querySelector("#joke-box");

async function showJoke() {
  jokeBox.textContent = "Loading a joke...";//placeholder

  try {
    let response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single"
    );
    let data = await response.json();

    jokeBox.textContent = data.joke;
  } 
 catch (error) {
    jokeBox.textContent = "Failed to load a joke. Please try again.";
    console.error("Error fetching joke:", error);
  }
}

if (generateBtn && jokeBox) {
  generateBtn.addEventListener("click", showJoke);
  showJoke();
}
