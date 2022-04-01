const $ = document.querySelector.bind(document);
const header = $("header");

let sticky = header.offsetTop;

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset>sticky){
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
})