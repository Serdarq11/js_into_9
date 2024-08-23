const numbers = [3, 4, 7, 3, 2, 2, 7];

// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19   
console.log('\n----------Sum of Even Elements that have Even Indexes-----\n');

let sum = 0;

for (let i = 0; i <= numbers.length - 1; i++) {
    if (i % 2 === 0) sum += numbers[i];
}

console.log(sum);


// Find the multiplication of numbers that has odd index -> 4 * 3 * 2 -> 24

console.log('\n----------Product of elements that have Odd Indexes-----------\n');

let productOfOddIndexes = 1;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 1) productOfOddIndexes *= numbers[i];
}

console.log(productOfOddIndexes);   


/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 2, 1, 2 ]
Second array -> 	[ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

console.log(arr1);
console.log(arr2);

const arr3 = [];


for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] * arr2[i];    // or arr3.push( arr1[i] * arr2[i] )
}

console.log(arr3);  


const array1 = [ 5, 8 ];
const array2 = [ 9, 3, 5, 1, 0 ];

// [ 45, 24, 5, 1, 0 ]

const array3 = [];

const shortArray = array1.length < array2.length ? array1 : array2;
const longArray = array1.length > array2.length ? array1 : array2;

for(let i = 0; i < shortArray.length; i++) {
    array3.push(array1[i] * array2[i]);
}

console.log(array3.concat(longArray.slice(shortArray.length)));


const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];

// Put together all these elements from a1, a2 and a3 in a descending order -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

/*
1. create a new array and store all the elements in it
2. sort this new array in a descending order
*/

// const allNumbers = a1.concat(a2, a3);
// const allNumbers = [a1, a2, a3].flat();

const allNumbers = [...a1, ...a2, ...a3];

allNumbers.sort((a, b) => b - a);

console.log(allNumbers);


const nums = [-1, 1, 3, 0, 2, 6, 8];  

// Please find the first even number from the array -> 0

let firstEven;  // undefined
let secondEven; // undefined

for (const num of nums) {
   if (num % 2 === 0) {
        if (firstEven === undefined) firstEven = num;   // num = 0;
        else {
            secondEven = num;   // 2
            break;
        }
    }
}

console.log(firstEven);


// -1, 1, 3, 0, 2, 6, 8
// Please find the biggest odd number from the array -> 3
let biggestOdd; // 3

nums.sort((a, b) => b - a);

for (const num of nums) {
    if (num % 2 === 1) {
        biggestOdd = num;
        break;
    }
}

console.log(biggestOdd);