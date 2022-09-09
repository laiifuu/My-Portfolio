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

// Code related to the projects section:

class Project {
  constructor(id, name, description, img, technologies, demoLink, srcLink) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.img = img;
    this.technologies = technologies;
    this.demoLink = demoLink;
    this.srcLink = srcLink;
  }

  get getId() {
    return this.id;
  }

  get getName() {
    return this.name;
  }

  get getDescription() {
    return this.description;
  }

  get getImg() {
    return this.img;
  }

  get getTechnologies() {
    return this.technologies;
  }

  get getDemoLink() {
    return this.DemoLink;
  }

  get getSrcLink() {
    return this.srcLink;
  }
}

// a function that generates an array of number n of Project objects
function createProjectsList(info, n) {
  const projectsList = [];
  for (let i = 0; i < n; i += 1) {
    projectsList.push(
      new Project(i, info[0], info[1], info[2], info[3], info[4]),
    );
  }
  return projectsList;
}

// a function to append an array of project cards to the works section
function appendProjects(projectsList) {
  const projectsSection = document.querySelector('#projects');

  const sectionTitle = document.createElement('h1');
  sectionTitle.append(document.createTextNode('My Recent Works'));

  const indicator = document.createElement('div');
  indicator.classList.add('indicator');

  projectsSection.append(sectionTitle, indicator);
  projectsSection.append(...projectsList);
}

// a function that creates a popup window when clicking on see project
function createPopup(obj) {
  const projectCard = document.createElement('article');
  projectCard.classList.add('project-card');
  projectCard.classList.add('flex-container');
  projectCard.classList.add('popup');
  projectCard.id = 'popup';

  const exitButton = document.createElement('button');
  const exitButtonWhite = document.createElement('button');
  const exit = document.createElement('img');
  const exitWhite = document.createElement('img');
  exit.src = 'images/exit-menu.svg';
  exitButton.classList.add('exit-button');
  exitButton.append(exit);
  exitButton.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.remove();
  });

  exitWhite.src = 'images/cancel-white.svg';
  exitButtonWhite.classList.add('exit-button-white');
  exitButtonWhite.append(exitWhite);
  exitButtonWhite.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.remove();
  });

  projectCard.append(exitButton);
  projectCard.append(exitButtonWhite);
  const imgPlaceholder = document.createElement('div');
  imgPlaceholder.classList.add('image-placeholder');

  const picture = document.createElement('picture');
  const source = document.createElement('source');
  source.media = '(min-width: 768px)';
  source.srcset = 'images/project-illustration-desktop.png';
  picture.append(source);

  const projectIllustration = document.createElement('img');
  projectIllustration.src = 'images/project-illustration-mobile.jpg';

  picture.append(projectIllustration);

  window.addEventListener('resize', () => {
    const query = window.matchMedia('(min-width: 768px)');
    if (query.matches) {
      projectIllustration.src = 'images/project-illustration-dsektop.png';
    } else {
      projectIllustration.src = 'images/project-illustration-mobile.jpg';
    }
  });

  imgPlaceholder.appendChild(picture);
  projectCard.append(imgPlaceholder);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardInfo.classList.add('flex-container');
  cardInfo.classList.add('justify-content-start');

  const cardTitle = document.createElement('h2');
  cardTitle.append(document.createTextNode(obj.getName));
  cardInfo.append(cardTitle);

  const buttons = document.createElement('div');
  buttons.classList.add('buttons-div');
  buttons.classList.add('flex-container');

  const b1 = document.createElement('button');
  b1.append(document.createTextNode('See Live'));
  const demoImg = document.createElement('img');
  demoImg.src = 'images/go-to-white.svg';
  demoImg.classList.add('button-icon');
  b1.append(demoImg);
  b1.classList.add('call-to-action');
  b1.classList.add('flex-container');
  b1.classList.add('popup-button');

  const b2 = document.createElement('button');
  b2.append(document.createTextNode('See source'));
  const srcImg = document.createElement('img');
  srcImg.src = 'images/github-white.svg';
  srcImg.classList.add('button-icon');
  b2.append(srcImg);
  b2.classList.add('call-to-action');
  b2.classList.add('flex-container');
  b2.classList.add('popup-button');

  buttons.append(b1, b2);
  cardInfo.append(buttons);

  const categories = document.createElement('ul');
  categories.classList.add('categories');
  categories.classList.add('flex-container');
  categories.classList.add('justify-content-start');

  obj.getTechnologies.forEach((technology) => {
    const techItem = document.createElement('li');
    techItem.append(document.createTextNode(technology));
    techItem.classList.add('category');
    categories.append(techItem);
  });

  cardInfo.append(categories);

  const description = document.createElement('p');
  description.append(document.createTextNode(obj.getDescription));

  cardInfo.append(description);

  projectCard.append(imgPlaceholder, cardInfo);

  return projectCard;
}

// a function that create a project card
function createProjectCard(obj) {
  const projectCard = document.createElement('article');
  projectCard.classList.add('project-card');
  projectCard.classList.add('flex-container');
  projectCard.classList.add('box-shadow');
  projectCard.setAttribute('data-project-id', obj.getId);

  const imgPlaceholder = document.createElement('div');
  imgPlaceholder.classList.add('image-placeholder');
  imgPlaceholder.classList.add('border-radius-8');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardInfo.classList.add('flex-container');

  const projectIllustration = document.createElement('img');
  projectIllustration.src = 'images/project-illustration-mobile.jpg';
  projectIllustration.classList.add('border-radius-8');
  imgPlaceholder.appendChild(projectIllustration);

  const cardTitle = document.createElement('h2');
  cardTitle.append(document.createTextNode(obj.getName));

  const categories = document.createElement('ul');
  categories.classList.add('categories');
  categories.classList.add('flex-container');

  obj.getTechnologies.forEach((technology) => {
    const techItem = document.createElement('li');
    techItem.append(document.createTextNode(technology));
    techItem.classList.add('category');
    categories.append(techItem);
  });

  const button = document.createElement('button');
  button.classList.add('call-to-action');
  button.id = 'see-project';
  button.type = 'submit';
  button.append(document.createTextNode('See Project'));

  button.addEventListener('click', () => {
    const pop = createPopup(obj);
    const b = document.querySelector('body');
    b.append(pop);
  });
  cardInfo.append(cardTitle, categories, button);

  projectCard.append(imgPlaceholder, cardInfo);

  return projectCard;
}

// Executing everything:

// create an array of 6 Project objects
const array = createProjectsList(
  [
    'Multi-Post Stories Gain+Glory',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    'url',
    ['Ruby on Rails', 'html', 'css', 'JavaScript'],
    'https://laiifuu.github.io/My-Portfolio/',
    'https://github.com/laiifuu/My-Portfolio',
  ],
  6,
);

// create the list of project cards:
const projectCards = [];
array.forEach((obj) => {
  const card = createProjectCard(obj);
  projectCards.push(card);
});

// append the projects to the section:
appendProjects(projectCards);

const form = document.querySelector("form");
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const username = document.querySelector("#fullname");
const msg = document.querySelector("#message");
const userInfo = {};

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.innerHTML = '';
    email.classList.add('red-border');
    const msg = document.createTextNode(
      'Your email should be in all lowercase*',
    );
    error.append(msg);
  } else {
    email.classList.remove('red-border');
    error.innerHTML = '';
  }
});

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











