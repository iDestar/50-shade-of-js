const COLORS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const backgroundContainer = document.querySelector('.bg-chosen');

function getRandomNumber() {
  return Math.floor(Math.random() * COLORS.length);
}

function getRandomColor() {
  let currentColor = '#';
  for (let i = 0; i <= 5; i++) {
    currentColor += COLORS[getRandomNumber()];
  }
  return currentColor;
}

btn.addEventListener('click', function () {
  const newColor = getRandomColor();
  backgroundContainer.style.backgroundColor = newColor;
  color.textContent = newColor;
});
