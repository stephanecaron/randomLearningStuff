const generateMockData = (length, charSet) => {
    let mockString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      mockString += charSet[randomIndex];
    }
    return mockString;
  };
  
  const mockStringLength = 5000000; // Length of the mock string
  const mockCharSet = 'abcdefghijklmnopqrstuvwxyz'; // Character set to choose from
  
  let mockString = generateMockData(mockStringLength, mockCharSet);
  console.log('Mock String:', mockString);
  

  function findLongestString(mockString) {
  let hashMap = new Map();
  let longuestAnswer=0;
  let startingLeftLonguest=0;
  for (let i=0;i<mockString.length;i++) {
      let left=i;
      let right=i;
      hashMap = new Map();
      hashMap.set(mockString[left])
      while (right<mockString.length-1) {
        right++
        if (hashMap.has(mockString[right])) {
            //console.log('found a duplicate ' + mockString[right] + ' at position ' + right)
            break;
        }
        hashMap.set(mockString[right])
    }
    if (longuestAnswer<hashMap.size) {
        longuestAnswer = hashMap.size
        startingLeftLonguest = left
    }

    }
    if (!longuestAnswer) longuestAnswer=mockString.length
    console.log(longuestAnswer)
    let longuestAnswerString = [];
    for (let i=0;i<longuestAnswer;i++) {
        longuestAnswerString.push(mockString[startingLeftLonguest+i])
    }
    console.log('The Longuest String Found started at ' + longuestAnswerString.join(''))
}
const startTime = performance.now();
findLongestString(mockString)
const endTime = performance.now();
console.log(Math.floor(endTime-startTime) + 'ms runtime')