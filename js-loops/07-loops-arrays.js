const names = ['John', 'Jane', 'Alex', 'Max', 'james'];

// looping array elements with for loop

for (let i = 0; i <= names.length - 1; i++) {
    console.log(names[i]);
}

console.log('\n----------for...of---loop---------\n');

// looping array elements with for...of loop
for (const name of names) {
    console.log(name);
}

// count how many names starts with j or J  -> 3
console.log('\-------------for...of loop j start-----\n');

countJ = 0;

for (const name of names) {
    if(name.toUpperCase().startsWith('J')) countJ++;
}

console.log('The total count of names starting with j is =', countJ);

console.log('\-------------for loop-----\n');

count = 0;

for (let i = 0; i <= names.length - 1; i++) {
    if (names[i].toUpperCase().startsWith('J')) count++;
}

console.log('The total count of names starting with j is =', count);