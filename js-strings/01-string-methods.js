let fname = 'John';

//  length property - returns how many characters you have in the string
console.log(fname.length);  // 4


//  concat() method

let lname = 'Wick'; 

//  let fulname = fname + ' ' + lname;
//  let fulname = `${fname} ${lname}`;
// let fullname = fname.concat(' ').concat(lname);     // 'John Wick'
let fullname = fname.concat(' '.concat(lname));     // 'John Wick'

console.log(fname, lname);

/*
TASK: it combines strings 
RETURN: it returns a new string
ARGUMENTS: it takes a string as an argument
CHANGE ORIGINAL VALUE: It does not change original string values
STATIC or NON-STATIC: non-static

Static vs non-static decision for properties and methods
Did you call method or property with a variable?
YES -> non-static 
NO -> static
*/