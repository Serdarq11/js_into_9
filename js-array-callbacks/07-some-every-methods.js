const numbers = [-5, 0, 5, 10, 23, -10];


// find if some of these numbers are divisible by 5 -> true
// check if every element is positive   -> false
// check if some elements are negative   -> true

console.log(numbers.some(num => num % 5 === 0));    // true
console.log(numbers.filter(num => num % 5 === 0).length > 0);   // true

console.log(numbers.every(num => num > 0)); // false
console.log(numbers.filter(num => num > 0).length === numbers.length); // false

console.log(numbers.some(num => num < 0));  // true
console.log(numbers.filter(num => num < 0).length > 0);  // true
