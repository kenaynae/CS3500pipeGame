<?php
	$numPipes = 36;
	for ($i = 0; $i < sqrt($numPipes); $i++) {
		echo '<tr>';
			for ($j = 0; $j < sqrt($numPipes); $j++) {
				echo '<td><img src="images/Pipe'.rand(1,6).'.png" class="Pipe"></td>';
			}
		echo '</tr>';
	}
?>
