/*
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL
*/

let exam_score = 61;

if (exam_score >= 60) {
    console.log('PASS');
}
else {
    console.log('FAIL');
}

if (exam_score < 60) {
    console.log('FAIL');
}
else {
    console.log('PASS');
    console.log('CONGRATS!')
}

/*
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 64;

if(age >= 65) {
    console.log('YOU CAN GET RETIRED')
} else {
    console.log('YOU CANNOT GET RETIRED!!!')
}

let fname = 'John';
let first = false;

if(first) {
    console.log(fname.at(0));
} else {
    console.log(fname.at(-1));
}