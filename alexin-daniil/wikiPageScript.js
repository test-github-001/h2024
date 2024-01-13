const navTopBtnEl = document.querySelector('#nav-top');
const navAboutGameBtnEl = document.querySelector('#nav-main-info');
const navCatBtnEl = document.querySelector('#nav-cat');

navTopBtnEl.addEventListener('click',() => scrollTo({ top: 0, left: 0, behavior:'smooth' }));
navAboutGameBtnEl.addEventListener('click',() => scrollTo({ top: 750, left: 0, behavior:'smooth' }));
navCatBtnEl.addEventListener('click',() => scrollTo({ top: 1150, left: 0, behavior:'smooth' }));