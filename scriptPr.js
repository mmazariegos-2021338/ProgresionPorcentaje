const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');
const afterLoadText = document.querySelector('.after-load-text');

let progress = 0;
let interval = setInterval(updateBlur, 30);

function updateBlur() {
  progress++;

  if (progress > 99) {
    clearInterval(interval);
    showAfterLoadText();
  }

  loadingText.innerText = `${progress}%`;
  loadingText.style.opacity = map(progress, 0, 100, 1, 0);
  background.style.filter = `blur(${map(progress, 0, 100, 30, 0)}px)`;
}

function showAfterLoadText() {
  afterLoadText.style.opacity = 1;
  setTimeout(() => {
    afterLoadText.style.opacity = 0;
  }, 45000);
}

function map(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

