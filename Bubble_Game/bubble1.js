var timer = 20;
var score = 0
var n = 0;
const myBtn= document.getElementById("#btn")
function getScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent=score;
}

function getnewHit(){
    n = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=n
}
function actionBtn(){
    getnewHit();
    makeBubble();
    timer=20;
    runTimer();
    score=0;
    getScore();
}

function makeBubble(){
    var clutter =""
    for(var i=1; i<=189;i++){
        var rn= Math.floor(Math.random()*10)
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#outer-div").innerHTML=clutter
}
function runTimer(){
    var t =setInterval(function() {
        if (timer>0) {
            timer --;
            document.querySelector("#timerVal").textContent= timer;    
        }
        else {
            clearInterval(t)
            document.querySelector("#outer-div").innerHTML=`<div id="in"><h2 >Game Over Score =${score}</h2>
            <div id="btn"><button type="button">Restart</button></div></div>`;
            document.querySelector("#btn").addEventListener("click",actionBtn);
        }
    },1000);
}
document.querySelector("#outer-div").addEventListener("click",function(dets){
    var clicknum = Number(dets.target.textContent);
    if(clicknum === n){
        getScore();
        getnewHit();
        makeBubble();
    }

})

getnewHit();
runTimer();
makeBubble();