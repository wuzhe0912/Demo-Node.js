const upElement = document.querySelector('.cheveron__up');
const downElement = document.querySelector('.cheveron__down');
const numberElement = document.querySelector('.number');

upElement.addEventListener('click', () => {
  const currentNumber = Number(numberElement.textContent);
  numberElement.textContent = currentNumber + 1;
});

downElement.addEventListener('click', () => {
  const currentNumber = Number(numberElement.textContent);
  numberElement.textContent = currentNumber - 1;
});