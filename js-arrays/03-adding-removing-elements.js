const names = ['Alex', 'John'];

console.log(names); // [ 'Alex', 'John' ]

// adding elements to the end of the array
names.push('Jane'); // will be added to the end - tail

console.log(names); // [ 'Alex', 'John', 'Jane' ]

names.push('Max','Maria');

console.log(names); // [ 'Alex', 'John', 'Jane', 'Max', 'Maria' ]

// removing elements from the end of the array
names.pop();    // 'Maria'
console.log(names); // [ 'Alex', 'John', 'Jane', 'Max' ]    


// adding element to the beginning of the array
names.unshift('James'); // 5

console.log(names); // [ 'James', 'Alex', 'John', 'Jane', 'Max' ]

names.unshift('Mary', 'Jessie');    // 7
console.log(names); // ['Mary', 'Jessie', 'James', 'Alex','John', 'Jane','Max'

// removing elements from the beginning of the array
names.shift();  // 'Mary'
names.shift();  // 'Jessie'
names.shift();  // 'James'
console.log(names); // [ 'Alex', 'John', 'Jane', 'Max' ]