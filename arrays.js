// Array Basics

let colors = ["red", "green", "blue"];
console.log(colors[1]);
 colors.push('purple');
console.log(colors);
colors[1] = "yellow"; // replacing "green" with "yellow"
console.log(colors);


//Fibnosis series---------
function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  console.log(fibonacciSeries(5)); // prints first 10 Fibonacci numbers

  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); // 120
  
  

   function reverseString (s) {
   return s.reverse()
  
};
console.log(reverseString(["h","e","l","l","o"]))


