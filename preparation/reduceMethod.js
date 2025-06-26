//SelfReminder

//I should Stop Expecting things from people;

const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let freq = arr.reduce((acc,curr) =>
    acc === curr ? curr : acc
)
console.log(freq)

function mostFrequent(arr) {
    let freq = arr.reduce((acc,curr) =>
        acc === curr ? curr : acc
    )
    return freq
  }
  console.log('Most Frequency is',mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple','sweet']))


  ///Problem: Group Items by Category


  function groupByCategory(arr) {
   return arr.reduce((acc, curr) =>{
      const category = curr.category;
      const name = curr.name;
  
      if(!acc[category]) {
        acc [category] = []
      }
      
     acc[category].push(name);
     return acc

    },{})

  }

const result = groupByCategory([
  { name: 'Shampoo', category: 'Beauty' },
  { name: 'Rice', category: 'Grocery' },
  { name: 'Face Wash', category: 'Beauty' },
  { name: 'Bread', category: 'Grocery' },
  { name: 'T-Shirt', category: 'Clothing' },
]);

console.log(result);

// 

//Miracline ➝ { i: 2, a: 1, e: 1 }

let strVariable = 'Miracline';
let ar = strVariable.split('');
 vowCOunt = ar.reduce((acc,curr,i)=>{
  let vowels = ['a','e','i','o','u']
  if(vowels.includes(curr.toLowerCase())){
 
    
  if(!acc[curr]){
    acc[curr] = 1
  }else{
    acc[curr] ++
  }

  }
  return acc
},{})

console.log(vowCOunt)

// PRACTICE CHALLENGE 1: Count Letters in a Word
const word = 'butterfly';

let splWord = word.split('');
let wordCount = splWord.reduce((acc,curr)=>{
  if(!acc[curr]){
    acc[curr] = 1
  }else{
    acc[curr] ++
  }
  return acc

},{})
console.log(wordCount)

//Count the fruits using reduce 😍

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let fruitCount = fruits.reduce((fruit,curr)=>{
if(!fruit[curr]){
  fruit[curr] = 1
}else{
  fruit[curr]++
}
return fruit
},{})
console.log('fruitCount',fruitCount);


//🧠 Bonus Challenge

const animals = [
  { name: 'Cat', type: 'Pet' },
  { name: 'Dog', type: 'Pet' },
  { name: 'Cow', type: 'Farm' },
  { name: 'Goat', type: 'Farm' },
  { name: 'Parrot', type: 'Pet' },
];

const groupByTypes = animals.reduce((acc,curr)=>{
  let name = curr.name;
  let types = curr.type;
  if(!acc[types]){
    acc[types] = []
  }
  acc[types].push(name);
  return acc
},{})

console.log('groupByTypes',groupByTypes);

