const numbers = [4, 10, 3, 0, -2, -5, 1];

// evens = 4

const evenCounter = numbers.reduce((count, number) => number % 2 === 0 ? count += 1 : count, 0)

console.log(evenCounter);   // 4

// sum = 11

const sumCounter = numbers.reduce((sum, number) => sum + number, 0);

console.log(sumCounter);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e' ignoring cases -> 3

const hasApple = fruits.reduce((counter, fruit) => fruit.toLowerCase().includes('apple') ? counter += 1 : counter, 0);
console.log(hasApple);

const hasI = fruits.reduce((counter, fruit) => fruit.toLowerCase().includes('i') ? counter += 1 : counter, 0);
console.log(hasI);

const endsWithE = fruits.reduce((counter, fruit) => fruit.toLowerCase().at(-1) === 'e' ? counter += 1 : counter, 0);
console.log(endsWithE);


/*
Requirement:
write a function named as max() which takes an array as an argument and returns the greatest element when invoked

Examples:
max([0, 3, -9, 5, 8])       -> 8
max([-7, 0, -2, 10, -5])    -> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

function max(arr) {
    if (arr.length === 0) throw Error('This array is empty!!!');

    return arr.reduce((max, number) => {
        if (number > max) return number;
        return max;
    })
}

console.log(max([0, 3, -9, 5, 8]));
console.log(max([-7, 0, -2, 10, -5]));
console.log(max([1, 2, 3, -2]));
console.log(max([-5, -2]));



/*
Requirement:
write a function named as min() which takes an array as an argument and returns the smallest element when invoked

Examples:
max([0, 3, -9, 5, 8])       -> -9
max([-7, 0, -2, 10, -5])    -> -7
max([1, 2, 3, -2])          -> -2
max([-5, -2])               -> -5
*/

function min(arr) {
    if (arr.length === 0) throw Error('This array is empty!!!');

    return arr.reduce((min, number) => {
        if (number < min) return number;
        return min;
    })
}

console.log(min([0, 3, -9, 5, 8]));
console.log(min([-7, 0, -2, 10, -5]));
console.log(min([1, 2, 3, -2]));
console.log(min([-5, -2]));