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
        ``
    }
    return acc
},{})
console.log('countSTr',countSTr)


const sumOfArray = (arr,target) => {



for(i=0;i<=arr.length;i++){
  console.log('i',i)
  for(j=i+1;j<=arr.length;j++){
    console.log('j',j)
    if(arr[i]+arr[j]===target){
      console.log('hhh',[i,j]);
      
      return [i,j]
    }
  }
}

}
sumOfArray([1,3,7,9,2],11)


//LinkedList

class Node {
  constructor (value){
    this.value = value;
    this.next = null
  }
}


class LinkedList{
  constructor (value){
     this.head = new Node(value);
    this.tail = this.head
    this.length = 1
  
  }

  push (value){   // Push Method----
    
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }else{
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.length++
  }

  printNode(){
    let currNode = this.head;
    console.log('currNode',currNode);
    
    let str = '';
    while(currNode){
      str += currNode.value + '->'
      currNode = currNode.next 
    }
     str += 'null';
    console.log(str);
  }

pop(){

  if(!this.head){
    return undefined
  } else if( this.length === 0){
return null
  }
let  temp = this.head;
let  prev = this.head;


while(temp.next){
  prev = temp
  temp = prev.next
  console.log('element',temp)
}

 this.tail = prev;
 this.tail.next = null

 this.length --;

 return temp
}

}

const mylinkedList = new LinkedList(10);
 mylinkedList.push(20);
 mylinkedList.push(30);
 mylinkedList.push(40);
 mylinkedList.push(50);
 mylinkedList.pop();

//  mylinkedList.printNode();

console.log(mylinkedList);

//push---
