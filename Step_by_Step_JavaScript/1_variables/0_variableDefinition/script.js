// var variable:   function scope
// let variable:   block scope (if, function, ....)
// const variable: block Scope
{
  // main scope like a house
  {
    // inner scope like a room
  }
}

// Declare variables using var, let, and const
// var className = "1: Software Engineering"
// let studentName = "1: Affan Haq"
// const roomNumber = "1: B202"

// // Initial output
// console.log (className)
// console.log (studentName)
// console.log (roomNumber)

// // Try changing values
// className = "2: web development"
// studentName = "2: Alli Efferson"
// //roomNumber = "2: B303"
// console.log (className)
// console.log (studentName)


// Demonstrating block scope with let and const
if (true) {
  var className = "3: data Science"
  let studentName = "3: david Efferson"
  console.log (className)
  console.log (studentName)
}

console.log (className)
console.log (studentName)
console.log (roomNumber)







