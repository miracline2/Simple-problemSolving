class node{
    constructor (value){
        this.data = value;
        this.next = null
    }
}

class singlyLinkedList{
    constructor (value){
        this.head = new node(value);
        this.tail = this.head;
        this.length = 1
    }

    push(value){
        let newNode = new node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
    }

    printPushFn(){
        let currNode = this.head;
        let str = ''
        for(let i = currNode.data; i<= currNode.data; i++){
            if(!str[currNode.data]){
                             str += currNode.data + '->';

            }
             currNode = currNode.next

        }
    //     while(currNode){

           
            
    //         if(currNode.data% 2 === 0){
    //             str += currNode.data + '->';
    //         }
    //         currNode = currNode.next
    //     }
        str += 'null';
        console.log(str)
    }
}

const mylinkedList = new singlyLinkedList(5);          //5, 12, 7, 20, 3, 8
mylinkedList.push(10)
mylinkedList.push(3)
mylinkedList.push(15)
mylinkedList.push(20)
mylinkedList.push(5)

mylinkedList.printPushFn()
console.log('----',mylinkedList);




let array = [5,4,3,2,1,0,6,5]

let subArr = ''
array.reduce((acc,curr)=>{
    if(acc != curr){
         subArr += curr;
    }
    
    return acc
})
console.log('Reducesub',subArr)


array.forEach((num) => {
  if (!subArr.includes(num)) {
    subArr += num;
  }
});

console.log('ForEachsub', subArr);


for(let i = array; i<=array.length;i++){
    if(!subArr.includes(num)){
   subArr += num;

    }

}
console.log('ForLoopsub', subArr);
