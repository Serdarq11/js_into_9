const sentences = ['Good morning', 'I like arrays', 'It is Sunday'];

// each sentence's first word => ['Good', 'I', 'It']

const firstWords = sentences.map(x => x.split(' ')[0]);

console.log(firstWords);

// another solution with loops

const newArr = [];

for (const sentence of sentences) {
    // newArr.push(sentence.split(' ')[0]);
    newArr.push(sentence.slice(0, sentence.indexOf(' ')));
}

console.log(sentences);
console.log(newArr);

// each sentence's last word => ['morning', 'arrays', 'Sunday']

//const lastWords = sentences.map(x => x.slice(x.lastIndexOf(' ') + 1));
const lastWords = sentences.map(x => x.split(' ').at(-1));
//const lastWords = sentences.map(x => x.split(' ').pop());
//const lastWords = sentences.map(x => x.split(' ').slice(-1)).flat();

console.log(lastWords);


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

// create a new array storing the given salaries with 2 decimals -> [1000.23, 5234.35, 721.97, 3452.50]

//const toFixed2 = salaries.map(x => Number(x.toFixed(2)));
//const toFixed2 = salaries.map(x => parseFloat(x.toFixed(2)));
const toFixed2 = salaries.map(x => Number.parseFloat(x.toFixed(2)));

console.log(toFixed2);