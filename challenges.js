//7. Replace Spaces with "%20"

let input = 'Hello World';

console.log(input.replace(/\s+/g,'%20'))

//6. Remove All Occurrences of a Character

function removeOccurence(str, char){
    let uniqueLetter = ''
    for(i of str){
        if(i != char){
            uniqueLetter+=i
        }
    }
console.log(uniqueLetter)
}
removeOccurence('Hello World','l')

//5. Anagram Check

let word1 = 'listen';
let  word2 = 'silent';
if(word1.split('').sort().join('') === word2.split('').sort().join('')){
    console.log('true')
    
}else{
    console.log('false')
   
}

//4. Longest Substring Without Repeating Characters 

let substr = "abcabcbb";
let repChar = [...new Set(substr)];  //It is wrong Approach 
let output = repChar.join('');
console.log(output.length )

function longestUniqueSubstring(str) {
    let maxLen = 0;
    let start = 0;
    let seen = {};

    for (let end = 0; end < str.length; end++) {
        let char = str[end];
        if (seen[char] >= start) {
            start = seen[char] + 1;
        }
        seen[char] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}
console.log(longestUniqueSubstring("abcabcbb"));  // Output: 3


//3. Count Vowels and Consonants

let sentence =  "Hello World";
let removeSpace = sentence.replace(/\s+/g,'');
let vow = ['a','e','i','o','u'];
let Vowcount = 0;
let consoCount = 0;

for(i of removeSpace){
    if(vow.includes(i)){
        Vowcount++
    }else{
        consoCount++
    }
}
console.log('Vowels:',Vowcount);
console.log('Consonent:',consoCount);

//2. Find the First Non-Repeating Character

function nonRepeatingChar(str){
    
    for(i of str){
        if(str.indexOf(i)===str.lastIndexOf(i)){
           console.log(i)
break
        }

    }

}
nonRepeatingChar('swiss')

//1. Check for Palindrome

function checkPalindrome(str){
    let input = str.replace(/\s+/g,'')
    let refineInput = input.replaceAll(',','').toLowerCase()
    if(refineInput === refineInput.split('').reverse().join('')){
        console.log('true')
    }else{
        console.log('false')
    }
}
checkPalindrome("A man, a plan, a canal, Panama")