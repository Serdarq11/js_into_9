/*
TASK 1 

Requirement:
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.

Test data 1:
20, 70, 25

Expected Output 1: false

Test data 2:
65, 80, 90

Expected Output 2: true
*/

let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

console.log(`num1 = ${num1}
num2 = ${num2}
num3 = ${num3}`);
console.log(`The average is = ${(num1 + num2 + num3) / 3}`);

if((num1 + num2 + num3) / 3 >= 50) console.log('true');
else console.log('false');

/*
TASK 2 

Requirement:
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”

Test data 1:
3, 3, 3

Expected Output 1: TRIPLE MATCH

Test data 2:
1, 3, 3

Expected Output 2: DOUBLE MATCH

Test data 3:
1, 2, 3

Expected Output 3: NO MATCH

Test data 4:
1, 1, 2

Expected Output 4: DOUBLE MATCH
*/

let n1 = Math.floor(Math.random() * 3) + 1;
let n2 = Math.floor(Math.random() * 3) + 1;
let n3 = Math.floor(Math.random() * 3) + 1;

console.log(`n1 = ${n1}
n2 = ${n2}
n3 = ${n3}`);

if(n1 !== n2 && n1 !== n3) console.log('NO MATCH');
else if(n1 === n2 && n2 === n3) console.log('TRIPLE MATCH');
else console.log('DOUBLE MATCH');

/*
TASK 3

Requirement:
Write a function named as hasA() which takes a string word as an argument and 
returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true
*/

function hasA(s1) {
    if(s1.includes('A') || s1.includes('a')) return true;
    else return false;
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

/*
TASK 4

Requirement:
Write a function named as doubleOrTripleWord() which takes a string word as an argument and 
returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple”
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22") 	-> "222222"
*/

function doubleOrTripleWord(s2) {
    if(s2.length % 2 === 0) return s2.repeat(3);
    else return s2.repeat(2);
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

/*
TASK 5

Requirement:
Write a function named as firstWord() which takes a string word as an argument and 
returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		-> "Hello"
firstWord("") 		-> ""
firstWord("    ") 		-> ""
*/

function firstWord(s3) {
    if(s3.split(' ').length >= 1) return s3.split(' ')[0];
    else return '';
}

console.log(firstWord("Hello World"));
console.log(firstWord("I like JavaScript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord("    "));

/*
TASK 6

Requirement:
Write a function named as lastWord() which takes a string word as an argument and 
returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript”
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/

function lastWord(s4) {
    if(s4.split(' ').length >= 1) return s4.split(' ')[s4.split(' ').length - 1];
    else return '';
}

console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("    "));

/*
TASK 7

Requirement: 
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript”
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""
*/

function firstlastWord(s5) {
    if(s5.split(' ').length >= 1) return s5.split(' ')[0].concat(s5.split(' ')[s5.split(' ').length - 1]);
    else return '';
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("    "));

/*
TASK 8

Requirement:
Write a function named as startVowel() which takes a string word as an argument and 
returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false
*/

function startVowel(s6) {
    if (s6.startsWith('A') || s6.startsWith('E') || s6.startsWith('I') || s6.startsWith('O') || s6.startsWith('U') || s6.startsWith('a') ||
    s6.startsWith('e') || s6.startsWith('o') || s6.startsWith('u') || s6.startsWith('i')) return true;
    else return false;
}

console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("    "));
console.log(startVowel("123"));

/*
TASK 9

Requirement: 
Write a function named as swap4() which takes a string word as an argument and
returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	-> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 		-> ""
swap4("    ") 		-> ""
swap4("Apple") 	-> ""
*/

function swap4(s7) {
    if(s7.length >= 8) return s7.slice(-4) + s7.slice(4, -4) + s7.slice(0, 4);
    else return '';
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("    "));
console.log(swap4("Apple"));

/*
TASK 10

Requirement: 
Write a function named as swapFirstLastWord() which takes a string word as an argument and 
returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/

function swapFirstLastWord(s8) {
    if (s8.split(' ').length >= 2) return s8.slice(s8.lastIndexOf(' ') + 1) + s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1) + s8.slice(0, s8.indexOf(' '));
    else return '';
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello   "));



