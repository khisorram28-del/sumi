// --- Typewriter Effect for Heading ---
const text = "💖 Welcome to My Romantic Website 💖";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("main-heading").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;


// --- Random GIF Show ---
const gifs = ["catkiss2.gif", "catmiss3.gif"];
function loadRandomGif() {
  const randomIndex = Math.floor(Math.random() * gifs.length);
  document.getElementById("main-gif").src = gifs[randomIndex];
}
window.addEventListener("load", loadRandomGif);


// --- Click Event on GIF ---
document.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && e.target.id === "main-gif") {
    alert("You clicked on a cute GIF! 😍");
  }
});
