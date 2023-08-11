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

randomArray.sort(((a,b) => b - a))
let topKElements=[];
for (i=0;i<k;i++) {
    topKElements.push(randomArray[i])
}

console.log(topKElements)