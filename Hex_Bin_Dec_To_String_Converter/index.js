// binary to string
const string = "072 101 108 108 111 044 032 119 111 114 108 100 033"
const stringType = "Decimal";
const cleanMap = new Map([
    ['Binary',  /[^01]/g],
    ['Hexadecimal', /[^0-9A-Fa-f]/g],
    ['Decimal', /[^0-9]/g]
  ]);
const lengthMap = new Map([
    ['Binary', /.{1,8}/g],
    ['Hexadecimal', /.{2}/g],
    ['Decimal', /.{3}/g]
]);
const conversionMap = new Map([
    ['Binary', 2],
    ['Hexadecimal', 16],
    ['Decimal', 10]
]);
let encodedLetterArray = [];

function converter(string, stringType) {
    let cleanedString = string.replace(cleanMap.get(stringType),"").match(lengthMap.get(stringType));
    let letterArray = [];
    for (let i=0;i<cleanedString.length;i++) {
        letterArray.push(String.fromCharCode(parseInt(cleanedString[i],conversionMap.get(stringType))))
    }
    return letterArray.join('')
}


console.log(converter(string, stringType));