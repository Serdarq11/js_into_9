/*
TASK 1
Requirement:
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1:
34

Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2:
76

Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

const {generateRandomNumber} = require('../utils/MathHelper.js');
let num = generateRandomNumber(1, 100);

console.log(`The random number = ${num}`);

if (num > 75) console.log(`${num} is in the 4th quarter`);
else if (num > 50) console.log(`${num} is in the 3rd quarter`);
else if (num > 25) console.log(`${num} is in the 2nd quarter`);
else console.log(`${num} is in the 1st quarter`);

if (num > 50) console.log(`${num} is in the 2nd half`);
else console.log(`${num} is in the 1st half`);

/*
TASK 2
Requirement:
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).

Print true if they are all even numbers.
Otherwise, print false

Test data 1:
2, 4, 6

Expected result 1:
true

Test data 2:
68, 44, 2

Expected result 2:
true

Test data 3:
10, 20, 25

Expected result 3:
false

Test data 4:
51, 67, 99

Expected result 4:
false
*/

const {generateRandomNumber} = require('../utils/MathHelper.js');

let num1 = generateRandomNumber(1, 100);
let num2 = generateRandomNumber(1, 100);
let num3 = generateRandomNumber(1, 100);

console.log(`The random number 1 = ${num1}`);
console.log(`The random number 2 = ${num2}`);
console.log(`The random number 3 = ${num3}`);

if((num1 % 2 === 0) && (num2 % 2 === 0) && (num3 % 2 === 0)) {
    console.log(true);
} else {
    console.log(false);
}

/*
TASK 3
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.

Test data 1:
"a"

Expected result 1:
"a"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit

Test data 3:
"$"

Expected result 1:
"$"  is a special character

Test data 4:
" "

Expected result 4:
" " is a whitespace
*/

let char = '5';

let charAscii =   char.charCodeAt(0);               

if ((charAscii >= 65 && charAscii <= 97) || (97 <= charAscii && charAscii <= 122)) console.log(`"${char}" is a letter`);
else if(48 <= charAscii && charAscii <= 57) console.log(`"${char}" is a digit`);
else if(charAscii === 32) console.log(`"${char}" is a whitespace`);
else console.log(`"${char}" is a special character`);

/*
TASK 4
Write a function named hasBlue() which takes a string argument and 
returns true if the string has an occurrence of blue word, returns false otherwise.

NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")   		-> false
hasBlue("Javabluescript")   	-> true
hasBlue("Tech Blue Global")   	-> true
hasBlue("1234")   		-> false
hasBlue("ABLUEC")   		-> true
*/

function hasBlue(str1) {
    if (str1.toUpperCase().includes('BLUE')) return true;
    else return false;
}

console.log(hasBlue("Hello World"));
console.log(hasBlue("Javabluescript"));
console.log(hasBlue("Tech Blue Global"));
console.log(hasBlue("1234"));
console.log(hasBlue("ABLUEC"));

/*
TASK 5
Write a function named startT() which takes a string argument and 
returns true if the string start with letter T, returns false otherwise.

NOTE: Ignore upper/lower cases.
Examples:
startT("Hello World")   	-> false
startT("typescript")   	-> true
startT("TechGlobal")   	-> true
startT("1234")   	-> false
startT("ABC")   	-> false
*/

function startT(str2) {
    if(str2.toUpperCase().startsWith('T')) return true;
    return false;
}

console.log(startT('Hello World'));
console.log(startT('typescript'));
console.log(startT('TechGlobal'));
console.log(startT('1234'));
console.log(startT('ABC'));