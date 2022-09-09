const button = document.getElementById('burger-menu');
const menu = document.querySelector('#nav_list');
const menuLinks = [...menu.children];
const img = button.querySelector('img');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  if (img.getAttribute('data-toggled') === 'false') {
    img.src = 'images/exit-menu.svg';
    img.setAttribute('data-toggled', 'true');
  } else {
    img.src = 'images/burger-menu.png';
    img.setAttribute('data-toggled', 'false');
  }
  menu.classList.toggle('toggled-menu');
  menuLinks.forEach((item) => {
    item.classList.toggle('nav-link');
  });
  body.classList.toggle('overflow');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('toggled-menu');
    img.setAttribute('src', 'images/burger-menu.png');
    img.setAttribute('data-toggled', 'false');
    menuLinks.forEach((link) => {
      link.classList.remove('nav-link');
    });
    body.classList.remove('overflow');
  });
});

window.addEventListener(
  'resize',
  () => {
    const query = window.matchMedia('(min-width: 430px)');
    if (query.matches) {
      img.setAttribute('data-toggled', 'false');
      img.src = 'images/burger-menu.png';
      menu.classList.remove('toggled-menu');
      menuLinks.forEach((link) => {
        link.classList.remove('nav-link');
      });
      body.classList.remove('overflow');
    }
  },
  true,
);

const email = document.querySelector('#email');
const username = document.querySelector('#fullname');
const msg = document.querySelector('#message');
const userInfo = {};

window.addEventListener('load', () => {
  localStorage.getItem('user_info');
  const userInfoDeserilized = JSON.parse(localStorage.getItem('user_info'));
  username.value = userInfoDeserilized.username;
  email.value = userInfoDeserilized.email;
  msg.value = userInfoDeserilized.message;
});

username.addEventListener('input', () => {
  userInfo.username = username.value;
  const serializedUserInfo = JSON.stringify(userInfo);
  localStorage.setItem('user_info', serializedUserInfo);
});

email.addEventListener('input', () => {
  userInfo.email = email.value;
  const serializedUserInfo = JSON.stringify(userInfo);
  localStorage.setItem('user_info', serializedUserInfo);
});

msg.addEventListener('input', () => {
  userInfo.message = msg.value;
  const serializedUserInfo = JSON.stringify(userInfo);
  localStorage.setItem('user_info', serializedUserInfo);
});
