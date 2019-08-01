//Global variables
let questions = [{

    prompt: "Which of the following crooners has/had a twin?",
    answers: ["Bing Crosby", "Elton John", "Elvis Presley", "Justin Timberlake"],
    correctAnswerIndex: 2,
    tidbit: "35 minutes before Elvis Presley was born, his mother gave birth to his stillborn identical twin. Throughout his life, Presley believed his brother was a spiritual guide, referring to him as his “original bodyguard.”"
 }, {
    prompt: "One of these is a talented magician; care to pull a name out of a hat?",
    answers: ["Neil Patrick Harris", "Neil Armstrong", "Mickey Rooney", "Mickey Mouse"],
    correctAnswerIndex: 0,
    tidbit: "He was even the former President of the Board of Directors at the Academy of Magical Arts; and you thought his magic talent was being a child prodigy..."
 }, {
    prompt: "Time to make the Donuts... Who worked at Dunkin Donuts before hitting it big?",
    answers: ["Carol King", "Madonna", "Jodie Foster", "Sheila E"],
    correctAnswerIndex: 1,
    tidbit: "In fact, she got fired after squirting jelly on customer; can you say, 'Border Line?'"
 }, {
    prompt: "Nice Aim: One of these is/was a trained sniper; wanna take a shot at which?",
    answers: ["Serena Williams", "Dr. Ruth Westheimer", "Natalie Portman", "Bette Davis"],
    correctAnswerIndex: 1,
    tidbit: "Talk about hitting all the right spots!"
 }, {
    prompt: "Who is missing the tip of his right-hand finger?",
    answers: ["Bruce Willis", "Tom Cruise", "Robert Redford", "Matthew Perry"],
    correctAnswerIndex: 3,
    tidbit: "He may have been in 'The Whole Nine Yards', but he only has nine whole fingers! <Rim Shot!>"
 }];
 let userAnswers = [];
 let correctAnswers = [questions[0].correctAnswerIndex, questions[1].correctAnswerIndex, questions[2].correctAnswerIndex, questions[3].correctAnswerIndex, questions[4].correctAnswerIndex]
 let results; //This may turn into a bug if we do not clear result value when the user goes back
 let currentIndex = 0;
 let NUM_ANSWERS = 4
 // this function compares the userAnswers to the correctAnswers and returns results
 
 //this hides the start button
 // Hide START button
 $('#start-button').click(function() {
     $(this).hide();
     console.log('BUTTON IS HIDDEN');
     // Unhide "NEXT" button, but "checkButton" function will allow it to be clickable
     $('#transition-buttons').css('visibility', 'visible');
 
     $('#title-text').css('visibility', 'hidden');
     // Load first question
     $('#question-container').css('visibility', 'visible');
     updateQuestion();
 });
 
 //this is gonna be our next-buttons
 $('#next-button').click(function() {
 //update userAnswers
 if (radio0.checked == true) {
   userAnswers.push(document.getElementById('radio0').value);
   document.getElementById("radio0").checked = false
 }
 else if (radio1.checked == true) {
   userAnswers.push(document.getElementById('radio1').value);
   document.getElementById("radio1").checked = false
 }
 else if (radio2.checked == true) {
   userAnswers.push(document.getElementById('radio2').value);
   document.getElementById("radio2").checked = false
 
 }
 else if (radio3.checked == true) {
   userAnswers.push(document.getElementById('radio3').value);
   document.getElementById("radio3").checked = false
 
 }
 else {
   return
 }
 
 //itterate our current index
 currentIndex++
 if(currentIndex < questions.length){
 updateQuestion();
 }
 else {
    endQuiz();
 }
 //uncheck da box
 
 });
 
 
 // Function to update question
 function updateQuestion(){
     console.log(currentIndex, i);
     //this will update the question and Answer Sheet
     $('#question').html(questions[currentIndex].prompt);
 
     //we want to update anwers
     for (var i = 0; i < NUM_ANSWERS; i++) {
        $('#answer' + i).html(questions[currentIndex].answers[i])
     }
 }
 //$('#next-button')
 //function checkAnswer
 
 function endQuiz() {
   tallyResults();
   fillAnswers();
   console.log("success");
   currentIndex = 0
   // Unhide "NEXT" button, but "checkButton" function will allow it to be clickable
   $('#transition-buttons').css('visibility', 'hidden');
   // Load first question
   $('#question-container').css('visibility', 'hidden');
 
   $('#title-text').css('visibility', 'visible');
 
   $('#front-page').css('visibility', 'visible');
   $('#title-text').html('You got ' + results + ' out of 5 questions right! 🌝'); 
 }
 
 function tallyResults() {
   // set the results to zero everytime we call the function
   console.log("sanity")
   parseInt(userAnswers, 10)
   results = 0
   //compares
   for (var i = 0; i < userAnswers.length; i++) {
     if(userAnswers[i] == correctAnswers[i]) {
       //iterate results for every correct answer
       results++;
       console.log(results)
     } 
   }
 }

 function fillAnswers() {
     // Display Answer Sheet
    $('#answer-table').css('visibility', 'visible');
    //set answers
    for (i = 0; i <= NUM_ANSWERS; i++) {
        console.log(questions);
        $('#correct-answer' + i).html(questions[i].answers[correctAnswers[i]]);
        $('#user-answer' + i).html(questions[i].answers[userAnswers[i]]);
        $('#tidbit' + i).html(questions[i].tidbit);
        if(userAnswers[i] == correctAnswers[i]) {
            $('#user-answer' + i).css('color', 'lime');
        } else {
            $('#user-answer' + i).css('color', 'red');
        }
    }
}
=======
   prompt: "Which of the following crooners has/had a twin?",
   answers: ["Bing Crosby", "Elton John", "Elvis Presley", "Justin Timberlake"],
   correctAnswerIndex: 2,
   tidbit: "35 minutes before Elvis Presley was born, his mother gave birth to his stillborn identical twin. Throughout his life, Presley believed his brother was a spiritual guide, referring to him as his “original bodyguard.”"
}, {
   prompt: "One of these is a talented magician; care to pull a name out of a hat?",
   answers: ["Neil Patrick Harris", "Neil Armstrong", "Mickey Rooney", "Mickey Mouse"],
   correctAnswerIndex: 0,
   tidbit: "He was even the former President of the Board of Directors at the Academy of Magical Arts; and you thought his magic talent was being a child prodigy..."
}, {
   prompt: "Time to make the Donuts... Who worked at Dunkin Donuts before hitting it big?",
   answers: ["Carol King", "Madonna", "Jodie Foster", "Sheila E"],
   correctAnswerIndex: 1,
   tidbit: "In fact, she got fired after squirting jelly on customer; can you say, 'Border Line?'"
}, {
   prompt: "Nice Aim: One of these is/was a trained sniper; wanna take a shot at which?",
   answers: ["Serena Williams", "Dr. Ruth Westheimer", "Natalie Portman", "Bette Davis"],
   correctAnswerIndex: 1,
   tidbit: "Talk about hitting all the right spots!"
}, {
   prompt: "Who is missing the tip of his right-hand finger",
   answers: ["Bruce Willis", "Tom Cruise", "Robert Redford", "Matthew Perry"],
   correctAnswerIndex: 3,
   tidbit: "He may have been in 'The Whole Nine Yards', but he only has nine whole fingers! <Rim Shot!>"
}];
let userAnswers = [];
let correctAnswers = [questions[0].correctAnswerIndex, questions[1].correctAnswerIndex, questions[2].correctAnswerIndex, questions[3].correctAnswerIndex, questions[4].correctAnswerIndex]
let results; //This may turn into a bug if we do not clear result value when the user goes back
let currentIndex = 0;
let NUM_ANSWERS = 4
// this function compares the userAnswers to the correctAnswers and returns results

