'use strict';

document.querySelector('.check').addEventListener('click',function check(){
   const guess=  Number(document.querySelector('.guess').value);
   console.log(guess ,typeof guess);
  
   if(!guess){
    document.querySelector('.message').textContent='No Number!';
   }
})

