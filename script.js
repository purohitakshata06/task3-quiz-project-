 // Motivation API
document.getElementById("quote-btn").addEventListener("click", fetchQuote);

function fetchQuote() {
  fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("quote").innerText = `"${data.content}" — ${data.author}`;
    })
    .catch(err => {
      console.error(err);
      document.getElementById("quote").innerText = "Oops! Couldn't fetch a quote right now.";
    });
}

// Quiz Logic
const options = document.querySelectorAll(".option");
const result = document.getElementById("quiz-result");

options.forEach(option => {
  option.addEventListener("click", () => {
    if (option.classList.contains("correct")) {
      result.innerHTML = "✅ Correct! Great job!";
      result.style.color = "green";
    } else {
      result.innerHTML = "❌ Oops! Try again.";
      result.style.color = "crimson";
    }
  });
});
