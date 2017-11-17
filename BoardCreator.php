<?php
	$numPipes = 36;
    $numExits = 24;

    $entrance = rand(1,$numExits);
    do{
        $exit = rand(1, $numExits);
    }while($entrance != $exit)

	for ($i = 0; $i < sqrt($numPipes)+2; $i++) {
		echo '<tr>';
        if($i == 0 or $i == sqrt($numPipes)+1){
            for ($j = 0; $j < sqrt($numPipes)+2; $j++) {
                if($j == 0 or $j == sqrt($numPipes)+1){
                    echo '<td><img src="images/blank.png" class="Blank"></td>';
                }else{
                    if ($entrance == j or $exit == j){
                        echo '<td><img src="images/ExitUp.png" class="ExitUp"></td>';
                    }else if(($entrance-18) == j or ($exit-18) == j){
                        echo '<td><img src="images/ExitDown.png" class="Blank"></td>';
                    }else{
                        echo '<td><img src="images/blank.png" class="Blank"></td>';
                    }
                }
			}
        }else{
			for ($j = 0; $j < sqrt($numPipes)+2; $j++) {
				echo '<td><img src="images/Pipe'.rand(1,6).'.png" class="Pipe"></td>';
			}
        }
		echo '</tr>';
	}
?>