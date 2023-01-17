function getRandom() {
  let min = Math.ceil(1);
  let max = Math.floor(13);
  let result = Math.floor(Math.random() * 13 + 1);
  if (result === 1) {
    result = 11;
  }
  if (result >= 11 && result <= 13) {
    result = 10;
  }
  return result;
}

let cardsEl = document.querySelector('#cards-el');
let count = 0;
let isAlive = true;
let hasBlackjack = false;

let message = '';
let msgEl = document.querySelector('#msg-el');
let sumEl = document.querySelector('#sum-el');

let sum;
let cards;

let player = {
  name: 'Manuel',
  chips: 0,
  prov: [1, 'as'],
  hello() {
    console.log('Hello world');
  },
};
let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ': ' + player.chips;

console.log('player length: ' + player.prov[1]);

function startGame() {
  isAlive = true;
  let firstCard = getRandom();
  let secondCard = getRandom();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }
  if (sum <= 20) {
    message = "Vuoi pescare un'altra carta?";
  } else if (sum === 21) {
    isAlive = false;
    message = 'Hai fatto BlackJack';
  } else {
    isAlive = false;
    message = 'Hai perso';
  }
  msgEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let newCard = getRandom();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }
  cardsEl.textContent = 'Cards: ';
  sumEl.textContent = 'Sum: ';
}
// ---------------------------------------------------------------------
let appleShelf = document.querySelector('#apple-shelf');
let orangeShelf = document.querySelector('#orange-shelf');

let fruits = [
  '🍊',
  '🍇',
  '🍊',
  '🍇',
  '🍇',
  '🍇',
  '🍊',
  '🍇',
  '🍊',
  '🍊',
  '🍇',
  '🍇',
];

console.log(fruits[2]);
function sortFruits() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === '🍊') {
      orangeShelf.textContent += '🍊';
    }
    if (fruits[i] === '🍇') {
      appleShelf.textContent += fruits[i];
    }
  }
}
sortFruits();

let age = 15;

function discount() {
  let msg = '';
  if (age < 6) {
    msg = 'free';
  } else if (age < 17) {
    msg = 'child discount';
  } else if (age < 26) {
    msg = 'student discount';
  } else if (age < 66) {
    msg = 'full price';
  } else {
    msg = 'senior citizen discount';
  }
  console.log(msg);
}
discount();

let user = {
  fisrtName: 'Manuel',
  age: 29,
  country: 'Italy',
};

function logData() {
  console.log('logData function');
  let message =
    user.fisrtName +
    ' is ' +
    user.age +
    ' years old and lives in ' +
    user.country;
  console.log(message);
}

logData();
