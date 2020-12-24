let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10)
  }
  function compareGuesses(user,computer,secretTarget){
    if(user===secretTarget){
      return true
    }
    if(computer===secretTarget){
      return false
    }
  }
  function updateScore(str){
    if(str==='human'){
      return humanScore++
    }
    if(str==='computer'){
      return computerScore++
    }
  
    }
    function advanceRound(){
      currentRoundNumber++;
    }
  
  