//this hides the start button
// Hide START button
$('#start-button').click(function() {
    $(this).hide();
    console.log('BUTTON IS HIDDEN');
    // Unhide "NEXT" button, but "checkButton" function will allow it to be clickable
    $('#transition-buttons').css('visibility', 'visible');

    $('#title-text').css('visibility', 'hidden');
    // Load first question
    $('#question-container').css('visibility', 'visible');
    updateQuestion();
});

//this is gonna be our next-buttons
$('#next-button').click(function() {
//update userAnswers
if (radio0.checked == true) {
  userAnswers.push(document.getElementById('radio0').value);
  document.getElementById("radio0").checked = false
}
else if (radio1.checked == true) {
  userAnswers.push(document.getElementById('radio1').value);
  document.getElementById("radio1").checked = false
}
else if (radio2.checked == true) {
  userAnswers.push(document.getElementById('radio2').value);
  document.getElementById("radio2").checked = false

}
else if (radio3.checked == true) {
  userAnswers.push(document.getElementById('radio3').value);
  document.getElementById("radio3").checked = false

}
else {
  return
}
//itterate our current index
currentIndex++
if(currentIndex < questions.length){
updateQuestion();
}
else {
  endQuiz();
}
//uncheck da box

});

// Function to update question
function updateQuestion(){
    //this will update the question
    $('#question').html(questions[currentIndex].prompt);

    //we want to update anwers
    for (var i = 0; i < NUM_ANSWERS; i++) {
      $('#answer' + i).html(questions[currentIndex].answers[i])
    }
}
//$('#next-button')
//function checkAnswer

function endQuiz() {
  tallyResults();
  currentIndex = 0
  // Unhide "NEXT" button, but "checkButton" function will allow it to be clickable
  $('#transition-buttons').css('visibility', 'hidden');
  // Load first question
  $('#question-container').css('visibility', 'hidden');

  $('#title-text').css('visibility', 'visible');

  $('#front-page').css('visibility', 'visible');
  $('#title-text').html('You got ' + results + ' questions right out of 5! 🌝');

}

function tallyResults() {
  // set the results to zero everytime we call the function
  console.log("sanity")
  parseInt(userAnswers, 10)
  results = 0
  //compares
  for (var i = 0; i < userAnswers.length; i++) {
    if(userAnswers[i] == correctAnswers[i]) {
      //iterate results for every correct answer
      results++;
      console.log(results)
    }
  }
}
