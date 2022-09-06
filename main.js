const button = document.getElementById('burger-menu');
const menu = document.querySelector('#nav_list');

button.addEventListener('click', () => {
  const img = button.querySelector('img');
  if (img.getAttribute('toggled') === 'false') {
    img.src = 'images/exit-menu.svg';
    img.setAttribute('toggled', 'true');
  } else {
    img.src = 'images/burger-menu.png';
    img.setAttribute('toggled', 'false');
  }
  menu.classList.toggle('toggled-menu');
  const array = [...menu.children];
  array.forEach((item) => {
    item.classList.toggle('nav-link');
  });
});