const students = [
    [
        ['Ameer', 'Ali','Hicran'],
        ['Emre', 'Abdullah','Tania', 'Mustafa'],
        ['Marta', 'Niko','Mykola']
    ], 
    [
        ['Jane', 'Alex','John'],
        ['Maria', 'Max', ['Ali', 'James']]
    ]
];

console.log(students);
console.log(students.flat().flat().length);
// console.log(students.flat(2));
// console.log(students.flat(infinity))     -> just maaking sure that you want to turn all the nested arrays into one single array

console.log(students.flat().length);    // 5
console.log(students.flat(2).length);   // 16
console.log(students.flat(3).length);   // 17
