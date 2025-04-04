// Arethmetic Operators

let number1 = 12
let number2 = 2
let result

result = number1 + number2  // Addition
result = number1 - number2  // Subtraction
result = number1 * number2  // Multipication
result = number1 / number2  // Division
result = number1 % number2  // Modules or remainder of devision
result = number1++
result = number2++

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