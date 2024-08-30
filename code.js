function getcomputerchoice(){
    const  choices =["rock" ,"paper" ,"scissors"]
    const randomindex= Math.floor(Math.random()*choices.length)
    return choices[randomindex];

}
//console.log(getcomputerchoice())

function gethumanchoice(){
    let sign=prompt("enter your value")
    return sign.toLowerCase()// makes this code insensitve
}
//console.log(gethumanchoice())

let humanscore=0;
let computerscore=0;

function playround( humanchoice, computerchoice){

    if(humanchoice=== computerchoice){
        console.log("it is a tie")
    }
    
    if (
        (humanchoice === "rock" && computerchoice === "scissors") ||
        (humanchoice === "paper" && computerchoice === "rock") ||
        (humanchoice === "scissors" && computerchoice === "paper")
    ) {
        console.log("You win this round!");
        humanscore += 1;
    } else {
        console.log("Computer wins this round!");
        computerscore += 1;
    }

}

function playgame(){
    for(let i=0; i<5; i++){
   const humanchoice=gethumanchoice()
   const computerchoice=getcomputerchoice()
   console.log(`you choose: ${humanchoice}`);
   console.log(`computer choose: ${computerchoice}`);
   playround(humanchoice, computerchoice);
    }

   if(humanscore>computerscore){
    console.log("you have won")
   }
   else if(computerscore>humanscore){
    console.log("comp have won")
   }
   else{
    console.log("it ia a tie")
   }
}
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");   


rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));   

playgame();