let btn = document.getElementById("burger");
let menu = document.getElementById("menu");


btn.addEventListener("click",openMenu);
function openMenu(){
    menu.classList.toggle("opened");
    btn.classList.toggle("close");
}