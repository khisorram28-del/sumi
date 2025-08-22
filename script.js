// Questions + GIFs list
const data = [
  { q: "The meru pyaar kero k? 🥰", gif: "catmiss3.gif" },
  { q: "kero ne ketok pyaar kero 🙏", gif: "cat4.gif" },
  { q: "baato jnne kiya kero 🤔", gif: "cat5.gif" },
  { q: "suglaa kissi missi bi kero ke 😘", gif: "catkiss2.gif" }
];

let current = 0;

// Load sounds
const yesSound = new Audio("yes.mp3");
const noSound = new Audio("no.mp3");

function updateContent() {
  document.getElementById("question").textContent = data[current].q;
  document.getElementById("gif").src = data[current].gif;

  // Last question → hide "No" button
  if (current === data.length - 1) {
    document.getElementById("noBtn").style.display = "none";
  } else {
    document.getElementById("noBtn").style.display = "inline-block";
  }
}

// When user clicks "No"
function nextQuestion() {
  noSound.play();

  current++;
  if (current < data.length) {
    updateContent();
  } else {
    document.getElementById("question").classList.add("hidden");
    document.getElementById("gif").classList.add("hidden");
    document.querySelector(".buttons").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }
}

// When user clicks "Yes"
function sayYes() {
  yesSound.play();

  document.getElementById("question").classList.add("hidden");
  document.getElementById("gif").classList.add("hidden");
  document.querySelector(".buttons").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}

// Initial load
window.onload = updateContent;



