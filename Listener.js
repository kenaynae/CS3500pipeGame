var holder = null;
$(".Pipe").click(function() {
	if (holder == null)
		holder = $(this);
	else {
		$(this) = holder;
		holder = null;
	}
});
