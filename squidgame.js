/* Face recognition from: https://nenadmarkus.com/p/picojs-intro/demo/ */

console.clear();
let distance = 0;
let isWatching = true;
let pos = { x: -1, y: -1 };
let prev_pos = { x: 0, y: 0 };
let distanceSinceWatching = 0;
const elDistance = document.querySelector('.distance .total');
const elStart = document.querySelector('.start');
const elHowTo = document.querySelector('.howto');
const elGame = document.querySelector('.game');
const elContainer = document.querySelector('.container');
const elTime = document.querySelector('.timer .time');
const elMovement = document.querySelector('.movement');
const elReplay1 = document.querySelector('.replay1');
const elReplay2 = document.querySelector('.replay2');
const elDead = document.querySelector('.dead');

// New variable to track if the game has been won
let gameWon = false;

// Function to show win message
function showWinMessage() {
  const winMessageDiv = document.querySelector('.win-message');
  winMessageDiv.style.display = 'block';

  const copyButton = document.querySelector('.copy-button');
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText('Iwonthegame').then(() => {
      alert('Code copied to clipboard!');
    });
  });
}

// Simulate game win condition (checking if distance >= 100)
function checkWinCondition() {
  if (distance >= 100 && !gameWon) {
    gameWon = true;
    showWinMessage();
  }
}

// Update distance (this will be your custom logic for player movement)
function updateDistance() {
  // For simulation, you can increment distance as per your game logic
  distance += 1; // Incrementing the distance for the simulation
  elDistance.textContent = `${String(distance).padStart(3, '0')}`; // Update the distance display
}

// Example of updating the game logic every second
setInterval(() => {
  updateDistance(); // Update the distance
  checkWinCondition(); // Check if the player has won
}, 1000); // Check every second if the player has won