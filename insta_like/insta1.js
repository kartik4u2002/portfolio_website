var con = document.querySelector("#container");
var sym = document.querySelector("i");
con.addEventListener("dblclick",function() { 
    sym.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(function () {
        sym.style.transform = 'translate(-50%,-50%) scale(0)';
    },1500);
})