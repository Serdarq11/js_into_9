function isDigit(char) {
    let charAscii = char.charCodeAt(0);

    return 48 <= charAscii && charAscii <= 57;
}


function isSpace(char) {
    let charAscii = char.charCodeAt(0);

    return charAscii === 32;
}


function isUpperCase(char) {
    let charAscii = char.charCodeAt(0);

    return 65 <= charAscii && charAscii <= 97;
}


function isLowerCase(char) {
    let charAscii = char.charCodeAt(0);

    return 97 <= charAscii && charAscii <= 122;
}


function isLetter(char) {
    return isUpperCase(char) || isLowerCase(char);
}


function isLetterOrDigit(char) {
    return isDigit(char) || isLetter(char);
}


function isSpecial(char) {
    return !isLetterOrDigit(char) && !isSpace(char);
}


function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
}

// Enhanced object literals
const CharacterHelper = {
    isDigit,
    isLetter,
    isLetterOrDigit,
    isLowerCase,
    isUpperCase,
    isSpace,
    isSpecial,
    isVowel,
};

module.exports.CharacterHelper = CharacterHelper;
