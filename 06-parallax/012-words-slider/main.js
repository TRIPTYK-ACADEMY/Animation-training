
const wslide= document.querySelector("#wslide");
const words = document.querySelectorAll("#wslide li");
(function parse(){
    for(let i=0, j= words.length;i<j;i++){    
        let count=j-i;
        words[i].classList.add("word"+count);
        setInterval(function(){
            words[i].classList.remove("word"+count);
            if(count>1){
                count--;
            }else{
                count=3;
            }
            words[i].classList.add("word"+count);
        },2000);
    }
})();
