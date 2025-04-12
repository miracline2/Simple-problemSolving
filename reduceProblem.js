//Reduce

const nums = [1, 2, 3, 4, 5, 6];
// ➤ Use reduce() to get the sum of only even numbers

const filter = nums.filter(n=>n%2===0);
const total = filter.reduce((acc,cuu) => acc + cuu)
console.log(total);


const num = [14, 67, 3, 89, 45];
// ➤ Use reduce() to find the largest number

const max = num.reduce((acc,cuu)=>{
    return acc>cuu ? acc : cuu
},num[0])

console.log(max);

const words = ["code", "react", "code", "js", "react", "code"];
// ➤ Use reduce() to count how many times each word appears

const numOfCount = words.reduce((acc, index)=>{
    acc[index] = (acc[index] || 0)+1
    return acc
},{})
console.log(numOfCount);
