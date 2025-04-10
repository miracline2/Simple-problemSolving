//🧩 Challenge 1: Hidden Password Revealer
let hiddenPassword = "###Miracline###";
console.log(`Your password is:${hiddenPassword.replaceAll('#','')}`)

//✂️ Challenge 2: Middle Letter Finder (Level 2)

let name = 'Miracline';
if(name.length%2===0){
    let mid = Math.floor(name.length/2 - 1)
    let mid1 = Math.floor(name.length/2);
    console.log(name[mid]+name[mid1])

}else{
   let midLetter = Math.floor(name.length/2)
   console.log(name[midLetter])
}

//🔁 Challenge 3: Smart Word Checker

let sentence = "JavaScript is a very interesting language!";
if(sentence.includes("interesting")){
    console.log(sentence.replace('interesting','powerful'))
}else{
    console.log("Nothing to change.")
}


//💻 Challenge 1: Reverse Word Order
let input = "I love JavaScript";
console.log(input.split(' ').reverse().join(' '))

//💡 Challenge 2: Character Frequency Counter

let inputStr = "JavaScript is awesome!";
let count = 0; // Start count from 0
for(char of inputStr){
    if(char === 'a'){
        count++
    }
}
console.log(count)


//💥 Challenge 3: Remove Duplicates

let Input = "programming"
let removeDuplicate = [...new Set(Input)];
let output = removeDuplicate.join('')
console.log(output)



//🧩 Problem 1: Palindrome Checker'
let str = "madam"
let reverseStr = str.split('').reverse().join('');
if(str === reverseStr){
console.log('palindrome')
}else{
    console.log('Not a Palindrome')
}

//💡 Problem 2: Vowel Counter

let strInput = 'hello'
let vow = 'a,e,i,o,u'
let counts = 0

for(i of strInput){
    for(j of vow){
        if(i === j){
            counts ++
        }
    }
}
console.log(counts)

//💥 Problem 3: Remove Extra Spaces

let string = ' Hello    World ';
let removeExtraSpace = string.trim().replace(/\s+/g,'');

console.log(removeExtraSpace)

//Problem: Reverse Words in a String

let Inputs = "Hello World from JavaScript"
console.log(Inputs.split(' ').reverse().join(' '))