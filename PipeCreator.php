<?php
	class pipe {
		public $seed;
		public $istop;
		public $isbottom;
		public $isleft;
		public $isright;

		function __construct($seedVal) {
			$this->seed = $seedVal;
		}

		function display() {
			echo '<td><img src="images/Pipe'.$this->seed.'.png" class="Pipe"></td>';
		}
	}

	class topRightPipe extends pipe {
		function __construct() {
			parent::__construct(6);
			$this->istop = 1;
			$this->isbottom = 0;
			$this->isright = 1;
			$this->isleft = 0;
		}
	}

	class topLeftPipe extends pipe {
		function __construct() {
			parent::__construct(5);
			$this->istop = 1;
			$this->isbottom = 0;
			$this->isright = 0;
			$this->isleft = 1;
		}
	}

	class botRightPipe extends pipe {
		function __construct() {
			parent::__construct(3);
			$this->istop = 0;
			$this->isbottom = 1;
			$this->isright = 1;
			$this->isleft = 0;
		}
	}

	class botLeftPipe extends pipe {
		function __construct() {
			parent::__construct(4);
			$this->istop = 0;
			$this->isbottom = 1;
			$this->isright = 0;
			$this->isleft = 1;
		}
	}

	class verticalPipe extends pipe {
		function __construct() {
			parent::__construct(2);
			$this->istop = 1;
			$this->isbottom = 1;
			$this->isright = 0;
			$this->isleft = 0;
		}
	}

	class horizontalPipe extends pipe {
		function __construct() {
			parent::__construct(1);
			$this->istop = 0;
			$this->isbottom = 0;
			$this->isright = 1;
			$this->isleft = 1;
		}
	}

	$pipeArray = array();
	$numPipes = 36;
	for ($i = 0; $i < sqrt($numPipes); $i++) {
		$pipeArray[] = array();
		echo '<tr>';
			for ($j = 0; $j < sqrt($numPipes); $j++) {
				$randVal = rand(1,6);
				switch($randVal) {
					case 1:
						$pipeArray[$i][$j] = new horizontalPipe();
						$pipeArray[$i][$j]->display();
						break;
					case 2:
						$pipeArray[$i][$j] = new verticalPipe();
						$pipeArray[$i][$j]->display();
						break;
					case 3:
						$pipeArray[$i][$j] = new botRightPipe();
						$pipeArray[$i][$j]->display();
						break;
					case 4:
						$pipeArray[$i][$j] = new botLeftPipe();
						$pipeArray[$i][$j]->display();
						break;
					case 5:
						$pipeArray[$i][$j] = new topLeftPipe();
						$pipeArray[$i][$j]->display();
						break;
					case 6:
						$pipeArray[$i][$j] = new topRightPipe();
						$pipeArray[$i][$j]->display();
						break;
				}
			}
		echo '</tr>';
	}
?>
