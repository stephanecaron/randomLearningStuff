// Generate a random array of numbers
const arrayLength = 20;
const minValue = 1;
const maxValue = 100;
const randomArray = Array.from({ length: arrayLength }, () =>
  Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
);

// Generate a random value for K
const minK = 1;
const maxK = arrayLength;
const k = Math.floor(Math.random() * (maxK - minK + 1)) + minK;

console.log("Random Array:", randomArray);
console.log("Random K:", k);

let highestNumbers = [];
let i=0;

while (i<k) {
    let highestNumberIndex = 0;
    for (j=0;j<randomArray.length;j++) {
        if (randomArray[highestNumberIndex]<randomArray[j]) highestNumberIndex = j;
    }
    console.log(randomArray[highestNumberIndex])
    highestNumbers.push(randomArray[highestNumberIndex])
    randomArray.splice(highestNumberIndex,1)
    i++
}
console.log(highestNumbers);