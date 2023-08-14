// binary to string
const string = "48656c6c6f2c2048657821"
const stringType = "Hexadecimal";
const cleanMap = new Map([
    ['Binary',  /[^01]/g],
    ['Hexadecimal', /[^0-9A-Fa-f]/g],
    ['Decimal', /[^0-9]/g]
  ]);
const lengthMap = new Map([
    ['Binary', /.{1,8}/g],
    ['Hexadecimal', /.{2}/g],
    ['Decimal', /.{1,1}/g]
]);
const conversionMap = new Map([
    ['Binary', 2],
    ['Hexadecimal', 16],
    ['Decimal', 10]
]);
let encodedLetterArray = [];

function cleanUpString(string, stringType) {
    let cleanedString = string.replace(cleanMap.get(stringType),"").match(lengthMap.get(stringType));
    let letterArray = [];
    for (let i=0;i<cleanedString.length;i++) {
        letterArray.push(String.fromCharCode(parseInt(cleanedString[i],conversionMap.get(stringType))))
    }
    return letterArray.join('')
}

function binaryToString(string) {
    let binaryLetterArray = binaryString.split(' ');
    let letterArray = [];
    for (let i=0;i<binaryLetterArray.length;i++) {
        let binaryNumber = parseInt(binaryLetterArray[i], 2);
        let convertedLetter = String.fromCharCode(binaryNumber);
        letterArray.push(convertedLetter);
    }
    return letterArray.join('');
}

console.log(cleanUpString(string, stringType));