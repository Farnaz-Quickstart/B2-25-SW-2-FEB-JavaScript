// Anonymous Function Expression


function greetingQuickstart () {
  console.log ("Hi")
  console.log ("Welcome to our class")
  console.log ("My name is Roberto")
}

let greetingClass = function () {
  console.log ("Hi")
  console.log ("Welcome to our class")
  console.log ("My name is Tom")
}

function greetingStudent (studentName) {
  console.log (`Welcome to our class ${studentName}`)
  console.log ("my name is Roberto")
  console.log (`how old are you ${studentName}`)
  console.log ("This is quickstart")
  console.log (`${studentName} ! Your mentor is Usman `)
}

let greetingClassByStudent = function (studentName) { 
  console.log (`Welcome to our class ${studentName}`)
  console.log ("my name is Roberto")
  console.log (`how old are you ${studentName}`)
  console.log ("This is quickstart")
  console.log (`${studentName} ! Your mentor is Usman `)
}

//greetingStudent ("Tom")
greetingClassByStudent ("Joshua")