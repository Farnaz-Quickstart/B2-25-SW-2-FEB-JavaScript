// An arrow function in JavaScript is a more concise way of writing functions.
// It can take parameters (optional, depending on the task).
// Arrow functions use the => syntax. Instead of using the traditional function keyword, you use => to define the function.

let greetingAll = () => {
  console.log ("Welcome to Our Class")
  document.getElementById ("result").textContent = "Welcome to Our Class"
}

let greetingsOne = (studentName) => {
  console.log (`Welcome to Our Class: ${studentName}`)
}

let addition = (num1, num2) => {
  return num1 + num2
}
