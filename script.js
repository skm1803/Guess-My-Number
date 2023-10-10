'use strict';

let number = Math.trunc(Math.random()*20)+1;   
let score = 20;
let highScore=0;



document.querySelector('.check').addEventListener('click',function check(){
   const guess=  Number(document.querySelector('.guess').value);
   console.log(guess ,typeof guess);

  // When there is no input
   if (!guess) {
     document.querySelector('.message').textContent = 'No Number! ⛔';
   }
   // when players wins
    else if (guess === number) {
        document.querySelector('.message').textContent = 'Corect Number! ✔';
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent = number;
        if(highScore<score)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
    }
        
    
    }
   // when guess  number is high
   else if (guess > number) {
    if(score>1)
    {
        document.querySelector('.message').textContent = 'Too High📈!';
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }
     else{
        document.querySelector('.message').textContent = 'You Lost The Game!';
        document.querySelector('.score').textContent = 0;
     }
   } else if (guess < number) {
     if (score > 1) {
       document.querySelector('.message').textContent = 'Too Low📉!';
       score = score - 1;
       document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = 'You Lost The Game!';
       document.querySelector('.score').textContent = 0;
     }

    }
})

