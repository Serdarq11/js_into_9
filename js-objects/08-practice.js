/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/
const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student['hobbies']);
console.log(student.exam_scores);
console.log(student.hobbies[0]);

/*
Find and print average of exam scores -> 75
*/

let average = (student.exam_scores.midterm + student.exam_scores.final) / 2;

console.log(average);

// better solution

const all_scores = Object.values(student.exam_scores);  // [ 60, 90 ]

let sum = 0;

for (const score of all_scores) {
    sum += score;
}

console.log(sum / all_scores.length);

/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/

const book = {
    name: 'Amok',
    author: {
        fname: 'Stefan',
        lname: 'Zweig'
    },
    genre: 'Novella'
};

console.log(book);
console.log(book.author);

const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lname: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My name is Red',
        author: {
            fname: 'Orhan',
            lname: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lname: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];

// Count the books where Author first name has an 'a' -> 2

let countA1 = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].author.fname.toUpperCase().includes('A')) countA1++;
}

console.log(countA1);

// for of solution

let countA2 = 0;

for (const book of books) {
    if (book.author.fname.toUpperCase().includes('A')) countA2++;
}

console.log(countA2);


// Get all the names of the books in array -> [ 'Amok', 'My Name Is Red', '1984' ]

const titles = [];

for (const book of books) {
    titles.push(book.name);
}

console.log(titles);