const {generateRandomNumber} = require('../utils/MathHelper.js');

let i = 1, j = 1;

while (i <= 3) {
    console.log('This is while loop block');
    i++;
}


do {
    console.log('This is do-while loop block');
    j++;
} while (j <= 3);



// Phone pin
const setPassword = 1234;
let generatedCode;
let attempt = 0;

const generatedPins = [];

do {
    // enter passcode
    generatedCode = generateRandomNumber(1000,9999);
    if (!generatedPins.includes(generatedCode)) generatedPins.push(generatedCode);

    attempt++;

} while (setPassword !== generatedCode);

console.log(`We found the pin after ${attempt} times!`);
console.log(`We generated ${generatedPins.length} unique pins!`);


const gameNumber = 4;
let guessedNumber;
let counter = 0;
let found = true;

do {
    guessedNumber = generateRandomNumber(1, 10);
    counter++;

    console.log(guessedNumber);

    if (counter === 5) {
        console.log(`You could not find the number after 5 times! GAME OVER LOSER!!!`);
        found = false;
        break;
    }
} while (gameNumber !== guessedNumber);



if (found) {
    let timeOrTimes = counter === 1 ? 'time' : 'times';
    console.log(`The number is found after ${counter} ${timeOrTimes}!`);
}


// Generate an even number bt 1 and 10 
// Calculate how many attempts it takes to generate it

// 1. do-while
let att = 0;
let rNumber;    // undefined

do {
    rNumber = generateRandomNumber(1, 10);
    att++;

console.log(rNumber);

} while (rNumber % 2 === 1);

let tmeOrTimes = att === 1 ? 'time' : 'times';

console.log(`We find an even number after ${att} ${tmeOrTimes} which is ${rNumber}!`);


// 2. while
let att1 = 0;
let rNumber1;   // undefined

while (true) {
    rNumber1 = generateRandomNumber(1, 10);
    att1++;

    console.log(rNumber1);

    if (rNumber1 % 2 === 0) break;
};


console.log(`We find an even number after ${att1} ${tmeOrTimes} which is ${rNumber1}!`);


// 3. for
let att2 = 0;
let rNumber2;   // undefined

for ( ; ; ) {
    rNumber2 = generateRandomNumber(1, 10);
    att2++;

    console.log(rNumber2);

    if (rNumber2 % 2 === 0) break;
}

console.log(`We find an even number after ${att2} ${tmeOrTimes} which is ${rNumber2}!`);


