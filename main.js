const button = document.getElementById("burger-menu"); 
const menu = document.querySelector("#nav_list");

console.log("button: ", button); 
console.log("menu: ", menu);

for (let item of menu.childNodes){
    if (item.nodeName.toLowerCase() == "li"){
        console.log(item);
    }
}

button.addEventListener('click', (event) => {
    const img = button.querySelector("img");
    console.log(img);
    console.log(img.getAttribute("toggled"));
    if (img.getAttribute("toggled") == "false"){
        img.src = "images/exit-menu.svg";
        img.setAttribute("toggled", "true");
    }
    else {
        img.src = "images/burger-menu.png";
        img.setAttribute("toggled", "false");

    }
    menu.classList.toggle("toggled-menu");
    for (let item of menu.children){
        item.classList.toggle("nav-link");
    }

});