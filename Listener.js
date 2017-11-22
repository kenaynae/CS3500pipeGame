	var img1;
	var holder;
	var i=0;
	var timeLeft;




window.addEventListener("load", function(){
 update();  
});
function resetting(){
//location.reload();
window.alert("You Lose");
document.getElementById("stopping").src="nooo";
//	$(".Pipe").click(function() {}); 


}

let start=0;


function update(end = 0){
    time = 20000;
    const deltaTime = end - start;
    tl= (time-deltaTime)/1000;
     timeLeft=tl.toFixed(1);
    if(time-deltaTime<0){
        resetting();
//		$(".Pipe").click(function() {}); 

    }
	else{
    document.getElementById("timer").innerHTML="you have " + (timeLeft) + " secs left";
    //moving(timeLeft);
    requestAnimationFrame(update);
}}



	console.log(timeLeft);
	if (timeLeft>0){
	$(".Pipe").click(function() {
	
	if (!(($(this).parent().attr("id")) == "edge")) {
	if (img1 === null)
		img1 = $(this).attr("src");
	else {
		i++;
		holder = this.src;
		this.src = img1;
		img1 = holder;
		//console.log(i);
		
		document.getElementById("Moves").innerHTML="Number of moves " +i;
		//moves.innerHTML(i).
	}
	$(".Holder").attr("src", img1);
}

});
	}
	else {	$(".Pipe").click(function() {});
	}
