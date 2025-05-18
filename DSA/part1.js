// var array=['dsm','pinky','simp','kamal','vish']

// function totalStudents(allStudents, studentNames){
//     for(let i=1;i<=allStudents.length;i++){

//         if(allStudents[i]===studentNames){
//             console.log('true')
//         }
//     }
// }
// totalStudents(array,'vish')


class customNewArray {
    constructor() {
        this.data = {};
        this.length = 0
    }

    push(item) {
        this.data[this.length] = item
        this.length++
    }

    pop() {
        const removeLastIndex = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return removeLastIndex
    };
    get(index) {
        return this.data[index];
    };
    shift() {
        const removeFirstIndex = this.data[0];
        for (let i = 0; i < 0; i++) {
            this.data[i] = this.data[i + 1];

        }
        delete this.data[this.length - 1];
        this.length--;
        return removeFirstIndex
    };

    deleteByIndex(index) {
        const removingIndex = delete this.data[index];

        for (let i = index; i < this.length-1; i++) {
            console.log('---', i);

            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];

        this.length--;
        return removingIndex
    }
}

const newArr = new customNewArray;
newData = newArr.push('apple');
newData = newArr.push('bat');
newData = newArr.push('cook');
getData = newArr.get(0);
console.log('getData', getData);
// console.log('shift', newArr.shift());
console.log('deleteByIndex', newArr.deleteByIndex(0));

console.log(newArr);

//JS Method
const str = 'hello';
let arr=[]
console.log(str.split('').reverse().join(''));


function isPalindrome(str){
    const revStr = str.split('').reverse().join('');
    if(str === revStr){
        console.log('true');
        
    }else{
        console.log('false');
        
    }

}
isPalindrome('hello');

function integerReversed (n){
let st = String(n)
reverse = st.split('').reverse().join('')
return parseInt(reverse)*Math.sign(n)
}
console.log(integerReversed(-61234));

