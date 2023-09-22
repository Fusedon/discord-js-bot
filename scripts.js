// Fetching bot commands and functions from the server
fetch('/botCommands')
  .then(response => response.json())
  .then(data => {
    window.botCommands = data;
    displayCommands();
  });

fetch('/botFunctions')
  .then(response => response.json())
  .then(data => {
    window.botFunctions = data;
    displayFunctions();
  });

// Function to display bot commands
function displayCommands() {
  const commandList = document.getElementById('commandList');
  botCommands.forEach(command => {
    const listItem = document.createElement('li');
    listItem.textContent = `${command.name}: ${command.description}`;
    commandList.appendChild(listItem);
  });
}

// Function to display bot functions
function displayFunctions() {
  const functionList = document.getElementById('functionList');
  botFunctions.forEach(func => {
    const listItem = document.createElement('li');
    listItem.textContent = `${func.name}: ${func.description}`;
    functionList.appendChild(listItem);
  });
}

// Function to load images
function loadImages() {
  const logo = document.getElementById('logo');
  logo.src = 'images/logo.png';

  const background = document.getElementById('background');
  background.style.backgroundImage = 'url(images/background.jpg)';
}

// Load images on page load
window.onload = loadImages;