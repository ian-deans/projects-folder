
// game setup

  //setup timer
  var gameTimer = $('#game-timer').text()

  // setup question and answers
  var questionData = $('#quetion-data').text()
  var answerChoices = $('#answer-choices').text()

  //set game to active
  var gameActive = true

  var questions = [
    {
      id: 1,
      data: 'What color is the sky',
      answer: 'blue',
      choices: ['red', 'green', 'blue', 'polka dot']
    },
    {}
  ]

  function handlePlayerClick(event) {
    var playerAnswer = event.target.innerHTML

    if (playerAnswer === question.answer) {
      // add to score
      // show next question
    } else {
      // dont add to score
      // show next question
    }

    // get the answer data
    // compare playerAnswer to 
  }


  answerChoices.addEventListener('click', handlePlayerClick(event))

  








// begining, page loads

1. set a timer
2. render a question with answers
3. add event listener for clicks
4. set game to active

// 4. set the score to 0

// game play
1. if game is active: player going to click on answer
  2. get data for that answer
  3. check the answer with the questions data
  4. inform player of right or wrong
  5. modify score

// game ending

1. timer ends, set game to not active
2. inform user of score
3. give option to reset and play again




/*

questions
  multiple choice

timer
  gameActive = true/false

number of questions asked
number of questions correct




html

  question

  answer choices
    clickable choices

  score

/html

// question format
<div id="question">
  <span id="question-data">What is the most common eye color in humans?</span>
</div>

css

.answer-data {
  display: none;
}

questions = [
  {
    id: 1,
    data: 'How much wood would a woodchuck chuck if a woodchuck could 
            chuck wood?',
    answer: 'A lot.'
  },
  {
    id: 2,
    data: 'Question',
    answer: 'answer,
    choices: ['wrong answer', wrong answer',' answer', 'wrong answer']
  },
]


userAnswer = wrongAnswer



if (userAnswer === question.answer) {
  add to score
  show next question
} else {
  wrong
}





// question format
<div class="answer-choice">
  <span class="answer-choice-data">blue</span>
</div>

event bubbling

<ol id="answer-container">
  <li>answer-1</li>
  <li>answer-2</li>
  <li>answer-3</li>
  <li>answer-4</li>
</ol>

<script>
document.getElementById('anwer-container').addEventListener()
*/