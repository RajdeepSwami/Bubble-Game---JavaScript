var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble(){
    var clutter = "";
    
    for(var i = 1; i<185; i++){
        var randomNumber = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNumber}</div>`
    }
    
    document.querySelector(".pannel-bottom").innerHTML = clutter;
}

function runTimer(){
    var TimerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timeVal").textContent = timer;
        }
        else{
            clearInterval(TimerInt)
        }
    }, 1000)
}

function getNewScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}
document.querySelector(".pannel-bottom")
.addEventListener("click", function(details){
    var clicked = Number(details.target.textContent);

    if(clicked == hitrn){
        getNewScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();