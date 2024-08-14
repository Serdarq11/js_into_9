const{generateRandomNumber} = require('../utils/MathHelper.js');

console.log(generateRandomNumber(1, 5));

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

console.log('\n-------------------------------------------')

const{generateRandomNumber} = require('../utils/MathHelper.js');
let random = generateRandomNumber(1, 12);
console.log(`The randomly generated number is = ${random}`);

if(random === 12 || random === 1 || random === 2) {
    console.log('Winter');
} else if(random === 3 || random === 4 || random === 5) {
    console.log('Spring');
} else if(random === 6 || random === 7 || random === 8) {
    console.log('Summer');
} else {
    console.log('Fall');
}

if(random >= 3 && random <= 5) {
    console.log('Spring');
} else if(random >= 6 && random <= 8) {
    console.log('Summer');
} else if(random >= 9 && random <= 11) {
    console.log('Fall');
} else {
    console.log('Winter');
}