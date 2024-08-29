const names = ['John', 'Jane', 'Alex', 'Max'];

// print each name in the array

const printName = function (x) {
    console.log(x);
}

names.forEach( name => console.log(name) );

// output first letter of each name

names.forEach(name => console.log(name[0]));

// print each name uppercased

names.forEach(name => console.log(name.toUpperCase()));

// output each name that starts with J -> John and Jane

names.forEach((name) => {
    if (name.toLowerCase().startsWith('j')) console.log(name); 
});

// count how many names has 4 letters -> 3
// this task is better to solve with reduce method and we'll learn. 

let countFourLetters = 0;

names.forEach((name) => {
    if (name.length === 4) countFourLetters++;
});

console.log(countFourLetters);


const numbers = [5, 10, 3, 0, -2];

// print each number
numbers.forEach(x => console.log(x));


// print true for even numbers and false for odd numbers -> false, true, false, true, true
numbers.forEach(x => console.log(x % 2 === 0));


// Create a new array that multiplies and stores each of the numbers element by 3 -> [ 15, 30, 9, 0, -6 ]
// We can solve this with map() method and we'll learn it

const arr = [];

numbers.forEach(x => arr.push(x * 3));

console.log(arr);


// Create a new array that stores even numbers -> [ 10, 0, -2 ]
// We can solve this with filter() method and we'll learn it 

const evens = [];

numbers.forEach((x) => {
    if (x % 2 === 0) evens.push(x);
});

console.log(evens);