console.log("JavaScript file is loaded.");

const randNum1 = Math.floor(Math.random() * 6) + 1;
const randNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randNum1, randNum2);

const leftDiceImage = document.querySelector('.img1');
if (leftDiceImage) {
    leftDiceImage.setAttribute('src', `./images/dice${randNum1}.png`);
} else {
    console.error('No element with class img1 found.');
}

const rightDiceImage = document.querySelector('.img2');
if (rightDiceImage) {
    rightDiceImage.setAttribute('src', `./images/dice${randNum2}.png`);
} else {
    console.error('No element with class img2 found.');
}

const header = document.querySelector('h1');

if (randNum1 > randNum2) {
    header.innerHTML = "Player 1 Wins!🤯";
  } else if (randNum1 < randNum2) {
    header.innerHTML = "Player 2 Wins!🤯";
  } else {
    header.innerHTML = "Draw! 😔";
  }