/*
Create a function named as sayHi which outputs "Hi" to the console when invoked.
If the function does not return something, then you cannot store the result of the function in a variable.
*/

function sayHi() {
    console.log('Hi');
}

sayHi();    // Output : 'Hi'
sayHi();
sayHi();

/*
Write a function named as sayHello which takes a name (string) and outputs 'Hello {name}!'

sayHello('John');    // Output: 'Hello John!'
sayHello('Ali');    // Output: 'Hello Ali!'
*/

function sayHello (name) {
    console.log(`Hello ${name}!`);
}

sayHello('John');
sayHello('Ali');
sayHello('Hicran');

/*
Write a function named as greet which takes two arguments as name and greeting and outputs '{greeting}, {name}!'

sayHello('Good morning', 'John');    // Output: 'Good morning, John!'
sayHello('Hello', 'Ali');    // Output: 'Hello, Ali!'
*/

function greet(name, greeting) {
    console.log(`${greeting}, ${name}! `);
}

greet ('John', 'Good morning'); // 'Good morning, John' 
greet ('Ali', 'Hello'); // 'Hello, Ali'

/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum (num1, num2) {
    console.log('I am before return');
    return num1 + num2;
    console.log('I am after return');
}

console.log(sum(3, 5));
console.log(sum(4, 7));
console.log(sum(-2, 3));
console.log(sum(2, 3) * sum(5, 7) / sum(2, 4));

/*
Write a function named as product which takes 3 number arguments and return their product

product(2, 4, 5)    -> 40
product(3, 7, 6)    -> 126
product(5, 0, 9)    -> 0
*/

function product(num1, num2, num3) {
    return num1 * num2 * num3;
}

console.log(product(2, 4, 5));
console.log(product(3, 7, 6));
console.log(product(5, 0, 9));

function nTimesStr(str, n) {
    for(let i = 1; i <= n; i++) {
        console.log(str);
    }
}

nTimesStr('TechGlobal', 5);

function king(name, n) {
    console.log(`${name} the ${n}th!`);
}

king('Henry', 5);   // Henry the 5th!