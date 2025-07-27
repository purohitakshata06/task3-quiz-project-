 const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Makeup Language", "HyperText Markup Language", "Home Tool Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "Python", "CSS"],
    answer: "CSS"
  },
  {
    question: "What does JS stand for?",
    options: ["Java Super", "Just Style", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => {
      document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
      if (option === q.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
      }
      nextBtn.disabled = false;
    };
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = `You scored ${score} out of ${quizData.length}! 🎉`;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
}

loadQuestion();

// Typing effect for the motivational quote
