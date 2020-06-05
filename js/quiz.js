/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const firstAnswer = 'LONDON';
const secondAnswer = 'TEA';
const thirdAnswer = 'CURRY';
const fourthAnswer = 'ELIZABETH';
const fifthAnswer = 'NO';

// 2. Store the rank of a player
let playerRank = 0;

// 3. Select the <main> HTML element
const main = document.querySelector('main');
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const firstGuess = prompt('What is the capital of England?');
const secondGuess = prompt('What is the most prefered English beverage?');
const thirdGuess = prompt('What do the English like to eat more than anything else?');
const fourthGuess = prompt('What is the name of the curent queen of England?');
const fifthGuess = prompt('Was Brexit a good idea?');


if ( firstGuess.toUpperCase() === firstAnswer ) {
  playerRank += 1
};

if ( secondGuess.toUpperCase() === secondAnswer ) {
  playerRank += 1
};

if ( thirdGuess.toUpperCase() === thirdAnswer ) {
  playerRank += 1
};

if ( fourthGuess.toUpperCase() === fourthAnswer ) {
  playerRank += 1
};

if ( fifthGuess.toUpperCase() === fifthAnswer ) {
  playerRank += 1
};


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( playerRank === 5 ) {
  playerRank = 'Player Rank: Gold'
} else if ( playerRank === 4 || playerRank === 3 ) {
  playerRank = 'Player Rank: Silver'
} else if ( playerRank === 2 || playerRank === 1 ) {
  playerRank = 'Player Rank: Bronze'
} else {
  playerRank = 'No Crown :(';
}


// 6. Output results to the <main> element
main.innerHTML = `
<h1><strong>Congratulations, you acheived ${playerRank}!</strong></h1>
`;

