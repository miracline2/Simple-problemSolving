//1. Problem: First and Last Letters

let word = "Sunflower";
console.log('First Character:', word[0]);
console.log('Last Character:', word.charAt(word.length-1))
console.log('length:',word.length)

//Challenge 2: Middle Magic
let name = "Vishnu";

if(name.length%2===0){
  let  mid= Math.floor(name.length/2-1)
  let  mid1= Math.floor(name.length/2)

    console.log('MIddle two Letter',name[mid]+name[mid1])

}else{
  let  middleLetter = Math.floor(name.length/2)
    console.log('MIddle Letter',name[middleLetter])

}

//Challenge: First Half and Second Half

let nam = "Miracline";

if(nam.length%2===0){

  let  FirstName= nam[0]+ nam[1]
  let  lastName= nam.slice(2)

    console.log('First Name',FirstName)
    console.log('Last Name',lastName)

}else{
   let firstName = nam.slice(0,4)
   let lastName = nam.slice(4)
    console.log('First Name',firstName)
    console.log('Last Name',lastName)
}

let names = "Miracline";

if(names.length % 2 === 0) {
    // Even length
    let firstStiches = Math.floor(names.length/2)

    let second =names.slice(0,names.length/2)
    

    console.log('swapped',names.slice(firstStiches)+second)
   
} else {
    // Odd length
    let firstStiches = Math.floor(names.length/2)
    let second =names.slice(0,names.length/2)
    

    console.log('swapped:',names.slice(firstStiches)+second)


}
