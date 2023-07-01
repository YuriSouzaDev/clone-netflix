// OPEN QUESTIONS
const questions = document.querySelectorAll(".questions button");

function openAnswer(e) {
  const question = e.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("ativa");
  const ativa = answer.classList.contains("ativa");
  question.setAttribute("aria-expanded", ativa);
}

function openQuestions(question) {
  question.addEventListener("click", openAnswer);
}

questions.forEach(openQuestions);
