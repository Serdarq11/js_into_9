/*
TASK 1
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
*/

let num = Math.ceil(Math.random() * 50);

console.log(`The random number * 5 = ${num * 5}`);

/*
TASK 2
Requirement:
Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/

let n1 = Math.ceil(Math.random() * 10);
let n2 = Math.ceil(Math.random() * 10);

console.log(`Min number = ${Math.min(n1, n2)}`);
console.log(`Max number = ${Math.max(n1, n2)}`);
console.log(`Difference = ${Math.abs(n1 - n2)}`);

/*
TASK 3
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
*/

let number1 = Math.floor(Math.random() * 51) + 50;

console.log(`The random number % 10 = ${number1 % 10}`);

/*
TASK 4
Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8

Expected result:
59
*/

let i1 = Math.ceil(Math.random() * 10);
let i2 = Math.ceil(Math.random() * 10);
let i3 = Math.ceil(Math.random() * 10);
let i4 = Math.ceil(Math.random() * 10);
let i5 = Math.ceil(Math.random() * 10);

console.log(i1 * 5 + i2 * 4 + i3 * 3 + i4 * 2 + i5 * 1);

/*
TASK 5
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/

let k1 = Math.ceil(Math.random() * 25);
let k2 = Math.ceil(Math.random() * 25) + 25;
let k3 = Math.ceil(Math.random() * 25) + 50;
let k4 = Math.ceil(Math.random() * 25) + 75;

console.log(`Difference of max and min = ${Math.abs(Math.max(k1, k2, k3, k4) - Math.min(k1, k2, k3, k4))}`);
console.log(`Difference of second and third = ${Math.abs(k2 - k3)}`);
console.log(`Average of all = ${(k1 + k2 + k3 + k4) / 4}`);

