//👧 Group students by their first letter

const students = ['Anu', 'Abi', 'Bala', 'Banu', 'Catherine'];

const grpStud = students.reduce((acc, curr) => {
  const firstLetter = curr[0];

  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }

  acc[firstLetter].push(curr);

  return acc;
}, {});

console.log(grpStud);



//CHALLENGE: Count word frequency in a sentence

const sentence = 'I love code and I love learning code and code is fun';

let sentArray = sentence.split(' ')
console.log(sentArray);

 const countSTr = sentArray.reduce((acc,curr)=>{
    if(!acc[curr]){
        acc[curr] = 1
    }else{
        acc[curr] ++
    }
    return acc
},{})
console.log('countSTr',countSTr)