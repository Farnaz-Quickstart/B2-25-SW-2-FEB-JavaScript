// Function: Is a block of code designed to perform a particular task
// A JavaScript function is executed when "something" invokes or call it
// Reference: https://www.w3schools.com/js/js_functions.asp


function greetingQuickstart () {
  console.log ("Hi")
  console.log ("Welcome to our class")
  console.log ("My name is Roberto")
}

function greetingStudent (studentName) {
  console.log (`Welcome to our class ${studentName}`)
  console.log ("my name is Roberto")
  console.log (`how old are you ${studentName}`)
  console.log ("This is quickstart")
  console.log (`${studentName} ! Your mentor is Usman`)
}


function greetingAll () {
  console.log ("Welcome to Our Class")
  document.getElementById ("result").textContent = "Welcome to Our Class"
}

function greetingsOne (studentName) {
  console.log (`Welcome to Our Class: ${studentName}`)
  document.getElementById ("result").textContent = `Welcome to our class ${studentName} `
}

function addition(num1, num2) {
  return num1 + num2
}

function handleClick () {
  let number1 = Number(document.getElementById("number1").value)
  let number2 = Number(document.getElementById("number2").value)
  let result = number1 + number2
  document.getElementById ("result").textContent = result
  return addition (number1, number2)
}

greetingStudent("tom")
greetingStudent("Sebastian")

