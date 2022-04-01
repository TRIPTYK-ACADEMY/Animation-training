const $ = document.querySelector.bind(document)
const a = $("div a");

a.addEventListener("click", function (){
    a.style.width = "250px";
});
a.addEventListener("mouseout", function(){
    a.style.width = "70px"
});