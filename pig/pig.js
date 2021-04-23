document.querySelector(".btn-start").addEventListener("click", function (){
    document.querySelector(".starter").style.display = "none"; 
})


var scores, roundScore, activePlayer, gamePlaying, numberWin; 
init(); 


document.querySelector(".btn-roll").addEventListener("click", function(){
    if(gamePlaying) {
        //1. Random Number
        var diceDOM = document.querySelector(".dice");
        var dice2DOM = document.querySelector(".dice2");
        var dice = Math.floor(Math.random() * 6) + 1; 
        var dice2 = Math.floor(Math.random() * 6) + 1; 
        
        //2. Display the result 
        diceDOM.style.display = "block"; 
        dice2DOM.style.display = "block"; 
        diceDOM.src = "dice-" + dice + ".png"; 
        dice2DOM.src = "dice-" + dice2 + ".png"; 
        
        //3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice + dice2; 
            document.querySelector("#current-" + activePlayer).textContent = roundScore; 
        } 
        else {
            //Next player
            nextPlayer(); 
        }
        user(); 
    }
}); 

document.querySelector(".btn-hold").addEventListener("click", function() {
   if(gamePlaying) {
       //Add current score to global score
       scores[activePlayer] += roundScore; 
   
       //Update the UI 
       document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer]; 

    //Set Winning Score
       if(document.getElementById("numberWin").value) {
        numberWin = document.getElementById("numberWin").value;  
        }
        else {
            numberWin = 100; 
        }
       
       //Check if player won the game 
       if (scores[activePlayer] >= numberWin) {
           document.querySelector("#name-" + activePlayer).textContent += " Won!"; 
           document.querySelector("#name-" + inactivePlayer).textContent += " Lost."; 
           document.querySelector(".player-" + inactivePlayer + "-panel").classList.add("loser"); 
           document.querySelector(".dice").style.display = "none"; 
           document.querySelector(".dice2").style.display = "none"; 
           document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner"); 
           document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active"); 
           gamePlaying = false; 
       }
       else {
           //Next Player
          nextPlayer(); 
       }
   }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    inactivePlayer === 1 ? inactivePlayer = 0 : inactivePlayer = 1; 
    roundScore = 0; 
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", user); 
document.querySelector(".btn-new").addEventListener("click", init); 

function init() {
    scores = [0, 0]; 
    activePlayer = 0; 
    inactivePlayer = 1; 
    roundScore = 0; 
    gamePlaying = true;  
    document.querySelector(".dice").src="dice-0.png"; 
    document.querySelector(".dice2").src="dice-0.png"; 
    document.getElementById("score-0").textContent = "0"; 
    document.getElementById("score-1").textContent = "0"; 
    document.getElementById("current-0").textContent = "0"; 
    document.getElementById("current-1").textContent = "0"; 
    document.getElementById("name-0"). textContent = "Player 1"; 
    document.getElementById("name-1"). textContent = "Player 2"; 
    document.querySelector(".player-0-panel").classList.remove("winner"); 
    document.querySelector(".player-1-panel").classList.remove("winner"); 
    document.querySelector(".player-0-panel").classList.remove("active"); 
    document.querySelector(".player-1-panel").classList.remove("active"); 
    document.querySelector(".player-0-panel").classList.add("active"); 
}; 

function user () {
    if(document.getElementById("playerInput0").value) {
        document.getElementById("name-0").textContent = document.getElementById("playerInput0").value;   
        }
    else {
        document.getElementById("name-0").textContent = "Player 1"; 
    }
    
    if(document.getElementById("playerInput1").value) {
        document.getElementById("name-1").textContent = document.getElementById("playerInput1").value;   
    }
    else {
        document.getElementById("name-1").textContent = "Player 2"; 
    }
}; 























