function numberToText(num) {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num >= 1 && num <= 9) {
        return ones[num];
    } else if (num >= 11 && num <= 19) {
        return teens[num - 10];
    } else if (num >= 20 && num <= 99) {
        const tensDigit = Math.floor(num / 10);
        const onesDigit = num % 10;
        return tens[tensDigit] + (onesDigit !== 0 ? "-" + ones[onesDigit] : "");
    }

    return "Zero";
}

function kupoFunction(random_numbers_as_text) {
    let numberStringMap = ([
        ['Ninety', 90],
        ['Eighty', 80],
        ['Seventy', 70],
        ['Sixty', 60],
        ['Fifty',50],
        ['Forty',40],
        ['Thirty',30],
        ['Twenty',20],
        ['Nineteen', 19],
        ['Eighteen', 18],
        ['Seventeen', 17],
        ['Sixteen', 16],
        ['Fifteen', 15],
        ['Fourteen', 14],
        ['Thirteen', 13],
        ['Twelve', 12],
        ['Eleven', 11],
        ['Ten', 10],
        ['Nine', 9],
        ['Eight', 8],
        ['Seven', 7],
        ['Six', 6],
        ['Five', 5],
        ['Four', 4],
        ['Three', 3],
        ['Two', 2],
        ['One', 1],
        ['Zero', 0]
    ]);
    let numberArray= [];
    for (i=0;i<random_numbers_as_text.length;i++) {
        let currentString = random_numbers_as_text[i]
        let currentNumber = 0;
        if (!currentString) {
            numberArray.push('')
        }
        else {
            for (j=0;j<numberStringMap.length;j++ && !currentString) {
                if (currentString.includes(numberStringMap[j][0])) {
                    currentString = currentString.replace(numberStringMap[j][0],"")
                    currentNumber += numberStringMap[j][1]
                }
            }
            numberArray.push(currentNumber)
        }   
    }
    numberArray.sort((a, b) => a - b);
    let sortedArray = [];
    for (a=0;a<numberArray.length;a++) {
        sortedArray.push(numberToText(numberArray[a]))
    }
    return sortedArray;
}

const random_numbers_as_text = [];
for (let i = 0; i < 155; i++) { 
    const num = Math.floor(Math.random() * 99) + 1;
    const textNum = numberToText(num);
    random_numbers_as_text.push(textNum);
}
console.log(random_numbers_as_text);
console.log(kupoFunction(random_numbers_as_text));