
function canShift(s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
  }
  
  console.log(canShift("abcde", "cdeab")); // true
  
  
  
  var restoreString = function(s, indices) {
   let arr = [];
  for (let i=0; i<=s.length;i++){
    arr[indices[i]] = s[i]
  }
  return arr.join('')
  };
   console.log(restoreString('codeleet',[4,5,6,7,0,2,1,3]))
  
   const a = 'miracline9'
   let words = a.match(/[a-zA-z]+/g)
   let letter = a.match(/\d+/g)
   console.log(words.join(''))
   console.log(Number(letter.join('')))
  
   function isSame(s){
  
    let words = s.match(/[a-zA-z]+/g).join('')
    let number = s.match(/\d+/g)
    if(words.length === Number(number)) return 1
    else return 0
   }
   console.log(isSame('miracline9'))
  
   function areAnagrams(s1, s2) {
    // code here
    const word1 = s1.toLowerCase();
    const word2 = s2.toLowerCase();
    if(word1.split('').sort().join('') === word2.split('').sort().join('')) return true
    else return false
    
  }
  console.log(areAnagrams('geeks','kseeg'))