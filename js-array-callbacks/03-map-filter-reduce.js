/*
Assume you are given an array

const arr = [el1, el2, el3, el4, el5, el6];


count, sum, average, min, max, shortest, longest, most expensive simply result being one simple result -> reduce method
returning some of the elements (subarray of the original) -> filter method
returning a same size new array with modified original array elements -> map
*/

const numbers = [-2, -5, 3, 0, 5, 8, 10]; 

const positiveNumbers = numbers.filter(number => number > 0);

console.log(positiveNumbers);   // [ 3, 5, 8, 10 ]


// ['even', 'odd', 'odd', 'even', 'odd', 'even', 'even']

const evenOrOdd = numbers.map(number => number % 2 === 0 ? 'even' : 'odd');

console.log(evenOrOdd);

console.log(numbers.reduce((sum, curr) => sum + curr), 0);