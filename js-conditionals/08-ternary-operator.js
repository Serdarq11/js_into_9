let gender = 'female';

// if(gender === 'male') {
//     fname = 'Alex';
// } else {
//     fname = 'Emma';
// }

// Using ternary instead of if else above
// condition ? true statement : false statement
// gender = 'female' ? fname = 'Emma' : fname = 'Alex';

let fname = gender === 'female' ? 'Emma' : 'Alex';

console.log(fname); // 'Emma'

let number = 10;

number % 2 === 0 ? console.log('EVEN') : console.log('ODD');

let num2 = -2;

// if(num2 > 0) {
//     console.log('POSITIVE');
// } else if(num2 < 0) {
//     console.log('NEGATIVE');
// } else {
//     console.log('ZERO');
// }

let result = num2 > 0 ? 'POSITIVE' : num2 < 0 ? 'NEGATIVE' : 'ZERO';

console.log(result);

// mood it will be either GREAT (70+) or GOOD (<70)

let mock_score = 90;

let mood = mock_score >= 70 ? 'GREAT' : 'GOOD'; // storing the mood in a variable

console.log('The mood is', mood)

if (mood === 'GREAT') {
    console.log('Have fun!');
} else {
    console.log('Practice more!');
}