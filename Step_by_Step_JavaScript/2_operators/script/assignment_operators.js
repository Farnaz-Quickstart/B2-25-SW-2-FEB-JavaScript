// Arethmetic Operators

let number1 = 12
let number2 = 2
let result 

// result = number1 + number2  // Addition
// result = number1 - number2  // Subtraction
// result = number1 * number2  // Multipication
// result = number1 / number2  // Division
// result = number1 % number2  // Modules or remainder of devision


// number1 = number1 + 1
// number1 +=1

// number1 = number1 - 1
// number1 -=1

// number1 = number1 * 2
// number1 *=2

// number1 = number1 / 2
// number1 /=2



// You have a jar with 12 candies.
// You say: “Let me write down how many candies are in the jar, then I’ll add one more candy.”
console.log (result)
result = number1++          // Post-Increment 
// result = number1++  
// result = number1
// number1 = number1 + 1
console.log (result)
console.log (number1)



function calculate () {
      const number1 = Number(document.getElementById("num1").value);
      const number2 = Number(document.getElementById("num2").value);
      const operation = document.getElementById("operation").value;
      let result;

      switch (operation) {
        case "add":
          result = number1 + number2;
          break;
        case "subtract":
          result = number1 - number2;
          break;
        case "multiply":
          result = number1 * number2;
          break;
        case "divide":
          result = number1 / number2 
          break;
        default:
          result = "Invalid operation";
      }

      document.getElementById("result").textContent = result;
}