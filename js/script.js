/////////////////////плавный скрол///////////////////////////////
const linksHead = document.querySelectorAll('.nav__link');

linksHead.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const ID = event.target.getAttribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

/////////////////////раскрытие таблиц///////////////////////////////
const btnShowMore = document.querySelector('.tables__button');

btnShowMore.addEventListener('click', () => {
  const tablesList = document.querySelectorAll('.tables__item');
  tablesList.forEach((table) => {
    table.classList.remove('hidden');
  });
  btnShowMore.classList.add('hidden');
});

/////////////////////раскрытие списков///////////////////////////////
const listTitles = document.querySelectorAll('.prop__item');

listTitles.forEach((title) => {
  title.addEventListener('click', (event) => {
    let target = event.target;
    if (target.nodeName !== 'svg' && target.nodeName !== 'path') return;
    if (target.nodeName == 'path') target = target.parentNode;

    const list = title.querySelector('.prop__list');
    list.classList.toggle('hidden');
    target.style.transform = target.style.transform ? '' : 'rotate(180deg)';
  });
});

/////////////////////включение видео///////////////////////////////
const btnPlay = document.querySelector('.video__btn');
const video = document.querySelector('.video__object');

btnPlay.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  btnPlay.classList.add('hidden');
});

video.addEventListener('ended', () => {
  btnPlay.classList.remove('hidden');
  video.removeAttribute('controls', 'controls');
});

/////////////////////бургер-меню//////////////////////////////
const btnBurger = document.querySelector('.btn-menu');
const menu = document.querySelector('.nav__list');

btnBurger.addEventListener('click', MenuAction);

menu.addEventListener('click', (event) => {
  let target = event.target;
  if (target.nodeName !== 'A') return;
  setTimeout(MenuAction, 100);
});

function MenuAction() {
  menu.classList.toggle('nav__list--active');
  btnBurger.classList.toggle('btn-menu--active');
}
