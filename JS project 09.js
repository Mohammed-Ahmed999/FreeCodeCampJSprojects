const questions = [
  {
    category: "PCo",
    question: "fav color ?",
    choices: ['Red', 'Black', 'Both'],
    answer: 'Red'
  },
  {
    category: "PCa",
    question: "what's my favourite car ?",
    choices: ['Honda NSX', 'BMW M5', 'Chevy Camaro'],
    answer: 'Honda NSX'
  },
  {
    category: "PB",
    question: "what's my favourite football team ?",
    choices: ['MUFC', 'LFC', 'MCFC'],
    answer: 'MUFC'
  },
  {
    category: "PF",
    question: "Fav fruit ?",
    choices: ['Apple', 'Grapes', 'Mango'],
    answer: 'Mango'
  },
  {
    category: "PH",
    question: "fav hobby ?",
    choices: ['Gaming', 'Coding', 'Both'],
    answer: 'Both'
  }
];

function getRandomQuestion(question) {
let randomNum = Math.floor(Math.random() * questions.length);

return questions[randomNum]; 
}

function getRandomComputerChoice(choices) {
  let anotherRandomNum = Math.floor(Math.random() * choices.length);

  return choices[anotherRandomNum]
}

function getResults(questionObject, computerChoice) {
  if(computerChoice === questionObject.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`
  }
}

let callFun1 = getRandomQuestion();
let callFun2 = getRandomComputerChoice(callFun1.choices);
let callFun3 = getResults(callFun1, callFun2.choices);

console.log(callFun1);
console.log(callFun2);
console.log(callFun3);
