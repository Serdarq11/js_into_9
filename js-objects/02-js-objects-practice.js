const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 25,
    favNumber: 7,
    favCities: ['Chicago', 'Miami', 'Berlin', 'Madrid', 'Monako'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: 12345,
        country: 'US',
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};

// find and print person's city and state   -> 'Chicago, IL'
// find and print person's favCities
// print 'GOOD GUY' if the person likes JS, or 'STAY AWAY GUY', otherwise

console.log(person.address.city + ', ' + person.address.state);
console.log(person.favCities);

if (person.likesJS) console.log('GOOD GUY');
else console.log('STAY AWAY GUY');

console.log(person.likesJS ? 'GOOD GUY' : 'STAY AWAY GUY');
person.likesJS ? console.log('GOOD GUY') : console.log('STAY AWAY GUY');

let countFavCitiesStartingWithM = 0;

for (const city of person.favCities) {
    if (city.toUpperCase().startsWith('M')) countFavCitiesStartingWithM++;
}

console.log(countFavCitiesStartingWithM);