// Sentence captialization;

let stri = 'hello world';
let spl = stri.toLowerCase();
let convArr = spl.split(' ');
let capWord = convArr.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
console.log('capWord',capWord);


const capitalizeWord = (str) => {
    return str.toLowerCase().split(" ")
    .map((word) => word[0].toUpperCase() + word.
    slice(1))
    .join(" ")
}

console.log(capitalizeWord('hello world'));


//Fizzz Buzz Challenge;

const fizzBuzz = (n) =>{
 
    for(let i=1;i<=n;i++){
        if(i%3 ==0 && i%5 ==0){
            console.log( 'FizzBuzz');
            
        }
        else if (i%3 == 0)  {
            console.log('Fizz')
        }
        else if (i%5 ==0) {
            console.log( 'Buzz')
        }
        
        else{
         console.log(i);
           
        }
    }
}
(fizzBuzz(5))

// Max Profit

const maxProfit = (price) =>{
    let minStock = price[0];
    let maxProfit = 0;

    for (let i=1; i<price.length;i++){
        const currentStock = price[i];
        //Min Stock;
         minStock = Math.min(minStock, currentStock);

        const possibleProfit = currentStock - minStock;

         maxProfit = Math.max(maxProfit, possibleProfit)
        console.log(maxProfit);
        

        
    }
    return maxProfit ;

}
const price = [7,1,5,3,6]
const profit = maxProfit(price);
console.log('MaxProfit', profit);

//Chunk Array---

const chunkArray = (array, size) => {
    let chunkedData = [];
    let index = 0;

    while(index < array.length-1){
        const chunk = array.slice(index, index+size);
        console.log(chunk);
        chunkedData.push(chunk)
        index += size
        
    }
    return chunkedData
}

console.log(chunkArray([1,2,3,4,5],3))


//Two Sums

// const sumOfTwoNums = (array, target) => {
//     const arr = [];
//     array.reduce((acc,cum,)=>{
//        const xy = acc+cum === target;
//        arr.push(xy)
//        return 
      
        
//     })
//     return arr
// }
// console.log(sumOfTwoNums([2,7,11,15],9))

const sumOfTwoNums = (array, target) => {
    const arr = [];
 
for(let i=0; i< array.length; i++){
  
    for(let j=i+1;j<array.length; j++){  
        sum = array[i]+array[j]
        if(sum === target){
            console.log(i,j)
            arr.push(i,j)
        }
    }  
}
    return arr
}
console.log(sumOfTwoNums([1,3,7,9,2],11))