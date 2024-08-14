/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
*/

function startE(name) {
    if(name.startsWith('E') || name.startsWith('e')){
        return true;
    } else {
        return false;
    }
}

console.log(startE('Emily'));
console.log(startE('emily'));
console.log(startE('Alex'));
console.log(startE(''));

/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/

function divisible5(num) {
    if(num % 5 === 0) {
        return true;
    } else{
        return false;
    }
}

console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));
console.log(divisible5(99));

/*
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/

function fooBar(num) {
    if(num % 5 === 0 && num % 7 === 0) return 'foobar';
    else if(num % 5 === 0) return 'foo';
    else if(num % 7 === 0) return 'bar';
    
    return num;
}

console.log(fooBar(2));
console.log(fooBar(3));
console.log(fooBar(5));
console.log(fooBar(10));
console.log(fooBar(14));
console.log(fooBar(0));
console.log(fooBar(35));
console.log(fooBar(70));


/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/ 

function getGrade(grade) {
    if(num < 0 || num > 100) throw Error('INVALID input!!! The score cannot be ' + num);
    
    if(grade >= 90 && grade <= 100) return 'A';
    else if(grade >= 80 && grade < 90) return 'B';
    else if(grade >= 70 && grade < 80) return 'C';
    else if(grade >= 60 && grade < 70) return 'D';

    return 'F';
}

console.log(getGrade(90));
console.log(getGrade(89));
console.log(getGrade(80));
console.log(getGrade(79));
console.log(getGrade(70));
console.log(getGrade(69));
console.log(getGrade(60));
console.log(getGrade(59));

console.log(getGrade(95));
console.log(getGrade(83));
console.log(getGrade(23));
console.log(getGrade(67));