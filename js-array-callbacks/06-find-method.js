const numbers = [0, 10, -4, 5, 2, -3,];

// find first positive

console.log(numbers.find(number => number > 0));    // 10
console.log(numbers.findIndex(number => number > 0));    // 1

// find last positive

console.log(numbers.findLast(number => number > 0));    // 2
console.log(numbers.findLastIndex(number => number > 0));    // 4

// find first number that is more than 50

console.log(numbers.find(x => x > 50)); // undefined
console.log(numbers.findIndex(x => x > 50)); // -1

/*
loop solution

let firstP;

for (const number of numbers) {
    if (number > 0) {
        firstP = number;
        break;
    }
}

console.log(firstP);    // 10
*/

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

// find the first element that has 4 letters -> Rome
// find the last element that has 6 letters -> Brugge
// find the index of LA -> 4
// find the first element which has i -> Kyiv

console.log(cities.find(x => x.length === 4));
console.log(cities.findLast(x => x.length === 6));
console.log(cities.findIndex(x => x === 'LA'));
console.log(cities.indexOf('LA'));
console.log(cities.find(x => x.toLowerCase().includes('i')));

console.log(cities.find(x => x.length === 7));  // undefined
console.log(cities.findIndex(x => x.length === 7)); // -1
console.log(cities.findLast(x => x.length === 7));  // undefined
console.log(cities.findLastIndex(x => x.length === 7)); // -1