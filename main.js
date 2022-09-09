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

window.addEventListener('resize', () => {
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
}, true);

const form = document.querySelector("form");
const email = document.querySelector("#email");
const error = document.querySelector(".error");
const username = document.querySelector("#fullname");
const msg = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  if (email.value != email.value.toLowerCase()) {
    e.preventDefault();
    error.innerHTML = "";
    email.classList.add("red-border");
    const msg = document.createTextNode(
      "Your email should be in all lowercase*"
    );
    error.append(msg);
  } else {
    email.classList.remove("red-border");
    error.innerHTML = "";
  }
});

