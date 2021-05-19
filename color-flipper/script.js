const COLORS = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const backgroundContainer = document.querySelector('.bg-chosen');

function getRandomNumber() {
  return Math.floor(Math.random() * COLORS.length);
}
btn.addEventListener('click', function () {
  const radomNumber = getRandomNumber();
  backgroundContainer.style.backgroundColor = COLORS[radomNumber];
  color.textContent = COLORS[radomNumber];
});
