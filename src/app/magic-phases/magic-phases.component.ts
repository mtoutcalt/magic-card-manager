import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-magic-phases',
  templateUrl: './magic-phases.component.html',
  styleUrls: ['./magic-phases.component.css']
})
export class MagicPhasesComponent implements OnInit {

  @ViewChild('mycanvas')
  canvasRef: ElementRef;

  constructor() { }

  //this component has the most code - it has an audio player and buttons to help navigate different canvas drawings
  //the canvas drawings show how to play the game
  ngOnInit() {

      var audioplayer = <HTMLAudioElement> document.getElementById('audioplayer');
      audioplayer.volume = 0.1;

      let context: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
      var idTimer1, idTimer2, idTimer3, idTimer4, idTimer5;

    	var canvasWidth = this.canvasRef.nativeElement.width;
    	var canvasHeight = this.canvasRef.nativeElement.height;
    	var textHeight = 100;
    	var cardWidth = 50;
    	var cardHeight = 75;
    	var textFontBold = "18px fantasy";
    	var textFont = "bold 12px Arial";

    	context.save();
    	context.font = "36px fantasy";
    	context.shadowColor = 'white';
    	context.shadowOffsetX = 10;
    	context.shadowOffsetY = 10;
    	context.shadowBlur = 20;
    	context.fillText("HOW TO PLAY MAGIC", canvasWidth/2 - 150, canvasHeight/2); //x,y
    	context.font = "25px fantasy";
    	context.fillText("The Phases of Play", canvasWidth/2 - 150, canvasHeight/2 + 50); //x,y
    	context.restore();

    //buttons
    	var step1But = <HTMLInputElement> document.getElementById('step1');
    	var step2But = <HTMLInputElement> document.getElementById('step2');
    	var step3But = <HTMLInputElement> document.getElementById('step3');
    	var step4But = <HTMLInputElement> document.getElementById('step4');
    	var step5But = <HTMLInputElement> document.getElementById('step5');
    	var playBut = <HTMLInputElement> document.getElementById('play');
    	var stopBut = <HTMLInputElement> document.getElementById('stop');

    //event handlers - each button corresponds to a different canvas drawing for each phase of the game
    	step1But.addEventListener('click', function(e) {
    		drawPhase1();
    		step1But.className = "btn btn-primary";
    		step2But.className = "btn btn-info";
    		step3But.className = "btn btn-info";
    		step4But.className = "btn btn-info";
    		step5But.className = "btn btn-info";
    	});

    	step2But.addEventListener('click', function(e) {
    		drawPhase2();
    		step1But.className = "btn btn-info";
    		step2But.className = "btn btn-primary";
    		step3But.className = "btn btn-info";
    		step4But.className = "btn btn-info";
    		step5But.className = "btn btn-info";
    	});

    	step3But.addEventListener('click', function(e) {
    		drawPhase3();
    		step1But.className = "btn btn-info";
    		step2But.className = "btn btn-info";
    		step3But.className = "btn btn-primary";
    		step4But.className = "btn btn-info";
    		step5But.className = "btn btn-info";
    	});

    	step4But.addEventListener('click', function(e) {
    		drawPhase4();
    		step1But.className = "btn btn-info";
    		step2But.className = "btn btn-info";
    		step3But.className = "btn btn-info";
    		step4But.className = "btn btn-primary";
    		step5But.className = "btn btn-info";
    	});

    	step5But.addEventListener('click', function(e) {
    		drawPhase5();
    		step1But.className = "btn btn-info";
    		step2But.className = "btn btn-info";
    		step3But.className = "btn btn-info";
    		step4But.className = "btn btn-info";
    		step5But.className = "btn btn-primary";
    	});

    	playBut.addEventListener('click', function(e) {
    		playSteps();
    		step1But.className = "btn btn-info";
    		step2But.className = "btn btn-info";
    		step3But.className = "btn btn-info";
    		step4But.className = "btn btn-info";
    		step5But.className = "btn btn-info";
    	});

    	stopBut.addEventListener('click', function(e) {
    		stopPlaying();
    	});

      //these phases follow the same process
      //clear the canvas, draw the images that are in every drawing, save the context, then draw the shapes and text
      //then restore after drawing
      function drawPhase1() {
    		clearCanvas();
    		drawUnchangedImages();
    		context.save();

    		context.fillStyle = 'black';
    		context.font = textFont;

    		//draw the top library card into hand
    		context.fillStyle = 'Maroon';
    		context.fillRect(20 + cardWidth + 5 , canvasHeight - textHeight - 300, cardWidth, cardHeight); //x,y,w,h
    		context.fillStyle = 'black';
    		context.fillText("Drawn and added to Hand", 20 + 5 + cardWidth + 5, canvasHeight - textHeight - 300 + cardHeight + 10); //x,y

    		//draw lands
    		context.strokeRect(canvasWidth/2 - cardWidth, canvasHeight - textHeight - 300, cardWidth, cardHeight); //x,y,w,h
    		context.stroke();
    		context.fillText("Land", canvasWidth/2 - cardWidth + 5, canvasHeight - textHeight - 300 + 15); //x,y

    		//draw text
    		context.font = textFontBold;
    		context.shadowColor = 'white';
    		context.shadowOffsetX = 10;
    		context.shadowOffsetY = 10;
    		context.shadowBlur = 20;
    		context.fillText("Beginning Phase",50, canvasHeight - textHeight); //x,y
    		context.fillText("Step 1 - Untap Step - Turn all your tapped cards upright again",50, canvasHeight - textHeight + 20); //x,y
    		context.fillText("Step 2 - Upkeep Step",50, canvasHeight - textHeight + 40); //x,y
    		context.fillText("Draw Step - Draw a card from your library (deck)",50, canvasHeight - textHeight + 60); //x,y

    		//draw phase name
    		context.fillText("Phase 1",canvasWidth - 100, 20); //x,y

    		context.restore();
    }

    function drawPhase2() {
  		clearCanvas();
  		drawUnchangedImages();
  		context.save();

  		context.fillStyle = 'black';
  		context.font = textFont;
  		context.lineWidth = 3;

  		//draw tapped land
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(225,-500, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.restore();
  		context.fillText("Tapped Land", canvasWidth/2 - cardWidth - 25, canvasHeight - textHeight - 300 + 50); //x,y

  		//draw played land
  		context.fillStyle = 'Maroon';
  		context.fillRect(canvasWidth/2 - cardWidth + cardWidth + 2, canvasHeight - textHeight - 300, cardWidth, cardHeight); //x,y,w,h
  		context.fillStyle = 'black';
  		context.fillText("New Land", canvasWidth/2 - cardWidth + 5 + cardWidth + 2, canvasHeight - textHeight - 300 + 10 + cardHeight+10); //x,y

  		//draw spells
  		context.fillStyle = 'BlueViolet';
  		context.fillRect(canvasWidth - cardWidth - 20, canvasHeight - textHeight - 300 , cardWidth, cardHeight); //x,y,w,h
  		context.fillStyle = 'black';
  		context.fillText("Play Spell", canvasWidth - cardWidth - 20 + 5, canvasHeight - textHeight - 300 + 10 + cardHeight + 10); //x,y
  		var image = new Image(60, 45);
  		image.src = '../assets/lightning-icon.png';
  		image.onload = function() {
  			context.drawImage(image, canvasWidth - cardWidth - 20, canvasHeight - textHeight - 300, image.width, image.height);
  		};

  		//draw creature played
  		context.strokeRect(canvasWidth/2 - cardWidth, canvasHeight - textHeight - 400, cardWidth, cardHeight); //x,y,w,h
  		context.fillStyle = 'black';
  		context.fillText("Creature", canvasWidth/2 - cardWidth + 5 + cardWidth, canvasHeight - textHeight - 400 + 10); //x,y

  		//draw text
  		context.font = textFontBold;
  		context.shadowColor = 'white';
  		context.shadowOffsetX = 10;
  		context.shadowOffsetY = 10;
  		context.shadowBlur = 20;
  		context.fillText("Main Phase - Before Combat",50, canvasHeight - textHeight); //x,y
  		context.fillText("Step 1 - Play a Land Card",50, canvasHeight - textHeight + 20); //x,y
  		context.fillText("Step 2 - Cast Spells - cast creatures, sorceries, and other spells",50, canvasHeight - textHeight + 40); //x,y

  		//draw phase name
  		context.fillText("Phase 2",canvasWidth - 100, 20); //x,y

  		context.restore();
  	}

  	function drawPhase3() {
  		clearCanvas();
  		drawUnchangedImages();
  		context.save();

  		context.fillStyle = 'black';
  		context.font = textFont;
  		context.lineWidth = 3;

  		//draw tapped land
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(225,-500, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.restore();
  		context.fillText("Tapped Land", canvasWidth/2 - cardWidth - 25, canvasHeight - textHeight - 300 + 50); //x,y

  		//draw played land
  		context.strokeRect(canvasWidth/2 - cardWidth + cardWidth + 2, canvasHeight - textHeight - 300, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.fillText("Land", canvasWidth/2 - cardWidth + cardWidth + 2 + 5, canvasHeight - textHeight - 300 + 15); //x,y

  		//draw attackers
  		context.save();
  		context.fillStyle = 'DarkBlue';
  		context.rotate(90*Math.PI/180);
  		context.fillRect(100, -500, cardWidth, cardHeight); //x,y,w,h
  		context.restore();
  		context.fillStyle = 'black';
  		context.fillText("Attackers", canvasWidth/2 - cardWidth + 5 + cardWidth, canvasHeight - textHeight - 400 + 10); //x,y

  		//draw blockers
  		context.save();
  		context.fillStyle = 'Crimson';
  		context.rotate(90*Math.PI/180);
  		context.fillRect(25, -500, cardWidth, cardHeight); //x,y,w,h
  		context.fillRect(canvasWidth/2 - cardWidth, 20, cardWidth, cardHeight); //x,y,w,h
  		context.restore();
  		context.fillStyle = 'black';
  		context.fillText("Blockers", canvasWidth/2 - cardWidth + 5 + cardWidth, 20+10); //x,y

  		//draw text
  		context.font = textFontBold;
  		context.shadowColor = 'white';
  		context.shadowOffsetX = 10;
  		context.shadowOffsetY = 10;
  		context.shadowBlur = 20;
  		context.fillText("Combat Phase",50, canvasHeight - textHeight); //x,y
  		context.fillText("Step 1 - Declare attackers - Tap every creature that will attack",50, canvasHeight - textHeight + 20); //x,y
  		context.fillText("Step 2 - Declare blockers - Each untapped defending creature may block a single attacker",50, canvasHeight - textHeight + 40); //x,y
  		context.fillText("Step 3 - Combat Damage - Blockers and Attackers deal damage to eachother equal to their power", 50, canvasHeight - textHeight + 60);
  		context.fillText("If a creature takes damage at least equal to toughness it's destroyed.  Unblocked attackers deal damage to opponent.", 50, canvasHeight - textHeight + 80);

  		//draw phase name
  		context.fillText("Phase 3",canvasWidth - 100, 20); //x,y

  		context.restore();
  	}

  	function drawPhase4() {
  		clearCanvas();
  		drawUnchangedImages();
  		context.save();

  		context.fillStyle = 'black';
  		context.font = textFont;
  		context.lineWidth = 3;

  		//draw tapped land
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(225,-500, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.restore();
  		context.fillText("Tapped Land", canvasWidth/2 - cardWidth - 25, canvasHeight - textHeight - 300 + 50); //x,y

  		//draw played land
  		context.strokeRect(canvasWidth/2 - cardWidth + cardWidth + 2, canvasHeight - textHeight - 300, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.fillText("Land", canvasWidth/2 - cardWidth + cardWidth + 2 + 5, canvasHeight - textHeight - 300 + 15); //x,y

  		//draw attackers
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(100, -500, cardWidth, cardHeight); //x,y,w,h
  		context.restore();
  		context.stroke();
  		context.fillText(" Tapped Creature", canvasWidth/2 - cardWidth + 5 + cardWidth, canvasHeight - textHeight - 400 + 10); //x,y

  		//draw blockers
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(25, -500, cardWidth, cardHeight); //x,y,w,h
  		context.restore();
  		context.stroke();
  		context.fillStyle = 'black';
  		context.fillText("Opponent's Creature", canvasWidth/2 - cardWidth + 5 + cardWidth, 20+10); //x,y

  		// draw spells
  		context.fillStyle = 'BlueViolet';
  		context.fillRect(canvasWidth - cardWidth - 20, canvasHeight - textHeight - 300 , cardWidth, cardHeight); //x,y,w,h
  		context.fillStyle = 'black';
  		context.fillText("Play Spell", canvasWidth - cardWidth - 20 + 5, canvasHeight - textHeight - 300 + 10 + cardHeight + 10); //x,y
  		var image = new Image(60, 45);
  		image.src = '../assets/lightning-icon.png';
  		image.onload = function() {
  			context.drawImage(image, canvasWidth - cardWidth - 20, canvasHeight - textHeight - 300, image.width, image.height);
      };

  		//draw text
  		context.font = textFontBold;
  		context.shadowColor = 'white';
  		context.shadowOffsetX = 10;
  		context.shadowOffsetY = 10;
  		context.shadowBlur = 20;
  		context.fillText("Main Phase - After Combat",50, canvasHeight - textHeight); //x,y
  		context.fillText("Step 1 - A land card may be played if it was not played yet",50, canvasHeight - textHeight + 20); //x,y
  		context.fillText("Step 2 - Spells may be cast again if player has enough mana left",50, canvasHeight - textHeight + 40); //x,y

  		//draw phase name
  		context.fillText("Phase 4",canvasWidth - 100, 20); //x,y

  		context.restore();
  	}

  	function drawPhase5() {
  		clearCanvas();
  		drawUnchangedImages();
  		context.save();

  		context.fillStyle = 'black';
  		context.font = textFont;
  		context.lineWidth = 3;

  		//draw tapped land
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(225,-500, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.restore();
  		context.fillText("Tapped Land", canvasWidth/2 - cardWidth - 25, canvasHeight - textHeight - 300 + 50); //x,y

  		//draw played land
  		context.strokeRect(canvasWidth/2 - cardWidth + cardWidth + 2, canvasHeight - textHeight - 300, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.fillText("Land", canvasWidth/2 - cardWidth + cardWidth + 2 + 5, canvasHeight - textHeight - 300 + 15); //x,y

  		//draw attackers
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(100, -500, cardWidth, cardHeight); //x,y,w,h
  		context.restore();
  		context.stroke();
  		context.fillText(" Tapped Creature", canvasWidth/2 - cardWidth + 5 + cardWidth, canvasHeight - textHeight - 400 + 10); //x,y

  		//draw blockers
  		context.save();
  		context.rotate(90*Math.PI/180);
  		context.strokeRect(25, -500, cardWidth, cardHeight); //x,y,w,h
  		context.restore();
  		context.stroke();
  		context.fillStyle = 'black';
  		context.fillText("Opponent's Creature", canvasWidth/2 - cardWidth + 5 + cardWidth, 20+10); //x,y

  		//draw text
  		context.font = textFontBold;
  		context.shadowColor = 'white';
  		context.shadowOffsetX = 10;
  		context.shadowOffsetY = 10;
  		context.shadowBlur = 20;
  		context.fillText("Ending Phase",50, canvasHeight - textHeight); //x,y
  		context.fillText("Step 1 - Cleanup - Damaged creatures on the battlefield heal for the next turn",50, canvasHeight - textHeight + 20); //x,y

  		//draw phase name
  		context.fillText("Phase 5",canvasWidth - 100, 20); //x,y

  		context.restore();
  	}

  	function clearCanvas() {
  		context.clearRect(0, 0, canvasWidth, canvasHeight);
  	}

  	function drawUnchangedImages() {
  		context.fillStyle = 'black';
  		context.font = textFont;
  		context.lineWidth = 3;

  		//draw library
  		context.strokeRect(20 , canvasHeight - textHeight - 300, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.fillText("Library", 20 + 5, canvasHeight - textHeight - 310); //x,y

  		//draw hand
  		context.strokeRect(canvasWidth/2 - cardWidth, canvasHeight - textHeight - 200, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.strokeRect(canvasWidth/2 - cardWidth-5, canvasHeight - textHeight - 200 + 5, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.strokeRect(canvasWidth/2 - cardWidth-10, canvasHeight - textHeight - 200 + 10, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.fillText("Hand", canvasWidth/2 - cardWidth-5, canvasHeight - textHeight - 200 + cardHeight + 25); //x,y

  		//draw graveyard
  		context.strokeRect(20, canvasHeight - textHeight - 200, cardWidth, cardHeight); //x,y,w,h
  		context.stroke();
  		context.fillText("Graveyard", 20, canvasHeight - textHeight - 110); //x,y

  		//draw player score
  		context.font = textFontBold;
  		context.fillText("Player Life: 20", canvasWidth - 200, canvasHeight - textHeight - 50); //x,y

  		//draw opponent score
  		context.font = textFontBold;
  		context.fillText("Opponent Life: 20", 50, 50); //x,y
  	}

    //this will disable the buttons and use the timer to go through each drawing
  	function playSteps() {
  		step1But.disabled = true;
  		step2But.disabled = true;
  		step3But.disabled = true;
  		step4But.disabled = true;
  		step5But.disabled = true;
  		idTimer1 = window.setTimeout(drawPhase1, 500);
  		idTimer2 = window.setTimeout(drawPhase2, 4000);
  		idTimer3 = window.setTimeout(drawPhase3, 7000);
  		idTimer4 = window.setTimeout(drawPhase4, 10000);
  		idTimer5 = window.setTimeout(drawPhase5, 12000);
  		window.setTimeout(stopPlaying, 15000);
  	}

    //clear the timers and re-enable the buttons
  	function stopPlaying() {
  		window.clearTimeout(idTimer1);
  		window.clearTimeout(idTimer2);
  		window.clearTimeout(idTimer3);
  		window.clearTimeout(idTimer4);
  		window.clearTimeout(idTimer5);
  		step1But.disabled = false;
  		step2But.disabled = false;
  		step3But.disabled = false;
  		step4But.disabled = false;
  		step5But.disabled = false;
  	}

  }
}
