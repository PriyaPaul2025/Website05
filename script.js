const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language", "Hyperlink Text Machine Language"],
      correct: 0
    },
    {
      question: "Which HTML tag is used for creating hyperlinks?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      question: "Which of the following is used to style a webpage?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correct: 1
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;

  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear existing options
  
    question.options.forEach((option, index) => {
      const optionElement = document.createElement('li');
      optionElement.textContent = option;
      optionElement.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(optionElement);
    });
  }


  function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
      score++;
    }
    document.getElementById('score-display').textContent = `Score: ${score}`;
  }


  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert('Quiz Finished! Your final score is ' + score);
      currentQuestionIndex = 0;
      score = 0;
      loadQuestion();
    }
  }

  loadQuestion();
