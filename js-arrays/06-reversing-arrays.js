const fruits = [ 'Apple', 'Orange', 'Grapes', 'Banana' ]; 

const reversedFruits = fruits.reverse();

console.log(reversedFruits);    // [ 'Banana', 'Grapes', 'Orange', 'Apple' ]
console.log(fruits);    // [ 'Banana', 'Grapes', 'Orange', 'Apple' ]

// It changes the original array 


/* INTERVIEW QUESTION 
How to have your array reversed keeping the original order
*/

const numbers = [ 1, 2, 3, 4, 5 ];

const numbersCopy = [...numbers]; // completely a new array with the same elements of the original array

numbersCopy.reverse();

console.log(numbers);   // [ 1, 2, 3, 4, 5 ]
console.log(numbersCopy);   // [ 5, 4, 3, 2, 1 ]