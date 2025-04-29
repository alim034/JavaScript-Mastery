let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
      submit.addEventListener('click', function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value)
      console.log(guess);
      validateGuess(guess)
  });
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert('Please Enter Valid Number')
    } else if(guess < 1){
      alert('Please Enter Number Greater than One')
    } else if(guess > 100){
      alert('Please Enter Number Less than 100')
    } else{
      prevGuess.push(guess);
      if(guess === 11){
        displayGuess(guess);
        displayMessage(`Game Over. Random Number Was ${randomNumber}`)
      } else{
        displayGuess(guess);
        checkGuess(guess);
      }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
      displayMessage(`You guessed it right`)
    } else if(guess < randomNumber){
      displayMessage(`Number is Too Low!!`)
    } else if(guess > randomNumber) {
      displayMessage(`Number id Too High!!`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerText = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function startGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}