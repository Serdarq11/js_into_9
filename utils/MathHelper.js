function generateRandomNumber(a, b) {
    let max = Math.max(a, b);    
    let min = Math.min(a, b);    
    let random = Math.floor(Math.random() * (max - min + 1)) + min ;
    return random;
}

// Exporting your reusable methods
module.exports.generateRandomNumber = generateRandomNumber;