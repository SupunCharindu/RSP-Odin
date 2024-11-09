

//computer choice
function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3);

  if(choice === 0){
    return 'rock'
  }else if (choice === 1){
    return 'paper'
  }else{
    return 'scissors'
  }
}

//console.log(getComputerChoice())

//Get Player choice
function getHumanChoice(){
  let choices = ['rock' , 'paper' ,'scissors' ]
  let choice = prompt('Please choose one, rock paper or scissors').toLowerCase();
  
  while(!choices.includes(choice)){
    choice =  prompt('INVALID iNPUT! Please choose one, rock paper or scissors').toLowerCase()
  };
    return choice;
  
}

//console.log(getHumanChoice());




function handleButtonClick(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

// score
let humanScore = 0;
let computerScore = 0;

//game round
function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();

  const resultDiv = document.getElementById('result');
  const scoreDiv = document.getElementById('score');
  

  if(humanChoice === computerChoice){
    resultDiv.textContent = "It' a Tie";
    console.log("It' a Tie");
    }else if(humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice == 'scissors' && computerChoice === 'paper'){
              humanScore++;
              resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
              console.log("YOU WIN, your choice " + humanChoice + " beats " + computerChoice + " and you win one point");            
    }else{
      computerScore++;
      resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      console.log("YOU LOSE, your choice " + computerChoice + " beats " + humanChoice + " and computer win one point");      
    }
    scoreDiv.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`;

    
    if (humanScore === 5) {
      resultDiv.textContent = "You win the game!";
    } else if (computerScore === 5) {
      resultDiv.textContent = "Computer wins the game!";
    }
     
    if (humanScore === 5 || computerScore === 5) {
      resultDiv.textContent = "Game Over!";
      scoreDiv.textContent = "";
      humanScore = 0;
      computerScore = 0;
    }

  }



//play game for 5 rounds
// function playGame(){
  

//   for (let i = 0; i < 5; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//     console.log('-------------------')
    
//   }
//   console.log('game over')
  
//   if(humanScore > computerScore){
//     console.log(prompt("YOU WON THE GAME!"))
//   }else if(humanScore < computerScore){
//     console.log(prompt("YOU LOSE THE GAME!"))
//   }else{
//     console.log(prompt("IT's a tie!"))
//   }
 
  
// }


document.addEventListener('DOMContentLoaded', () => {


  // Create buttons
  let scissorsButton = document.createElement("button");
  scissorsButton.className = "scissorsbutton";
  scissorsButton.textContent = "Scissors!";

  let rockButton = document.createElement("button");
  rockButton.className = "rockbutton";
  rockButton.textContent = "Rock!";

  let paperButton = document.createElement("button");
  paperButton.className = "paperbutton";
  paperButton.textContent= "Paper!";

  // Add event listeners
  rockButton.addEventListener('click', () => handleButtonClick('rock'));
  paperButton.addEventListener('click', () => handleButtonClick('paper'));
  scissorsButton.addEventListener('click', () => handleButtonClick('scissors'));


  // Append buttons to the container
  const buttonContainer = document.getElementById('button-container');
  buttonContainer.appendChild(rockButton);
  buttonContainer.appendChild(paperButton);
  buttonContainer.appendChild(scissorsButton);

});
// playGame();




// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


