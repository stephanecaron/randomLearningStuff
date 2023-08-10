function generateRandomArray(length) {
    const uniqueNumbers = new Set();
    
    while (uniqueNumbers.size < length) {
      const randomNumber = Math.floor(Math.random() * 1000000); // You can adjust the range as needed
      uniqueNumbers.add(randomNumber);
    }
    
    return Array.from(uniqueNumbers);
}


function QuickSort(Arr){
    if(Arr.length < 2) return Arr;
  
    const pivot = Arr[0];
    const leftArr = [];
    const rightArr = [];
  
    for(let i = 1; i < Arr.length; i++){
      if(Arr[i] < pivot){
        leftArr.push(Arr[i]);
      }
      else{
        rightArr.push(Arr[i])
      }
    }
  
    return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
  }

function sorter(randomSortedArray) {
    let left = 0;
    let right = randomSortedArray.length-1;
    while (left < right) {
        let minNumIndex = left;
        let maxNumIndex = right;
        for (let j = left + 1 ;j <= right; j++) {
            if (randomSortedArray[minNumIndex] > randomSortedArray[j]) minNumIndex = j;
            if (randomSortedArray[maxNumIndex] < randomSortedArray[j]) maxNumIndex = j; 
        }
        [randomSortedArray[left],randomSortedArray[minNumIndex]] = [randomSortedArray[minNumIndex],randomSortedArray[left]];
        [randomSortedArray[right],randomSortedArray[maxNumIndex]] = [randomSortedArray[maxNumIndex],randomSortedArray[right]];
        if (maxNumIndex === left) {
            maxNumIndex = minNumIndex;
        }
        left ++
        right --
        //console.log(randomSortedArray)
    }
}

let randomSortedArray = generateRandomArray(300000);


const randomSortedArrayCopy = [...randomSortedArray];
let startTime = performance.now();
console.log(randomSortedArrayCopy.sort((a,b) => a-b));
let endTime = performance.now();
let runtime = endTime - startTime;
console.log(`JS Sort Runtime: ${runtime} milliseconds`)

//QuicksortAlgo
//console.log(randomSortedArray);
const randomSortedArrayCopy2 = [...randomSortedArray];
startTime = performance.now();
const Arr = randomSortedArrayCopy2;
console.log(QuickSort(Arr));
endTime = performance.now();
runtime = endTime - startTime;
console.log(`QuickSortAlgo Runtime: ${runtime} milliseconds`);


//canadooAlgo
startTime = performance.now();
sorter(randomSortedArray);
endTime = performance.now();
runtime = endTime - startTime;
console.log(`CanadooAlgo Runtime: ${runtime} milliseconds`);
//console.log(randomSortedArray);