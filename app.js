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
    correctOption: "A markup language",
  },
  {
    qNo: 2,
    text: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<link>", "<script>", "None of these"],
    correctOption: "<style>",
  },
  {
    qNo: 3,
    text: "Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<src>"],
    correctOption: "<img>",
  },
  {
    qNo: 4,
    text: "What does the <a> tag in HTML do?",
    options: ["Defines a link", "Defines an image", "Defines a paragraph"],
    correctOption: "Defines a link",
  },
  {
    qNo: 5,
    text: "What is the purpose of the <div> tag in HTML?",
    options: [
      "To group block elements",
      "To display a list",
      "To add a title",
      "None of these",
    ],
    correctOption: "To group block elements",
  },
  {
    qNo: 6,
    text: "What is JavaScript?",
    options: [
      "A programming language",
      "A markup language",
      "A stylesheet language",
    ],
    correctOption: "A programming language",
  },
  {
    qNo: 7,
    text: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Apple"],
    correctOption: "Netscape",
  },
  {
    qNo: 8,
    text: "Which method is used to access an HTML element by its id in JavaScript?",
    options: ["getElementById()", "getElementByClass()", "querySelector()"],
    correctOption: "getElementById()",
  },
  {
    qNo: 9,
    text: "What is the correct way to write a JavaScript array?",
    options: ["[1, 2, 3]", "(1, 2, 3)", "1, 2, 3"],
    correctOption: "[1, 2, 3]",
  },
  {
    qNo: 10,
    text: "Which method is used to remove the last element of an array?",
    options: ["pop()", "push()", "shift()"],
    correctOption: "pop()",
  },
  {
    qNo: 11,
    text: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "const", "var"],
    correctOption: "const",
  },
  {
    qNo: 12,
    text: "What is the purpose of the `this` keyword in JavaScript?",
    options: [
      "Refers to the current object",
      "Refers to the current function",
      "Refers to the parent object",
    ],
    correctOption: "Refers to the current object",
  },
  {
    qNo: 13,
    text: "What does the `typeof` operator do in JavaScript?",
    options: [
      "Checks the data type of a variable",
      "Changes the data type of a variable",
      "Compares two values",
    ],
    correctOption: "Checks the data type of a variable",
  },
  {
    qNo: 14,
    text: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "None of these"],
    correctOption: "push()",
  },
  {
    qNo: 15,
    text: 'What will `console.log(1 + "1")` output in JavaScript?',
    options: ["1", "11", "Error"],
    correctOption: "11",
  },
  {
    qNo: 16,
    text: "Which of the following is used to create an object in JavaScript?",
    options: ["{}", "[]", "()"],
    correctOption: "{}",
  },
  {
    qNo: 17,
    text: "What is the output of the following code: `console.log(3 > 2 > 1)`?",
    options: ["True", "False", "Syntax error", "None of these"],
    correctOption: "False",
  },
  {
    qNo: 18,
    text: "What is a closure in JavaScript?",
    options: [
      "A function inside another function",
      "A function that does not return a value",
      "A variable in the global scope",
    ],
    correctOption: "A function inside another function",
  },
  {
    qNo: 19,
    text: "Which of the following is a JavaScript framework?",
    options: ["React", "Angular", "All of the above"],
    correctOption: "All of the above",
  },
  {
    qNo: 20,
    text: "Which of the following is used to create a new promise in JavaScript?",
    options: ["new Promise()", "Promise.new()", "new Async()"],
    correctOption: "new Promise()",
  },
  {
    qNo: 21,
    text: "Which of these is the correct way to write a for loop in JavaScript?",
    options: ["for (i=0; i<10; i++)", "for i=0 to 10", "loop (i<10)"],
    correctOption: "for (i=0; i<10; i++)",
  },
  {
    qNo: 22,
    text: "What is the result of the following expression: `3 + null`?",
    options: ["3", "null", "Error"],
    correctOption: "3",
  },
  {
    qNo: 23,
    text: "Which method is used to select an element by its class in JavaScript?",
    options: [
      "getElementsByClassName()",
      "querySelectorAll()",
      "getElementByClass()",
    ],
    correctOption: "getElementsByClassName()",
  },
  {
    qNo: 24,
    text: 'What is the output of `console.log("Hello" + 5)`?',
    options: ["Hello5", "Hello", "Error"],
    correctOption: "Hello5",
  },
  {
    qNo: 25,
    text: "What is the difference between == and === in JavaScript?",
    options: [
      "== compares values, === compares both value and type",
      "Both are the same",
      "== compares types, === compares values",
    ],
    correctOption: "== compares values, === compares both value and type",
  },
  {
    qNo: 26,
    text: "Which of the following is a valid JavaScript variable name?",
    options: ["_myVariable", "2myVariable", "my-Variable"],
    correctOption: "_myVariable",
  },
  {
    qNo: 27,
    text: "What does `setTimeout()` do in JavaScript?",
    options: [
      "Delays execution of a function",
      "Clears a timeout",
      "Triggers a loop",
    ],
    correctOption: "Delays execution of a function",
  },
  {
    qNo: 28,
    text: "Which operator is used for strict equality comparison in JavaScript?",
    options: ["==", "===", "="],
    correctOption: "===",
  },
  {
    qNo: 29,
    text: "What is an event listener in JavaScript?",
    options: [
      "A method to handle events",
      "A loop",
      "A method to create variables",
    ],
    correctOption: "A method to handle events",
  },
  {
    qNo: 30,
    text: "Which of these is a way to define a function in JavaScript?",
    options: ["function myFunc()", "def myFunc()", "function: myFunc()"],
    correctOption: "function myFunc()",
  },
];


