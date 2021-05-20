//Get Past Start Page
function getGameDisplay() {
  let screen = document.querySelector(".load-screen");
  let disappear = document.querySelector(".disappear");
  disappear.classList.remove("disappear");
  screen.classList.add("disappear");
}
window.addEventListener("click", getGameDisplay);
window.addEventListener("keydown", getGameDisplay);

//User + Opponent Health
let userHealth = 100;
let opponentHealth = 100;

//Generate Random Opponent Pokemon
let oppPokemon = () => {
  let pokeList = ["squirtle", "charmander", "bulbasaur"];
  let index = Math.floor(Math.random() * pokeList.length);
  return pokeList[index];
};

//Decrease health
function decreaseUserHealth() {
  userHealth = userHealth - 20;
  let userHP = document.querySelector("#userHP");
  userHP.innerHTML = userHealth;
}

function decreaseOppHealth() {
  opponentHealth = opponentHealth - 20;
  let oppHP = document.querySelector("#oppHP");
  oppHP.innerHTML = opponentHealth;
}

function userPokemon(value) {
  opp = oppPokemon();
  if (value == opp) {
    let displayText = document.querySelector(".match-text");
    displayText.firstElementChild.innerHTML = `${value} and ${opp} exchanged equal blows --> It's a Tie!`;
  } else if (value == "squirtle" && opp == "charmander") {
    decreaseOppHealth();
    let displayText = document.querySelector(".match-text");
    displayText.firstElementChild.innerHTML = `${value} obliterates ${opp} --> ${opp} takes damage!`;
  } else if (value == "squirtle" && opp == "bulbasaur") {
    decreaseUserHealth();
    let displayText = document.querySelector(".match-text");
    displayText.firstElementChild.innerHTML = `${opp} destroys ${value} --> ${value} takes damage!`;
  } else if (value == "charmander" && opp == "bulbasaur") {
    decreaseOppHealth();
    let displayText = document.querySelector(".match-text");
    displayText.firstElementChild.innerHTML = `${value} obliterates ${opp} --> ${opp} takes damage!`;
  } else if (value == "charmander" && opp == "squirtle") {
    decreaseUserHealth();
    let displayText = document.querySelector(".match-text");
    displayText.firstElementChild.innerHTML = `${opp} destroys ${value} --> ${value} takes damage!`;
  } else if (value == "bulbasaur" && opp == "squirtle") {
    decreaseOppHealth();
    let displayText = document.querySelector(".match-text");
    displayText.firstElementChild.innerHTML = `${value} obliterates ${opp} --> ${opp} takes damage!`;
  } else if (value == "bulbasaur" && opp == "charmander") {
    decreaseUserHealth();
    let displayText = document.querySelector(".match-text");
    displayText.firstElementChild.innerHTML = `${opp} destroys ${value} --> ${value} takes damage!`;
  }
}

userPokemon();
// do {
//     userPokemon()
// } while (userHealth > 0 || opponentHealth > 0)

// while (userHealth > 0 || opponentHealth > 0) {
//   userPokemon();
//   if (userHealth === 0 || opponentHealth === 0) {
//     userHealth === 0 ? alert("You Lose the Game"): alert("You Win The Game");
//     userHealth = 100;
//     opponentHealth = 100;
//     let play = confirm("Wanna play again? ");
//     if (play === true) {
//       userPokemon();
//     } else if (play === false) {
//       alert("Thanks for playing");
//       break;
//     }
//   }
// }
