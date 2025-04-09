
//String Problems


//FizzBuzz

const fizzBuzz =(n) => {
    let fizzCount=0;
    let buzzCount = 0;
    let fizzBuzzCount =0;
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log('FizzBuzz');
            fizzBuzzCount++
        }
       else if(i%3==0){
            console.log('Fizz')
            fizzCount++
        }else if(i%5==0){
            console.log('Buzz')
            buzzCount++
        } 
        else{
            console.log(i)
        }
    }
    console.log(`fizz:${fizzCount}, buzz:${buzzCount}, fizzbuzz:${fizzBuzzCount}`)

}
fizzBuzz(15)

//Find the Most Frequent Character

function mostFrequentChar(str) {
    let freq = {}; 
    let maxChar = ''; 
    let maxCount = 0;

    
    for (let char of str) {
        if (char !== ' ') { 
            freq[char] = (freq[char] || 0) + 1;
            console.log('freq',freq[char])
        }
    }

    
    for (let char in freq) {
        if (freq[char] > maxCount) {
            maxChar = char;
            maxCount = freq[char];
        }
    }

    return maxChar;
}

console.log(mostFrequentChar("javascript is amazing")); // Output: "a"



//Get the last character of any string
let str = "malayalam";
count =0
let strB = str.split('').reverse().join('')
lastChar = str.charAt(str.length-1)
console.log(lastChar)

//Reverse the string

console.log('revse',str.split('').reverse().join(''))


//Capitalize
console.log(str.charAt(0).toUpperCase()+str.slice(1))

//Reverse or Palidromde

if(str === strB){
    console.log('It is Pallindrom')
}else{
    console.log('It is Not a Palindrome')
}

//counting,
for (char of str.toLowerCase()){
    if(char === 'a'){
        count++
    }   
}

console.log(`'a' appears ${count} times`);


const sumOFnum = (s) =>{
    let str = '';
    let lastNumber = parseInt(s.charAt(s.length-1))
    console.log('====================================');
    console.log(lastNumber);
    console.log('====================================');
    for(let i=1; i<=s.length-1; i++){
        str+= i
    }
    let totalNumber = str.length;
    if(totalNumber === lastNumber){
         console.log('1')
    }else{
        console.log('0')
    }
}
sumOFnum('greek20')


// function   isSame(s) {
        
//     let value = s.split('').reduce((acc,curr) => {
//         if(isNaN(Number(curr))){
//             acc.strlen += acc.strlen
//         }else{
//             acc.value = acc.value.concat(curr)
//         }
//         return acc;
//     },
//     {strlen : 0, value:''}
//     )
//     console.log('value',value.value)
    
//     if(value.value === Number(value.value)) console.log('1');
//     else return console.log('0')
// }
// isSame('geek4')