var currentQuestionIndex = 0;
var selectedArray = [];
var countdownInterval;



// Function to execute after 30 minutes
function executeAfter30Minutes() {
  submitQuiz()
  // Add any other logic you want to run after 30 minutes.
}
// Function to update the remaining time every second
function startCountdown() {
  let totalSeconds = 30 * 60;  // Total 30 minutes in seconds

   countdownInterval = setInterval(() => {
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
  
  document.getElementById("qNo").textContent=currentQuestionIndex+1;
  dispQuestion.textContent=questions[putIndex].text
  displayOptions(putIndex)
}



function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
    colorBG()  
  }
}
function nextQuestion() {
  if (currentQuestionIndex < indexes.length - 1) {
    currentQuestionIndex++;  
    displayQuestion(); 
    colorBG()  
  }
}








function submitQuiz() {
  document.getElementsByClassName('modal')[0].style.display='block'
  document.getElementsByClassName('quiz-container')[0].style.display='none'
  document.getElementById('time-display').style.display='none'
  showResult()
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
    optionElement.textContent =  option;
    optionElement.setAttribute("onclick", "addIn_selectedArray(event)");
    optionsContainer.appendChild(optionElement);
  });
}























function closeResultModal() {
  document.getElementsByClassName('modal')[0].style.display='none'
  // by using windows.location  go to form 
}







function addIn_selectedArray(e) {
  let currentOption = e.target;

  let allOptions = document.getElementsByClassName("option");
  for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].style.backgroundColor = ""; 
  }

  var setOption = currentOption.textContent;
  var currentQ = document.getElementById("question-text").textContent;
  var QuestionNo = document.getElementById("qNo").textContent;

  var obj = {
    selectdOpt: setOption,
    setQuestion: currentQ,
    setQ_No: QuestionNo,
  };

  let optionExists = false;
  for (var i = 0; i < selectedArray.length; i++) {
    if (selectedArray[i].setQ_No === QuestionNo) {
      selectedArray.splice(i, 1, obj);
      optionExists = true;
      break;
    }
  }

  if (!optionExists) {
    selectedArray.push(obj);
  }

  currentOption.style.backgroundColor = "green";
}













function colorBG() {
  for (var i = 0; i < selectedArray.length; i++) {
    var QuestionNo = document.getElementById("qNo").textContent;
      
    if (selectedArray[i].setQ_No === QuestionNo) {
      
      var selectedOption = selectedArray[i].selectdOpt; 

      let options = document.getElementsByClassName("option");
      for (let j = 0; j < options.length; j++) {
        if (options[j].textContent === selectedOption) {
          options[j].style.backgroundColor = "green";
        } else {
          options[j].style.backgroundColor = "";
        }
      }
      break;
    }
  }
}










// function openQuestion(ans,que){
//   document.getElementById("showCorrectAns").style.display="block"
//   document.getElementById("question").textContent=que
//   document.getElementById("Cans").textContent=ans
// }









function showResult() {
  var attemtedQuizes=selectedArray.length
  var skipedQuizes=Qdata.length-attemtedQuizes
  document.getElementById("attemtedMsg").innerHTML="You attemted "+attemtedQuizes+" and skiped "+skipedQuizes+" Quizes."
  for (let i = 0; i < Qdata.length; i++) { 
    for (let j = 0; j < selectedArray.length; j++) { 
      
      if (Qdata[i].text === selectedArray[j].setQuestion) { 

        var resultContainer = document.getElementById("resultSmallDiv");

        var showResult = document.createElement("div");  
        showResult.setAttribute("class", "newDiv"); 
        
        showResult.textContent ="Q"+ selectedArray[j].setQ_No; 
        showResult.onclick = function() {
          openQuestion(Qdata[i].correctOption, Qdata[i].text);
        };
                // Check if the selected option is correct
        if (selectedArray[j].selectdOpt === Qdata[i].correctOption) {
          showResult.style.backgroundColor = "green";
        } else {
          showResult.style.backgroundColor = "red"; 
        }

        resultContainer.appendChild(showResult);
      }
    }
  }
}




