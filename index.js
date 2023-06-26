// select elements on click'
const closeButton = document.getElementById('closeBtn');
const backProjectBtn = document.getElementById('backProject');
const openModal = document.getElementById('openModal');
const bodyChange = document.querySelector('body').style.backgroundColor = "opacity-15";

//close
closeButton.addEventListener('click', () => {
  openModal.classList.add('hidden');
});

// open
backProjectBtn.addEventListener('click', function () {
  openModal.classList.remove('hidden');
  bodyChange;
})