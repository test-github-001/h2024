const navTopBtnEl = document.querySelector('#nav-top');
const navAboutGameBtnEl = document.querySelector('#nav-about-game');
const navCatBtnEl = document.querySelector('#nav-cat');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//и не спрашивайте, зачем мне функция рандома. я сам не знаю

navTopBtnEl.addEventListener('click',() => scrollTo({ top: 0, left: 0, behavior:'smooth' }));
navAboutGameBtnEl.addEventListener('click',() => scrollTo({ top: 730, left: 0, behavior:'smooth' }));
navCatBtnEl.addEventListener('click',() => scrollTo({ top: 1130, left: 0, behavior:'smooth' }));