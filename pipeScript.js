var pipeCount = 36;
var pipeArray = new Array();

pipeArray[0] = new Array();

for (var i = 1; i <= Math.sqrt(pipeCount); i ++) {
	pipeArray[i] = new Array();
	for (var j = 1; j <= Math.sqrt(pipeCount); j ++) {
		pipeArray[i][j] = "images/Pipe" + (Math.floor(Math.random() * 6) + 1) + ".png";
	}
}
pipeArray.push(new Array());

function writePipes() {
	for (var i = 1; i <= Math.sqrt(pipeCount); i ++) {
		document.write("<tr>");
		for (var j = 1; j <= Math.sqrt(pipeCount); j ++) {
			document.write("<td><img src=");
			document.write(pipeArray[i][j]);
			document.write(' class="Pipe"></td>');
		}
		document.write("</tr>");
	}
}
