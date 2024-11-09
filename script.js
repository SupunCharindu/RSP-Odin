

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

// score
let humanScore = 0;
let computerScore = 0;

//game round
function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  

  if(humanChoice === computerChoice){
    console.log("It' a Tie");
    }else if(humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice == 'scissors' && computerChoice === 'paper'){
              humanScore++;
              console.log("YOU WIN, your choice " + humanChoice + " beats " + computerChoice + " and you win one point");            
    }else{
      computerScore++;
      console.log("YOU LOSE, your choice " + computerChoice + " beats " + humanChoice + " and computer win one point");      
    }
    
}



//play game for 5 rounds
function playGame(){
  

  for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log('-------------------')
    
  }
  console.log('game over')
  
  if(humanScore > computerScore){
    console.log(prompt("YOU WON THE GAME!"))
  }else if(humanScore < computerScore){
    console.log(prompt("YOU LOSE THE GAME!"))
  }else{
    console.log(prompt("IT's a tie!"))
  }
 
  
}

playGame();




// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


