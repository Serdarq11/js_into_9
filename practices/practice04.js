const {CharacterHelper} = require('../utils/CharacterHelper.js');
const {generateRandomNumber} = require('../utils/MathHelper.js');

/*
TASK 1 

Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

Test data 1:
0, 1

Expected result 1:
false

Test data 2:
0, 0

Expected result 2:
true

Test data 3:
1, 0

Expected result 3:
false

Test data 4:
1, 1

Expected result 4:
true
*/

let t1num1 = generateRandomNumber(0, 1);
let t1num2 = generateRandomNumber(0, 1);

if (t1num1 === t1num2) console.log(true);
else console.log(false);

t1num1 === t1num2 ? console.log(true) : console.log(false);

// THE BEST SOLUTION
console.log(t1num1 === t1num2);

/*
TASK 2

Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"


Test data 1:
"v"

Expected result 1:
"v"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit
*/

let t2character = 'a';

let t2ascii = t2character.charCodeAt(0);

// if else solution
if (48 <= t2ascii && t2ascii <= 57) console.log(`"${t2character}" is a digit`);
else if ((65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122)) console.log(`"${t2character}" is a letter`);
else console.log('INVALID INPUT');

// ternary solution
48 <= t2ascii && t2ascii <= 57
    ? console.log(`"${t2character}" is a digit`)
    : (65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122)
        ? console.log(`"${t2character}" is a letter`)
        : console.log('INVALID INPUT');

// switch solution
switch (true) {
    case 48 <= t2ascii && t2ascii <= 57:
        console.log(`"${t2character}" is a digit`);
        break;
    case (65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122):
        console.log(`"${t2character}" is a letter`);
        break;
    default:
        console.log('INVALID INPUT');
}


/*
TASK 3

Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"

Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t3character = 'a';

if (t3character.charCodeAt(0) >= 65 && t3character.charCodeAt(0) <= 90) {
    console.log(`"${t3character}" is an uppercase letter`);
} else if (t3character.charCodeAt(0) >= 97 && t3character.charCodeAt(0) <= 122) {
    console.log(`"${t3character}" is a lowercase letter`);
} else {
    console.log('INVALID INPUT');
}

// nested if-else solution

if((t3character.charCodeAt(0) >= 65 && t3character.charCodeAt(0) <= 90) || (t3character.charCodeAt(0) >= 97 && t3character.charCodeAt(0) <= 122)) {
    if (t3character.charCodeAt(0) >= 65 && t3character.charCodeAt(0) <= 90) {
        console.log(`"${t3character}" is an uppercase letter`);
    } else {
        console.log(`"${t3character}" is a lowercase letter`);
    }
} else {
    console.log('INVALID INPUT');
}

/*
TASK 4

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character

Test data 2:
"5"

Expected result 2:
"5" is not a special character

Test data 3:
"$"

Expected result 3:
"$"  is a special character

Test data 4:
" "

Expected result 4:
" " is not a special character
*/

let t4character = '5';
let t4ascii = t4character.charCodeAt(0);

if ((t4ascii >= 65 && t4ascii <= 90) || (t4ascii >= 97 && t4ascii <= 122) || (t4ascii === 32) || (t4ascii >= 48 && t4ascii <= 57)) {
    console.log(`"${t4character}" is not a special character`);
} else {
    console.log(`"${t4character}" is a special character`);
}

/*
TASK 5 

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"

Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let t5character = 'N';
let t5ascii = t5character.charCodeAt(0);

if ((t5ascii === 65) || (t5ascii === 69) || (t5ascii === 73) || (t5ascii === 79) || (t5ascii === 85) || (t5ascii === 97) || 
(t5ascii === 101) || (t5ascii === 105) || (t5ascii === 111) || (t5ascii === 117)) {
    console.log(`"${t5character}" is a vowel`);
} else if (((t5ascii >= 65 && t5ascii <= 90) || (t5ascii >= 97 && t5ascii <= 122)) && !((t5ascii === 65) || 
(t5ascii === 69) || (t5ascii === 73) || (t5ascii === 79) || (t5ascii === 85) || (t5ascii === 97) || 
(t5ascii === 101) || (t5ascii === 105) || (t5ascii === 111) || (t5ascii === 117))) {
    console.log(`"${t5character}" is not a vowel`);
} else {
    console.log('INVALID INPUT');
}


if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    // I will check if it is vowel or not
    if('aeiouAEOUI'.includes(t5character)) {
        console.log(`"${t5character}" is a vowel`);
    }
    else {
        console.log(`"${t5character}" is not a vowel`);
    }
}
else {
    console.log('INVALID INPUT')
}


if('aeiouAEOUI'.includes(t5character)) {
    console.log(`"${t5character}" is a vowel`);
}
else if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    console.log(`"${t5character}" is not a vowel`);
}
else {
    console.log('INVALID INPUT')
}



console.log(CharacterHelper.isVowel('A'));
console.log(CharacterHelper.isVowel('b'));
console.log(CharacterHelper.isVowel('I'));
