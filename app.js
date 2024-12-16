var Qdata = [
  {
    qNo: 1,
    text: "What is HTML?",
    options: [
      "A markup language",
      "A programming language",
      "A database language",
      "None of these",
    ],
    correctOption: "a",
  },
  {
    qNo: 2,
    text: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<link>", "<script>","None of these",],
    correctOption: "a",
  },
  {
    qNo: 3,
    text: "Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<src>"],
    correctOption: "a",
  },
  {
    qNo: 4,
    text: "What does the <a> tag in HTML do?",
    options: ["Defines a link", "Defines an image", "Defines a paragraph"],
    correctOption: "a",
  },
  {
    qNo: 5,
    text: "What is the purpose of the <div> tag in HTML?",
    options: ["To group block elements", "To display a list", "To add a title","None of these",],
    correctOption: "a",
  },

  // JavaScript Questions
  {
    qNo: 6,
    text: "What is JavaScript?",
    options: [
      "A programming language",
      "A markup language",
      "A stylesheet language",
    ],
    correctOption: "a",
  },
  {
    qNo: 7,
    text: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Apple"],
    correctOption: "a",
  },
  {
    qNo: 8,
    text: "Which method is used to access an HTML element by its id in JavaScript?",
    options: ["getElementById()", "getElementByClass()", "querySelector()"],
    correctOption: "a",
  },
  {
    qNo: 9,
    text: "What is the correct way to write a JavaScript array?",
    options: ["[1, 2, 3]", "(1, 2, 3)", "1, 2, 3"],
    correctOption: "a",
  },
  {
    qNo: 10,
    text: "Which method is used to remove the last element of an array?",
    options: ["pop()", "push()", "shift()"],
    correctOption: "a",
  },
  {
    qNo: 11,
    text: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "const", "var"],
    correctOption: "b",
  },
  {
    qNo: 12,
    text: "What is the purpose of the `this` keyword in JavaScript?",
    options: [
      "Refers to the current object",
      "Refers to the current function",
      "Refers to the parent object",
    ],
    correctOption: "a",
  },
  {
    qNo: 13,
    text: "What does the `typeof` operator do in JavaScript?",
    options: [
      "Checks the data type of a variable",
      "Changes the data type of a variable",
      "Compares two values",
    ],
    correctOption: "a",
  },
  {
    qNo: 14,
    text: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()","None of these",],
    correctOption: "a",
  },
  {
    qNo: 15,
    text: 'What will `console.log(1 + "1")` output in JavaScript?',
    options: ["1", "11", "Error"],
    correctOption: "b",
  },
  {
    qNo: 16,
    text: "Which of the following is used to create an object in JavaScript?",
    options: ["{}", "[]", "()"],
    correctOption: "a",
  },
  {
    qNo: 17,
    text: "What is the output of the following code: `console.log(3 > 2 > 1)`?",
    options: ["True", "False", "Syntax error","None of these",],
    correctOption: "b",
  },
  {
    qNo: 18,
    text: "What is a closure in JavaScript?",
    options: [
      "A function inside another function",
      "A function that does not return a value",
      "A variable in the global scope",
    ],
    correctOption: "a",
  },
  {
    qNo: 19,
    text: "Which of the following is a JavaScript framework?",
    options: ["React", "Angular", "All of the above"],
    correctOption: "c",
  },
  {
    qNo: 20,
    text: "Which of the following is used to create a new promise in JavaScript?",
    options: ["new Promise()", "Promise.new()", "new Async()"],
    correctOption: "a",
  },
  {
    qNo: 21,
    text: "Which of these is the correct way to write a for loop in JavaScript?",
    options: ["for (i=0; i<10; i++)", "for i=0 to 10", "loop (i<10)"],
    correctOption: "a",
  },
  {
    qNo: 22,
    text: "What is the result of the following expression: `3 + null`?",
    options: ["3", "null", "Error"],
    correctOption: "a",
  },
  {
    qNo: 23,
    text: "Which method is used to select an element by its class in JavaScript?",
    options: [
      "getElementsByClassName()",
      "querySelectorAll()",
      "getElementByClass()",
    ],
    correctOption: "a",
  },
  {
    qNo: 24,
    text: 'What is the output of `console.log("Hello" + 5)`?',
    options: ["Hello5", "Hello", "Error"],
    correctOption: "a",
  },
  {
    qNo: 25,
    text: "What is the difference between == and === in JavaScript?",
    options: [
      "== compares values, === compares both value and type",
      "Both are the same",
      "== compares types, === compares values",
    ],
    correctOption: "a",
  },
  {
    qNo: 26,
    text: "Which of the following is a valid JavaScript variable name?",
    options: ["_myVariable", "2myVariable", "my-Variable"],
    correctOption: "a",
  },
  {
    qNo: 27,
    text: "What does `setTimeout()` do in JavaScript?",
    options: [
      "Delays execution of a function",
      "Clears a timeout",
      "Triggers a loop",
    ],
    correctOption: "a",
  },
  {
    qNo: 28,
    text: "Which operator is used for strict equality comparison in JavaScript?",
    options: ["==", "===", "="],
    correctOption: "b",
  },
  {
    qNo: 29,
    text: "What is an event listener in JavaScript?",
    options: [
      "A method to handle events",
      "A loop",
      "A method to create variables",
    ],
    correctOption: "a",
  },
  {
    qNo: 30,
    text: "Which of these is a way to define a function in JavaScript?",
    options: ["function myFunc()", "def myFunc()", "function: myFunc()"],
    correctOption: "a",
  },
];

