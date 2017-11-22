var img1;
var holder;
var i=0;
$(".Pipe").click(function() {
	if (!(($(this).parent().attr("id")) == "edge")) {
	if (img1 == null)
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
	$(".Holder").attr("src", img1)
}
});
