'use strict';

let number = Math.trunc(Math.random()*20)+1;   
let score = 20;
let highScore=0;

const displayMessage = function(message)
{
    document.querySelector('.message').textContent=message;
}

document.querySelector('.again').addEventListener('click', function again() {
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = 'black';
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});

document.querySelector('.check').addEventListener('click',function check(){
   const guess=  Number(document.querySelector('.guess').value);
   console.log(guess ,typeof guess);

  // When there is no input
   if (!guess) {
    displayMessage('No Number! ⛔');
   }
   // when players wins
    else if (guess === number) {
        displayMessage('Corect Number! ✔');
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent = number;
        if(highScore<score)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
    }
        
    
    }
    if(guess !== number)
    {
        if (score > 1) {
            displayMessage(guess > number ? 'Too High📈!' : 'Too Low📉!');
          score = score - 1;
          document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost The Game!');
          document.querySelector('.score').textContent = 0;
        }
    }
})

