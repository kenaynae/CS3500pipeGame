var pipeCount = 36,
    pipeArray = new Array(),
    i,
    j,
    k,
    exitCount = 24,
    entrance,
    exit,
    pipe;

entrance = (Math.floor(Math.random() * exitCount) + 1);
do {
    exit = (Math.floor(Math.random() * exitCount) + 1);
} while (entrance === exit);

for (i = 0; i <= Math.sqrt(pipeCount) + 1; i++) {
    if (i === 0 || i === Math.sqrt(pipeCount) + 1) {
        pipeArray[i] = new Array();
        for (j = 0; j <= Math.sqrt(pipeCount) + 1; j++) {
		    if ((entrance === j || exit === j) && i === 0 && j !== 7) {
                pipeArray[i][j] = ["images/ExitUp.png", 2, null];
            } else if (((entrance - 18) === j || (exit - 18) === j) && i === Math.sqrt(pipeCount) + 1 && j !== 0) {
                pipeArray[i][j] = ["images/ExitDown.png", 0, null];
            } else {
                pipeArray[i][j] = ["images/Blank.png", null, null];
            }
        }
    } else {
        pipeArray[i] = new Array();
	    for (j = 0; j <= Math.sqrt(pipeCount) + 1; j++) {
            if (j === 0  && (((i * 2) + 5) === entrance || ((i * 2) + 5) === exit)) {
                pipeArray[i][j] = ["images/ExitLeft.png", 1, null];
            } else if (j === Math.sqrt(pipeCount) + 1  && (((i * 2) + 6) === entrance || ((i * 2) + 6) === exit)) {
                pipeArray[i][j] = ["images/ExitRight.png", 3, null];
            } else if (j === 0 || j === Math.sqrt(pipeCount) + 1) {
                pipeArray[i][j] = ["images/Blank.png", null, null];
            } else {
                pipe = (Math.floor(Math.random() * 6) + 1);
                if (pipe === 1) {
                    pipeArray[i][j] = ["images/Pipe" + pipe + ".png", 1, 3];
                } else if (pipe === 2) {
                    pipeArray[i][j] = ["images/Pipe" + pipe + ".png", 0, 2];
                } else if (pipe === 3) {
                    pipeArray[i][j] = ["images/Pipe" + pipe + ".png", 1, 2];
                } else if (pipe === 4) {
                    pipeArray[i][j] = ["images/Pipe" + pipe + ".png", 2, 3];
                } else if (pipe === 5) {
                    pipeArray[i][j] = ["images/Pipe" + pipe + ".png", 0, 3];
                } else {
                    pipeArray[i][j] = ["images/Pipe" + pipe + ".png", 0, 1];
                }
            }
	    }
    }
	
}
pipeArray.push(new Array());

function writePipes() {
    "use strict";
	for (i = 0; i <= Math.sqrt(pipeCount) + 1; i++) {
		if (i === 0 || i === Math.sqrt(pipeCount) + 1) {
            document.write("<tr id='edge'>");
        } else {
            document.write("<tr>");
        }
        for (j = 0; j <= Math.sqrt(pipeCount) + 1; j++) {
		    if (j === 0 || i === 0 || j === Math.sqrt(pipeCount) + 1 || i === Math.sqrt(pipeCount) + 1) {
                document.write("<td id='edge'><img src=");
			    document.write(pipeArray[i][j][0]);
			    document.write(' class="Pipe"></td>');
            } else {
        	    document.write("<td><img src=");
			    document.write(pipeArray[i][j][0]);
			    document.write(' class="Pipe"></td>');
		    }
        }
        document.write("</tr>");
    }
}
