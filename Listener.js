var img1;
var holder;
$(".Pipe").click(function() {
	if (!(($(this).parent().attr("id")) == "edge")) {
	if (img1 == null)
		img1 = $(this).attr("src");
	else {
		holder = this.src;
		this.src = img1;
		img1 = holder;
	}
	$(".Holder").attr("src", img1)
}
});
