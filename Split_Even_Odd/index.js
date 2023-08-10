const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,28,389,28293,293];
const evenNumbers=[];
const oddNumbers=[];
const evenOdd=(number)=>{
  if(number%2===0){
    evenNumbers.push(number);
  }else{
    oddNumbers.push(number);
  }
}

console.log('The numbers are ' + numbers);
for(let i=0;i<numbers.length;i++){
    evenOdd(numbers[i]);
    }
console.log('The even numbers are ' + evenNumbers);
console.log('The odd numbers are ' + oddNumbers);