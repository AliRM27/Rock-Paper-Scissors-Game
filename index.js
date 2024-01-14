let playerCounter = 0;
let computerCounter = 0;
let symbols = ["rock", "paper", "scissors"];
let playerChoice;

function press(number){
    let computerChoice = symbols[Math.floor(Math.random() * symbols.length)];
    switch(number){
        case 1:
            playerChoice = "rock";
            break;
        case 2:
            playerChoice = "paper";
            break;
        case 3:
            playerChoice = "scissors";
            break;
    }
    document.getElementById("player").textContent = playerChoice;
    document.getElementById("computer").textContent = computerChoice;

    if(computerChoice === playerChoice){
        document.getElementById("info").textContent = "It's Tie!";
    }else if(computerChoice === "rock" && playerChoice === "scissors"){
        document.getElementById("info").textContent = "Computer won!";
        computerCounter++;
        document.getElementById("counterComputer").textContent = computerCounter;
    }else if(computerChoice === "paper" && playerChoice === "rock"){
        document.getElementById("info").textContent = "Computer won!";
        computerCounter++;
        document.getElementById("counterComputer").textContent = computerCounter;
    }
    else if(computerChoice === "scissors" && playerChoice === "paper"){
        document.getElementById("info").textContent = "Computer won!";
        computerCounter++;
        document.getElementById("counterComputer").textContent = computerCounter;
    }
    else if(computerChoice === "scissors" && playerChoice === "rock"){
        document.getElementById("info").textContent = "Player won!";
        playerCounter++;
        document.getElementById("counterPlayer").textContent = playerCounter;
    }
    else if(computerChoice === "paper" && playerChoice === "scissors"){
        document.getElementById("info").textContent = "Player won!";
        playerCounter++;
        document.getElementById("counterPlayer").textContent = playerCounter;
    }
    else if(computerChoice === "rock" && playerChoice === "paper"){
        document.getElementById("info").textContent = "Player won!";
        playerCounter++;
        document.getElementById("counterPlayer").textContent = playerCounter;
    }

    if(playerCounter === 3){
        document.getElementById("info").textContent = "Player won the game!";
        document.getElementById("b").setAttribute("disabled", "disabled");
        document.getElementById("a").setAttribute("disabled", "disabled");
        document.getElementById("c").setAttribute("disabled", "disabled");
        createButton();
    }else if(computerCounter === 3){
        document.getElementById("info").textContent = "Computer won the game!";
        document.getElementById("b").setAttribute("disabled", "disabled");
        document.getElementById("a").setAttribute("disabled", "disabled");
        document.getElementById("c").setAttribute("disabled", "disabled");
        createButton();
    }
    
}

function createButton(){
    const myButton = document.createElement("button");
    myButton.setAttribute("onclick", "playAgain()");
    myButton.textContent = "Play Again"
    document.body.appendChild(myButton);
}

function playAgain(){
    window.location.reload();
}