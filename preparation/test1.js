const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
    { name: "David", age: 24 }
  ];
  const array = []

const loop = people.forEach((arr,i)=>{
   if(arr.age > 25){
    array.push(arr.name)
}

})
console.log(array)

const str = "Hello, how are you?"
const vow = ['a','e','i','o','u']
let count = 0;

const withoutSpaceStr = str.replaceAll(/\s+/g,'')
console.log(withoutSpaceStr);
for(i of withoutSpaceStr.toLowerCase()){   
    for(j of vow){
        if(i === j){
            count++
        }
    }

}
console.log(count)
