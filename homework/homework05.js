/*
TASK 1

Requirement:
Write a function named countPos() which takes an array of numbers as an argument 
and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/

function countPos(arr) {
    let counter = 0;

    for (const x of arr) {
        if (x > 0) counter++;
    }
    return counter;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

/*
TASK 2

Requirement:
Write a function named countA() which takes a string argument and returns 
how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity. 

Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0
*/

function countA(str) {
    let counter = 0;

    for (const a of str) {
        if (a.toLowerCase() === 'a') counter++;
    }
    return counter;
}

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

/*
TASK 3

Requirement: 
Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/

function countVowels(str) {
    let counter = 0;

    for(const a of str) {
        if (a.toLowerCase() === 'a' || a.toLowerCase() === 'e' || a.toLowerCase() === 'o' || a.toLowerCase() === 'u' || 
        a.toLowerCase() === 'i') counter++;
    }
    return counter;
}

console.log(countVowels("Hello"));
console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript is fun"));
console.log(countVowels(""));

/*
TASK 4

Requirement: 
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

function countConsonants(str) {
    let counter = 0;

    for(const a of str) {
        if (!(a.toLowerCase() === 'a' || a.toLowerCase() === 'e' || a.toLowerCase() === 'o' || a.toLowerCase() === 'u' || 
        a.toLowerCase() === 'i')) counter++;
    }
    return counter;
}

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

/*
TASK 5

Requirement:
Write a function named countWords() which takes a string argument and 
returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				-> 4
*/

function countWords(str) {;
    let countSpaces = 0;

    for(let i = 0; i < str.trim().length; i++) {
        if (str.trim()[i] === ' ') countSpaces ++;
    }
    return countSpaces + 1;
}

console.log(countWords("     Javascript is fun     "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

/*
TASK 6

Requirement:
Write a function named as factorial() which takes a number as an argument and 
returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/

function factorial(num) {
    return num * num;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));

/*
TASK 7

Requirement: 
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity


Examples:
isPalindrome("Hello") 		-> false
isPalindrome("Kayak") 		-> true 
isPalindrome("civic") 		-> true
isPalindrome("abba") 		-> true
isPalindrome("ab  a") 		-> false
isPalindrome("123454321") 	-> true
isPalindrome("A") 		-> true
isPalindrome("") 		-> true
*/

const isPalindrome = (str) => {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join(''); 
};

console.log(isPalindrome('Hello'));
console.log(isPalindrome('kayak'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('ab  a'));
console.log(isPalindrome('123454321'));
console.log(isPalindrome('A'));
console.log(isPalindrome(''));

/*
TASK 8

Requirement: 
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0
*/

function countMultipleWords(arr) {
    let countMultipleWords = 0;

    for (const x of arr) {
        if (x.trim().split(' ').length > 1) countMultipleWords++;
    }
    return countMultipleWords;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([ ]));

/*
TASK 9

Requirement: 
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0
*/

const count3OrLess = (str) => {
    let countWords = str.split(' ');
    let howMany3OrLess = 0;

    for (let i = 0; i < countWords.length; i++) {
        if (countWords[i].length <= 3 && countWords[i].length > 0) howMany3OrLess++;
    }
    return howMany3OrLess;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("My name is John Doe"));
console.log(count3OrLess(""));



/*
TASK 10

Requirement:
Write a function named as isPrime() which takes a number as an argument and 
returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by 
itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(2) 		-> true
isPrime(29) 	-> true
isPrime(-5)		-> false
isPrime(0)		-> false
isPrime(1)		-> false
*/

const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let d = 5;
    while (d < num) {
        if (num % d === 0) return false;
        d += 2;
    }

    return true;
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(19));
console.log(isPrime(77));

/*
TASK 11

Requirement:
Write a function named add() which takes two array of numbers as argument and 
returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]
*/

const add = (arr1, arr2) => {
    const arr3 = [];
    const longSizedArray = arr1.length > arr2.length ? arr1 : arr2;
    const shortSizedArray = arr1.length < arr2.length ? arr1 : arr2;

    for (let i = 0; i < shortSizedArray.length; i++) {
        arr3.push(arr1[i] + arr2[i]);
    }
    return arr3.concat(longSizedArray.slice(shortSizedArray.length));
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));

/*
TASK 12

Requirement: 
Write a function named as removeExtraSpaces() which takes a string word as an argument and 
returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 
*/

function removeExtraSpaces(str) {
    let countSpaces = 0;
    let countWords = 0;
    return str.trim().split(' ').length;
}

console.log(removeExtraSpaces("      Hello    World     "));

/*
TASK 13

Requirement: 
Write a function named findClosestTo10() which takes an array of numbers as argument and 
returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

// function fincClosestTo10(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i])
//     }
// }

/*
TASK 14

Requirement: 
Write a function named as isEmailValid() which takes a string email as an argument and 
returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@.com") 		-> false
isEmailValid("a@outlook.com") 		-> false
isEmailValid("johndoe@a.com") 		-> false
isEmailValid("johndoe@@gmail.com") 	-> false
isEmailValid("johndoe@gmail.com") 		-> true
*/



/*
TASK 15

Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and 
returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:
isPasswordValid("") 			-> false
isPasswordValid("abcd") 			-> false
isPasswordValid("abcd1234") 		-> false
isPasswordValid("Abcd1234") 		-> false
isPasswordValid("Chicago12345US!#$%") 	-> false
isPasswordValid("Abcd1234$") 		-> true
isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true
*/

const {isDigit} = require('../utils/CharacterHelper.js');
const {isSpace} = require('../utils/CharacterHelper.js');
const {isSpecial} = require('../utils/CharacterHelper.js');
const {isLowerCase} = require('../utils/CharacterHelper.js');
const {isUpperCase} = require('../utils/CharacterHelper.js');

function isPasswordValid(str) {
    for (i = 0; i < str.length; i++) {
        if (str.length <=16 && str.length >= 8 && str[i] === isDigit() && str[i] === isSpace() && str[i] === isSpecial() && str[i] === isLowerCase() && str[i] === isUpperrCase()) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isPasswordValid("abcd"));
console.log(isPasswordValid("abcd1234"));



