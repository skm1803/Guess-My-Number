'use strict';

const number = Math.trunc(Math.random()*20)+1;   
let score = 20;

document.querySelector('.number').textContent=number;


document.querySelector('.check').addEventListener('click',function check(){
   const guess=  Number(document.querySelector('.guess').value);
   console.log(guess ,typeof guess);
  
   if (!guess) {
     document.querySelector('.message').textContent = 'No Number! ⛔';
   } else if (guess === number) {
     document.querySelector('.message').textContent = 'Corect Number! ✔';
   } else if (guess > number) {
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

