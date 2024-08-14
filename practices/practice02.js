/*
TASK 1 
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 			                -> "APPLE"
"Java is not a scripting programming language"  	-> "JavaScript”
"I don't like books" 				                    -> "I like books"
*/

let sentence1 = "I like apples and oranges";
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

let appleIndex = sentence1.indexOf('apple');
console.log(sentence1.slice(appleIndex, appleIndex + 5).toUpperCase());
console.log(sentence2.slice(0, 4) + sentence2[14].toUpperCase() + sentence2.slice(15, 20));
console.log(sentence3.replace(' don\'t ', ' '));

/*
TASK 2
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let s11 = 'JavaScript'

console.log(`The length is = ${s11.length}`);
console.log(`The first char is = ${s11[0]}`);
console.log(`The last char is = ${s11[s11.length - 1]}`);
console.log(s11.includes('a') || s11.includes('e') || s11.includes('i') || s11.includes('o') || s11.includes('u') ||
s11.includes('A') || s11.includes('E') || s11.includes('I') || s11.includes('O') || s11.includes('U'));

let s12 = '';

console.log(`The length is = ${s12.length}`);
console.log(`The first char is = ${s12[0]}`);
console.log(`The last char is = ${s12[s12.length - 1]}`);
console.log(s12.includes('a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O'));

/*
TASK 3
Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1:
let s2 = "x";

Expected Result 1:
"x"

Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"

Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"
*/

let s21 = 'x';
console.log(s21[(s21.length - 1) / 2]);

let s22 = 'abc';
console.log(s22[Math.floor(s22.length / 2)]);	// also Math.trunc works fine.

let s23 = 'civic';
console.log(s23[parseInt(s23.length / 2)]);

/*
TASK 4
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""

Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc"

Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"
*/

let s31 = '';
console.log(s31.slice((s31.length / 2) - 1, (s31.length / 2) + 1));

let s32 = 'abcd';
console.log(s32.slice((s32.length / 2) - 1, (s32.length / 2) + 1));

let s33 = 'JavaScript';
console.log(s33.slice((s33.length / 2) - 1, (s33.length / 2) + 1));

/*
TASK 5
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 

Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s41 = 'abcd';
console.log(`The first 2 characters are = ${s41.slice(0, 2)}`);
console.log(`The last 2 characters are = ${s41.slice(s41.length - 2)}`);
console.log(`The other characters are = ${s41.slice(2, (s41.length - 2))}`);

let s42 = 'JavaScript';
console.log(`The first 2 characters are = ${s42.slice(0, 2)}`);
console.log(`The last 2 characters are = ${s42.slice(- 2)}`);
console.log(`The other characters are = ${s42.slice(2, -2)}`);

/*
TASK 6
Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.

Test Data 1:
let s5 = "ab";;

Expected Result 1:
true

Test Data 2:
let s5 = "abcd";

Expected Result 2:
false

Test Data 3:
let s5 = ”12ab12";;

Expected Result 1:
true

Test Data 4:
let s5 = "JavaScript";

Expected Result 4:
false
*/

let s51 = 'ab';
console.log(s51.slice(0, 2) == s51.slice((s51.length - 2), s51.length));

let s52 = 'abcd';
console.log(s52.slice(0, 2) == s52.slice((s52.length - 2), s52.length));

let s53 = '12ab12';
console.log(s53.slice(0, 2) == s53.slice((s53.length - 2), s53.length));

let s54 = 'JavaScript';
console.log(s54.slice(0, 2) == s54.slice((s54.length - 2), s54.length));


/*
TASK 7
Requirement:
Write a program that gets rid of first and last characters of given two String values. Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";

Expected Result 1:
rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";

Expected Result 2:
23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";

Expected Result 3:
2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";

Expected Result 4:
elloe
*/

let s611 = 'orange';
let s612 = '6';
console.log(s611.slice(1, s611.length - 1) + s612.slice(1, s612.length - 1));

let s621 = '1234';
let s622 = 'Green';
console.log(s621.slice(1, s621.length - 1) + s622.slice(1, s622.length - 1));

let s631 = '123456';
let s632 = 'Blue';
console.log(s631.slice(1, s631.length - 1) + s632.slice(1, s632.length - 1));

let s641 = 'Yellow';
let s642 = 'Red';
console.log(s641.slice(1, s641.length - 1) + s642.slice(1, s642.length - 1));

/*
TASK 8
Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1:
let s7 = "";

Expected Result 1:
false

Test Data 2:
let s7 = "red";

Expected Result 2:
false

Test Data 3:
let s7 = "green";

Expected Result 3:
false

Test Data 4:
let s7 = "xxbluexx";

Expected Result 4:
true
*/

let s71 = '';
console.log(s71.startsWith('xx') && s71.endsWith('xx'));

let s72 = 'red';
console.log(s72.startsWith('xx') && s72.endsWith('xx'));

let s73 = 'green';
console.log(s73.startsWith('xx') && s73.endsWith('xx'));

let s74 = 'xxbluexx';
console.log(s74.startsWith('xx') && s74.endsWith('xx'));

/*
TASK 9
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:
let s8 = "";

Expected Result 1:
""
Test Data 2:
let s8 = " ";

Expected Result 2:
" "
Test Data 3:
let s8 = "I like Apple";

Expected Result 3:
"Apple like I"

Test Data 4:
let s8 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript"
*/

let s81 = '';
console.log(s81.replace('', ''));

let s82 = ' ';
console.log(s82.replace(' ', ' '));

let s83 = 'I like Apple';
console.log(s83.replace('Apple', 'I').replace('I', 'Apple'));

let s84 = 'JavaScript is nice to learn';
console.log(s84.replace('learn', 'JavaScript').replace('JavaScript', 'learn'));

/*
TASK 10
Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1:
let s9 = " Good morning";
Expected Result 1:
2

Test Data 2:
let s9 = "Hello";
Expected Result 2:
1

Test Data 3:
let s9 = "I like Apple";
Expected Result 3:
3

Test Data 4:
let s9 = "JavaScript is nice to learn";
Expected Result 4:
5
*/

let s91 = 'Good Morning';
console.log(s91.split(' ').length);	// 2

let s92 = 'Hello';
console.log(s92.split(' ').length);	// 1

let s93 = 'I like Apple';
console.log(s93.split(' ').length);	// 5

let s94 = 'JavaScript is nice to learn';
console.log(s94.length - s94.replaceAll(' ', '').length + 1);	// 5