var currentQuestionIndex = 0;


// this function generates  random indexes for questions
const generateRandom = () => Math.floor(Math.random() * Qdata.length)
function generateRandomIdx(){
  var newIndexes = [];
  for (let i = 0; i < Qdata.length; i++) {
    var random = generateRandom();
    
    if (newIndexes.indexOf(random) === -1) {
      newIndexes.push(random); 
    } else {
      i--; 
    }
  }

  return  newIndexes
}



var indexes=generateRandomIdx()  // get the indexes from the function
function displayQuestion() {
  var dispQuestion = document.getElementById("question-text")
  var questions= Qdata
  

  putIndex=indexes[currentQuestionIndex]
 
  if (currentQuestionIndex === indexes.length - 1) {
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("next-btn").setAttribute("disabled", "true");
  } else {
    document.getElementById("next-btn").removeAttribute("disabled"); 
  }
  

  if (currentQuestionIndex === 0) {
    document.getElementById("prev-btn").setAttribute("disabled", "true");
  } else {
    document.getElementById("prev-btn").removeAttribute("disabled");
  }

  dispQuestion.textContent=questions[putIndex].text
  displayOptions(putIndex)
}



function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;  
    displayQuestion();
  }
}
function nextQuestion() {
  if (currentQuestionIndex < indexes.length - 1) {
    currentQuestionIndex++;  
    displayQuestion(); 
  }
}

function submitQuiz() {
  document.getElementsByClassName('modal')[0].style.display='block'
  document.getElementsByClassName('quiz-container')[0].style.display='none'
  document.getElementById('time-display').style.display='none'

  clearInterval(countdownInterval);

}

function restartQuiz() {}









function startQuiz() {
  document.getElementById("stQuiz").className="hidden"
  document.getElementsByClassName("quiz-container")[0].style.display="block"
  startCountdown()
  displayQuestion()
  

}










function displayOptions(index) {
  var optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";  // Clear previous options

  var options = Qdata[index].options;
  var  count=0;
  options.forEach((option) => {
    count+=1
    var optionElement = document.createElement("div");  
    optionElement.className = "option"; 
    optionElement.textContent = count  +") "+ option;
    optionsContainer.appendChild(optionElement);
  });
}
















// Function to execute after 30 minutes
function executeAfter30Minutes() {
  submitQuiz()
  // Add any other logic you want to run after 30 minutes.
}

// Function to update the remaining time every second
function startCountdown() {
  let totalSeconds = 30 * 60;  // Total 30 minutes in seconds

  const countdownInterval = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Display the time remaining (in minutes and seconds format)
    document.getElementById("time-display").textContent = 
      `Time Remaining: ${minutes} min ${seconds} sec`;

    // Decrease the total seconds by 1
    totalSeconds--;

    // If 30 minutes (or 0 seconds) are reached, stop the interval and execute the function
    if (totalSeconds < 0) {
      clearInterval(countdownInterval);  // Stop the countdown
      executeAfter30Minutes();  // Execute the function
    }
  }, 1000);  // Update every second (1000ms)
}





function closeResultModal() {
  document.getElementsByClassName('modal')[0].style.display='none'
  // by using windows.location  go to form 
}