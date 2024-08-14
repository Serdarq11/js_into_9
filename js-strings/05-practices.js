let p1 = 'Hello'.toUpperCase().concat(' World').includes('o World');

console.log(p1);    // false

let p2 = Math.pow(Math.abs(Math.max(5, 3) - Math.min(10, 5)), 3);

console.log(p2);    // 0

let p3 = 'Techglobal'.slice(3, 7).toUpperCase().includes('hG', 3);

console.log(p3);    // false

let p4 = 'JavaScript'.startsWith('Java').endsWith('Script');    // Error

let p5 = 'Apple'.replace('p', '$').indexOf('$$') >= 0;  // false

console.log(p5);