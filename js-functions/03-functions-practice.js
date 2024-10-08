/*
Write a function which takes a number and return true if the number is even or
return false if the number is odd.

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)   -> true
isEven(-7)   -> false

*/

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(0));
console.log(isEven(-2));
console.log(isEven(-4));
console.log(isEven(10));
console.log(isEven(-1));
console.log(isEven(3));

/*
Write a function which takes a number and return true if the number is odd or
return false if the number is even.

isOdd(4)   -> false
isOdd(3)   -> true
isOdd(0)   -> false
isOdd(-2)   -> false
isOdd(-7)   -> true

*/

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(3));
console.log(isOdd(-3));
console.log(isOdd(0));
console.log(isOdd(2));

/*
Write a function named as initials which takes two arguments as fname and lname and returns initials

initials('John', 'Doe')     -> 'J.D.'
initials('Adam', 'Smith')   -> 'A.S.' 
initials('Max', 'Smith')   -> 'M.S.' 
*/

function initials(fname, lname) {
    // return `${fname[0]}.${lname[0]}.`
    // return fname.at(0) + '.' + lname.at(0) + '.';
    // return fname.charAt(0) + '.' + lname.charAt(0) + '.';
    // return fname.slice(0, 1) + '.' + lname.slice(0, 1) + '.';
    return fname.substring(0, 1) + '.' + lname.substring(0, 1) + '.';
}

console.log(initials('John', 'Doe'));
console.log(initials('Adam', 'Smith'));
console.log(initials('Max', 'Smith'));

/*
Write a function named as inits which takes a fullname and returns initials

inits('John Doe')     -> 'JD'
inits('Adam Smith')   -> 'AS' 
inits('Max Smith')   -> 'MS' 
*/

function inits(fullname) {
   // return fullname[0] + fullname[fullname.indexOf(' ') + 1] ;
   const names = fullname.split(' ');   // ['John', 'Doe']
   return names[0][0] + names[1][0];
}

console.log(inits('John Doe'));
console.log(inits('Adam Smith'));
console.log(inits('Max Smith'));
console.log(inits('Alexander Doe'));


