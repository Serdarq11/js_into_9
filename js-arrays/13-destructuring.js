const favMovies = ['Harry Potter', 'Godfather', 'The Lord of the Rings'];

// destructuring - not preferred
const fav1 = favMovies[0];
const fav2 = favMovies[1];
const fav3 = favMovies[2];

// better version
const [fav01, fav02, fav03] = favMovies;

console.log(fav02); // 'Godfather'
console.log(fav03); // 'The Lord of the Rings'

const credentials = ['TechGlobalSchool', 'Test123', 'techglobal.gmail.com'];

// username, password, email

const username = credentials[0];
const password = credentials[1];
const email = credentials[2];

const [username1, password1, email1] = credentials;

console.log(username1); // TechGlobalSchool
console.log(username);  // TechGlobalSchool
console.log(password);  // Test123
console.log(password1); // Test123
console.log(email); // techglobal.gmail.com
console.log(email1); // techglobal.gmail.com

const numbers = [-3, 10, 0, 100, 200];

const [ , ten, zero, , two_hundred ] = numbers;

console.log(two_hundred);   // 200