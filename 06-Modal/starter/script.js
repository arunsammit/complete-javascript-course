'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalFunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const showModals = document.querySelectorAll('.show-modal');
for (let index = 0; index < showModals.length; index++) {
  showModals[index].addEventListener('click', openModalFunc)
}
const closeModalFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
const closeModalButton = document.querySelector('.close-modal');
closeModalButton.addEventListener('click', closeModalFunc);

const closeModalIfOpenFunc = function () {
  if (!modal.classList.contains('hidden')) {
    closeModalFunc();
  }
}
overlay.addEventListener('click', closeModalFunc);
const body = document.querySelector('body');
body.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    closeModalIfOpenFunc();
  }
})
