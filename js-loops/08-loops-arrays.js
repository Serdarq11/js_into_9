const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

// Count how many positive numbers you have in the array -> 4

console.log('\n-------Count Positives-----------\n');
let countP = 0;

for (const num of numbers) {
    if (num > 0) {
        countP++;
    }
}

console.log('Positives =', countP);

countP = 0;

for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] > 0) countP++;
}

console.log('Positives =', countP);

// Count how many negative or zero numbers you have in the array -> 6
console.log('\n-------Count Negatives and neutrals-----------\n');
countNZ = 0;

for (const number of numbers) {
    if (number <= 0) countNZ++
}

console.log('Negatives and neutrals =', countNZ);

// Count how many even numbers you have in the array -> 7
console.log('\n-------Count Evens-----------\n');
let countE = 0;

for (const num of numbers) {
    if (num % 2 === 0) countE++;
}

console.log('Evens =', countE);

// Count how many even but non-negative numbers you have in the array -> 5
console.log('\n-------Count Even but Non-negatives-----------\n');

let countEandNn = 0;

for (const i of numbers) {
    if ((i % 2 === 0) && (i >= 0)) countEandNn += 1;
}

console.log('Evens but Non-negatives =', countEandNn);
