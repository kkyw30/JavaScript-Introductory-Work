// rock paper scissors game

// define function to run the game
const game = () => {
  // initialize wins variables and rounds variable
  var playerWins = 0;
  var computerWins = 0;
  var rounds = 0;

// define rock button
  var rock = document.createElement("button");
  button.innerHTML = "rock";

  // append rock button somewhere on the page
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(rock);

  // define paper button
  var paper = document.createElement("button");
  button.innerHTML = "paper";

  // append paper button somewhere on the page
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(paper);

  // define scissors button
  var scissors = document.createElement("button");
  button.innerHTML = "paper";

  // append scissors button somewhere on the page
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(scissors);

// function that allows us to play the game
const playGame = () => {
  // we'll keep playing as long as the game isn't over
  while (isGameOver === false) {
     // define player's choice button
     var playerChoice = '';
  // check to see if rock button has been clicked
  rock.addEventListener("click", function() {
    alert("player chose rock");
  })
  // define player's choice accordingly
  playerChoice = 'rock';

  // check if paper button has been clicked
  paper.addEventListener("click", function() {
    alert("player chose paper");
  })
  playerChoice = 'paper';

  // check if scissors button has been clicked
  scissors.addEventListener("click", function() {
    alert("player chose scissors");
  })
  playerChoice = 'scissors';

  // use random number generator to determine the computer's choice
  const rgn = Math.floor(Math.random() * 3);
  var computerChoice = '';
  
  // determine the computer's choice based on the number generated
  function determineComputerChoice(rgn) {
    if (rgn === 0) {
       computerChoice = 'rock';
    } else if (rgn === 1) {
       computerChoice = 'paper';
    } else {
      computerChoice = 'scissors';
    }
    return computerChoice;
  }
  // call helper functions to determine who won that particular round and check to see if the game is over
  determineWinner(playerChoice, computerChoice);
  isGameOver(rounds);
}
  }
  
// compare the player's choice and the computer's choice to determine who won that round
function determineWinner(playerChoice, computerChoice) {
  // if player wins, increment playerWins variable as well as rounds variable
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    console.log('Player wins');
    playerWins++;
    rounds++;
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    // if computer wins, increment computerWins variable as well as rounds variable
    console.log('Computer wins');
    computerWins++;
    rounds++;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    console.log('Player wins');
    playerWins++;
    rounds++;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    console.log('Computer wins');
    computerWins++;
    rounds++;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    console.log('Computer wins');
    computerWins++;
    rounds++;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    console.log('Player wins');
    playerWins++;
    rounds++;
  } else if (playerChoice === computerChoice) {
    console.log('Tie');
    // don't change any of the variables if the result is a tie 
  }
   }

// determine if game is over based on best of 21 results--if either player has 11 wins, the game is over
function isGameOver(rounds) {
  var isGameOver = false; // starts off false
  // if computer has 11 wins, game is over
  if (computerWins === 11) {
    isGameOver = true;
    window.alert('You lost to the computer');

    // create a restart button and append somewhere on the page
    var restart = document.createElement("button");
  button.innerHTML = "Restart";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(restart);

  // reload the window if restart button is clicked
  restart.style.display = 'flex';
  restart.addEventListener('click', () => {window.location.reload()});

  // create quit button and append somewhere on the page
  var quit = document.createElement("button");
  button.innerHTML = "Quit";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(quit);

  // close window if player clicks the quit button
  quit.style.display = 'flex';
  quit.addEventListener('click', () => {window.close()});
  } 
  // game over if player has 11 wins
  else if (playerWins === 11) {
    isGameOver = true;
    window.alert('You won');
    
    // create restart button
    var restart = document.createElement("button");
  button.innerHTML = "Restart";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(restart);

  restart.style.display = 'flex';
  restart.addEventListener('click', () => {window.location.reload()});

  // create quit button
  var quit = document.createElement("button");
  button.innerHTML = "Quit";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(quit);

  quit.style.display = 'flex';
  quit.addEventListener('click', () => {window.close()});
  } else {
    // nothing happens if neither players has 11 wins, so we keep playing
    return;
  }
}
}