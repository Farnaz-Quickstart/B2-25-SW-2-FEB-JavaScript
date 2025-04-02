function showGreeting() {
  const name = document.getElementById('nameInput').value;
  if (name) {
      document.getElementById('greeting').textContent = `Hello, ${name}! Welcome to JavaScript.`;
  } else {
      document.getElementById('greeting').textContent = "Please enter your name!";
  }
}

function changeBackground() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}