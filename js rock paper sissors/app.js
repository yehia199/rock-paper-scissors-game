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

console.log(btns)
console.log(btn)
function getComputerChoice() {
  return Math.floor(Math.random() * 3)
}


function playRound(playerSelection, computerSelection) {
  if (userScore == 5 ) {
    whoWin.textContent = 'you won the match refesh the page to play again';
    return;
   } else if(computerScore == 5) {
    whoWin.textContent = 'the computer won match refesh the page to play again';
    return;
   }
   if(computerSelection == 1 && playerSelection == 'scissors') {
      computerScore++;
      computerScoreDom.textContent = computerScore;
      return whoWin.textContent = 'you lose';
   } 
   else if(computerSelection == 2 && playerSelection == 'rock') {
     computerScore++
     computerScoreDom.textContent = computerScore;
     return whoWin.textContent = 'you lose';
   }
   else if(computerSelection == 3 && playerSelection == 'paper') {
     computerScore++
     computerScoreDom.textContent = computerScore;
     return whoWin.textContent = 'you lose';
   }
   else if(computerSelection == 1 && playerSelection == 'rock') {
    return whoWin.textContent = 'it is a tie';
   }
   else if(computerSelection == 2 && playerSelection == 'paper') {
    return whoWin.textContent = 'it is a tie';
   }
   else if(computerSelection == 3 && playerSelection == 'scissors') {
    return whoWin.textContent = 'it is a tie';
   }
   else {
     userScore++
     userScoreDom.textContent = userScore
     return whoWin.textContent = 'you win';
   }

}

function game() {

  rock.addEventListener('click', () => playRound('rock', getComputerChoice()))
  paper.addEventListener('click', () => playRound('paper', getComputerChoice()))
  scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()))

}
game()