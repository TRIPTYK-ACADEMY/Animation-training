monBouton = document.getElementById("scroll");

window.onscroll = function(){
    scrollFunction();
}
// losque tu vas scroller sur la windox tu vas activer la scrollfunction

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.
        scrollTop > 20){
            monBouton.style.display = "block"
        } else{
            monBouton.style.display = "none"
        }
}

function topFunction(){
    document.documentElement.scrollTop = 0;
}

