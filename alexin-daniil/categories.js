const gameplayCatBtnEl = document.querySelector('#gameplay');
const signalsCatBtnEl = document.querySelector('#signals');
const eventsCatBtnEl = document.querySelector('#events');
const otherCatBtnEl = document.querySelector('#other');
const catTipTxtEl = document.querySelector('.cat-tip-txt');
const textWindowEl = document.querySelector('.text-window');
const gameplayCat = [
    ['under construction.html', './images/mannequin.jpg', 'Геймплей', '08.01.2024']
];
const signalsCat = [
    ['the end is near.html', './images/redScull.jpg', 'the end is near', '04.01.2024'],
    ['under construction.html', './images/virusBrick.jpg', 'virus', '04.01.2024']
];

const eventsCat = [
    ['under construction.html', './images/mannequin.jpg', 'Mannequins', '06.01.2024']
];
const otherCat = [
    ['under construction.html', './images/mannequin.jpg', 'Команды в терминале', '08.01.2024']
];

function createGameplayList(){ textWindowEl.innerHTML = '';
    gameplayCat.forEach((gameplayList) => {
    textWindowEl.innerHTML += `<a href="${gameplayList[0]}" class="cat-btn">
    <img src="${gameplayList[1]}" class="cat-image" alt="the_end_is_near">
    <span class="cat-info" id="out-border"><span class="cat-info"><h4 class="main-cat-info"> ${gameplayList[2]} </h4><h4 class="main-cat-info"> ${gameplayList[3]} </h4></span></span>
</a>`
})};

function createSignalsList(){ textWindowEl.innerHTML = '';
    signalsCat.forEach((signalList) => {
    textWindowEl.innerHTML += `<a href="${signalList[0]}" class="cat-btn">
    <img src="${signalList[1]}" class="cat-image" alt="the_end_is_near">
    <span class="cat-info" id="out-border"><span class="cat-info"><h4 class="main-cat-info"> ${signalList[2]} </h4><h4 class="main-cat-info"> ${signalList[3]} </h4></span></span>
</a>`
})};

function createEventsList(){ textWindowEl.innerHTML = '';
    eventsCat.forEach((eventList) => {
    textWindowEl.innerHTML += `<a href="${eventList[0]}" class="cat-btn">
    <img src="${eventList[1]}" class="cat-image" alt="the_end_is_near">
    <span class="cat-info" id="out-border"><span class="cat-info"><h4 class="main-cat-info"> ${eventList[2]} </h4><h4 class="main-cat-info"> ${eventList[3]} </h4></span></span>
</a>`
})};

function createOtherList(){ textWindowEl.innerHTML = '';
    otherCat.forEach((otherList) => {
    textWindowEl.innerHTML += `<a href="${otherList[0]}" class="cat-btn">
    <img src="${otherList[1]}" class="cat-image" alt="the_end_is_near">
    <span class="cat-info" id="out-border"><span class="cat-info"><h4 class="main-cat-info"> ${otherList[2]} </h4><h4 class="main-cat-info"> ${otherList[3]} </h4></span></span>
</a>`
})};

gameplayCatBtnEl.addEventListener('click', createGameplayList);
signalsCatBtnEl.addEventListener('click', createSignalsList);
eventsCatBtnEl.addEventListener('click', createEventsList);
otherCatBtnEl.addEventListener('click', createOtherList);

gameplayCatBtnEl.addEventListener('mouseover', () => {catTipTxtEl.innerHTML = 'Геймплей <br> <br> Здесь будет рассказываться про основой геймплей игры и его фишки или стратегии.'});
signalsCatBtnEl.addEventListener('mouseover', () => {catTipTxtEl.innerHTML = 'Сигналы <br> <br> Тут будут собранны самые интересные и странные сигналы из игры.'});
eventsCatBtnEl.addEventListener('mouseover', () => {catTipTxtEl.innerHTML = 'События <br> <br> Тут будут собранны различные события, которые могут происходить в игре.'});
otherCatBtnEl.addEventListener('mouseover', () => {catTipTxtEl.innerHTML = 'Не определённая категория <br> <br> Здесь будут различные факты о игре, к примеру происхождение того или иного в игре, а также теории.'});