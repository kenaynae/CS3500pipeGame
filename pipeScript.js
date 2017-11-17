var pipeCount = 36,
    pipeArray = new Array(),
    i,
    j,
    exitCount = 24,
    entrance,
    exit;

entrance = (Math.floor(Math.random() * exitCount) + 1);
do {
    exit = (Math.floor(Math.random() * exitCount) + 1);
} while (entrance == exit);

for (i = 0; i <= Math.sqrt(pipeCount) + 1; i++) {
    if (i == 0 || i == Math.sqrt(pipeCount) + 1) {
        pipeArray[i] = new Array();
        for (j = 0; j <= Math.sqrt(pipeCount) + 1; j++) {
		    if ((entrance == j || exit == j) && i == 0 
                && j != 7) {
                pipeArray[i][j] = "images/ExitUp.png";
            } else if (((entrance-18) == j || (exit-18) == j) 
                       && i == Math.sqrt(pipeCount) + 1 
                       && j != 0) {
                pipeArray[i][j] = "images/ExitDown.png";
            } else {
                pipeArray[i][j] = "images/Blank.png";
            }
        }
    } else {
        pipeArray[i] = new Array();
	    for (j = 0; j <= Math.sqrt(pipeCount) + 1; j++) {
            if (j == 0  && (((i * 2)+5) == entrance || ((i * 2)+5) == exit)) {
                pipeArray[i][j] = "images/ExitLeft.png";
            } else if (j == Math.sqrt(pipeCount) + 1 
                       && (((i * 2)+6) == entrance || ((i * 2)+6) == exit)) {
                pipeArray[i][j] = "images/ExitRight.png";
            }else if (j == 0 || j == Math.sqrt(pipeCount) + 1) {
                pipeArray[i][j] = "images/Blank.png";
            } else {
                pipeArray[i][j] = "images/Pipe" + (Math.floor(Math.random() * 6) + 1) + ".png";
            }
	    }
    }
	
}
pipeArray.push(new Array());

function writePipes() {
    "use strict";
	for (i = 0; i <= Math.sqrt(pipeCount) + 1; i++) {
		document.write("<tr>");
		for (j = 0; j <= Math.sqrt(pipeCount) + 1; j++) {
			document.write("<td><img src=");
			document.write(pipeArray[i][j]);
			document.write(' class="Pipe"></td>');
		}
		document.write("</tr>");
	}
}
