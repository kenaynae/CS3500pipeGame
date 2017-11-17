window.addEventListener("load", function(){
 update();  
});
function resetting(){
location.reload();
}

let start=0;


function update(end = 0){
    time = 2000000;
    const deltaTime = end - start;
    tl= (time-deltaTime)/1000;
    timeLeft=tl.toFixed(1);
    if(time-deltaTime<0){
        resetting();
    }
    document.getElementById("timer").innerHTML="you have " + (timeLeft) + " secs left";
    
    requestAnimationFrame(update);
}