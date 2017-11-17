var pipeArray;

pipeArray

$("img").click(function() {
	if (pipeToSwap == null)
		pipeToSwap = $(this);
	else {
		$(this) = pipeToSwap;
		pipeToSwap = null;
	}
});
