let computerScore = 0;
let userScore = 0;
let userScoreDom =  document.querySelector('#userScore');
let computerScoreDom = document.querySelector('#computerScore');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let whoWin = document.querySelector('#whoWin');
let btns = document.querySelectorAll('button');
let btn = document.querySelector(`button[data-type='btn']`);


function getComputerChoice() {
  let choices = ['rock','paper','scissors'];
  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (userScore == 5 ) {
    whoWin.textContent = 'you won the match refesh the page to play again';
    return;
   } else if(computerScore == 5) {
    whoWin.textContent = 'the computer won match refesh the page to play again';
    return;
   }
   if((computerSelection == 'rock' && playerSelection == 'scissors')||
      (computerSelection == 'paper' && playerSelection == 'rock') ||
      (computerSelection == 'scissors' && playerSelection == 'paper')) {
      computerScore++;
      computerScoreDom.textContent = computerScore;
      return whoWin.textContent = `you lose, the computer played ${computerSelection} and you played ${playerSelection}`;
   } 

   else if(computerSelection == playerSelection) {
    return whoWin.textContent = 'it is a tie';
   }

  else if((playerSelection == 'rock' && computerSelection == 'scissors')||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection== 'scissors' && computerSelection== 'paper')) {
      userScore++;
      userScoreDom.textContent = userScore;
      return whoWin.textContent = `you win, the computer played ${computerSelection} and you played ${playerSelection}`;
   } 

}

function game() {
  rock.addEventListener('click', () => playRound('rock', getComputerChoice()))
  paper.addEventListener('click', () => playRound('paper', getComputerChoice()))
  scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()))
}
game()
