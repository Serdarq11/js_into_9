/*
Find the sum, subtraction, multiplication, division and remainder of these 2 numbers.
*/

let num1 = 6;
let num2 = 4;

console.log('The sum is = ' + (num1 + num2));               // The sum is = 10
console.log('The subtraction is = ' + (num1 - num2));       // The subtraction is = 2
console.log('The multiplication is = ' + num1 * num2);      // The multiplication is = 24
console.log('The division is = ' + num1 / num2);            // The division is = 1.5
console.log('The remainder is = ' + num1 % num2);           // The remainder is = 2

console.log(`The sum is = ${num1 + num2}`);        
console.log(`The subtraction is = ${num1 - num2}`);        
console.log(`The multiplication is = ${num1 * num2}`);        
console.log(`The division is = ${num1 / num2}`);        
console.log(`The remainder is = ${num1 % num2}`);   

/*
Assume that you are given a rectangle with width = 5 and height = 8

Calculate the area and perimeter of the rectangle

area = width * height
perimeter = 2 * (height + width)
*/

let width = 5, height = 8;

console.log('The area = ' + width * height);
console.log('The perimeter = ' + 2 * (width + height));

/* 
An annual average salary for an SDET in the Unites States is $120k.
Write a program that calculates and prints the monthly and bi-weekly
and weekly average amount that an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week
*/

let salary = 120000;

console.log(`Annual average salary = $${salary}`);
console.log(`Monthly salary = $${salary / 12}`);
console.log(`Weekly salary = $${salary / 52}`);
console.log(`Biweekly salary = $${salary / 26}`);


