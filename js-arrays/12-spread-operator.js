const names = ['Alex', 'James', 'John'];

const numbers = [10, 25, 35, -5];

// 10, 25, 35, -5
// gratest = 35
// smallest = -5

let max = Math.max(...numbers);
let min = Math.min(...numbers);
// if I write just numbers instead of ...numbers it gives me NaN as array is not a number.

console.log(max);   // 35
console.log(min);   // -5

const nums = [5, 6, 7, 8, 9, 10, 11];
const nums1_15 = [1, 2, 3, 4, ...nums, 12, 13, 14, 15];

console.log(nums1_15);

const studentsBatch9Group1 = ['Alex', 'Max', 'Rabe'];
const studentsBatch9Group2 = ['James', 'Ameer', 'Niko'];

const allStudents = [...studentsBatch9Group1, ...studentsBatch9Group2];

console.log(allStudents);