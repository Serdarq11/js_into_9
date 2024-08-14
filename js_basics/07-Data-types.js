// 1.String
let favCoffee = 'Mocha';     // "Mocha" or `Mocha`
let itemName = 'Mouse';


// 2.Number -> Floating numbers & Absolute numbers
let favCoffeePrice = 4.00;
let itemPrice = 16.99;

let age = 25;
let itemQuantity = 5;


// 3.Boolean
let b1 = true;
let b2 = false;
let isThereMocha = true;
let isItRainingToday = false;

if(isThereMocha){
    console.log('Can I get a Mocha?');
} 
else{
    console.log('Can I get a regular black coffee then?');
}


// 4.Undefined - a variable declared but not assigned with any value.
let favBook;
console.log(favBook); // undefined


// 5.Null
let middleName = null;
console.log(middleName);  // null


// 6.BigInt 9007199254740991+   // This is added with ES6
let num1 = 92345678912345678;

console.log(num1);           //92345678912345680

let num2 = 9007199254740991;  // 9007199254740991

console.log(num2);

let num3 = 900719925474099234948478274n

console.log(num3); 

let num4 = BigInt('900719925474099234948478274');

console.log(num4);   // 900719925474099234948478274 


// 7.Symbol
let star = Symbol('*');
console.log(star);


// typeof operator
console.log(typeof 5);                       // number
console.log(typeof 5n);                      // bigint
console.log(typeof true);                    // boolean
console.log(typeof !false);                  // boolean  
console.log(typeof 3 == 3 && 5 != 5);        // boolean  - false
console.log(typeof '123');                   // string
console.log(typeof '');                      // string
console.log(typeof null);                    // object
console.log(typeof undefined);               // undefined
console.log(typeof (3 == 3 && 5 != 5));      // boolean 
