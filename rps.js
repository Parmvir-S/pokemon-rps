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
  userHealth -= 20;
  let userHP = document.querySelector("#userHP");
  userHP.innerHTML = userHealth;
  if (userHealth < 0) {
      userHealth = 100;
      let userHP = document.querySelector("#userHP");
      userHP.innerHTML = userHealth;
      opponentHealth = 100;
      let oppHP = document.querySelector("#oppHP");
      oppHP.innerHTML = opponentHealth;
      alert("You Lose")
  }
}

function decreaseOppHealth() {
  opponentHealth -= 20;
  let oppHP = document.querySelector("#oppHP");
  oppHP.innerHTML = opponentHealth;
  if (opponentHealth < 0) {
    userHealth = 100;
    let userHP = document.querySelector("#userHP");
    userHP.innerHTML = userHealth;
    opponentHealth = 100;
    let oppHP = document.querySelector("#oppHP");
    oppHP.innerHTML = opponentHealth;
    alert("You Win")
}
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

