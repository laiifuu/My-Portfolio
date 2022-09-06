const button = document.getElementById("burger-menu");
const menu = document.querySelector("#nav_list");
const menuLinks = [...menu.children];
const img = button.querySelector("img");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  if (img.getAttribute("toggled") === "false") {
    img.src = "images/exit-menu.svg";
    img.setAttribute("toggled", "true");
  } else {
    img.src = "images/burger-menu.png";
    img.setAttribute("toggled", "false");
  }
  menu.classList.toggle("toggled-menu");
  menuLinks.forEach((item) => {
    item.classList.toggle("nav-link");
  });
  body.classList.toggle("overflow");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("toggled-menu");
    img.setAttribute("src", "images/burger-menu.png");
    console.log(img);
    img.setAttribute("toggled", "false");
    menuLinks.forEach((link) => {
      link.classList.remove("nav-link");
    });
    body.classList.remove("overflow");
  });
});
