const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers=[];
const oddNumbers=[];
const evenOdd=(number)=>{


console.log('The numbers are ' + numbers);
for(let i=0;i<numbers.length;i++){
    evenOdd(numbers[i]);
    }
console.log('The even numbers are ' + evenNumbers);
console.log('The odd numbers are ' + oddNumbers);
