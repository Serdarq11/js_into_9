const animals = ['Cat', 'Dog', 'Cow', 'Monkey', 'Bird'];

console.log(animals.slice(1, 3)); // ['Dog', 'Cow']
console.log(animals.slice(2)); // ['Cow', 'Monkey', 'Bird']

console.log(animals.slice(-3)); // ['Cow', 'Monkey', 'Bird']

console.log(animals.slice(-5, -2)); // ['Cat', 'Dog', 'Cow']
console.log(animals.slice(-2, -4)); // [] -> empty array
console.log(animals.slice(3, 1)); // [] -> empty array

console.log(animals); // ['Cat', 'Dog', 'Cow', 'Monkey', 'Bird']


console.log(animals.splice(1, 2, 'Rabbit', 'Cat', 'Lion')); // ['Dog', 'Cow']   -> it still gives the remote elements.
console.log(animals); // ['Cat', 'Rabbit', 'Cat', 'Lion', 'Monkey', 'Bird']


const numbers = [ 0, 5, -1, -3, 10, 15 ];

numbers.splice(-1, 3, 100, 101, 102); 

console.log(numbers.length)     // 8
console.log(numbers);   // [0, 5, -1, -3, 10, 100, 101, 102]