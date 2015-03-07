$(document).ready(function () {
	var playarea = $(".playarea") ,gameTimer, actionType = undefined,
		eachGif = $(".commonGif"),
		staticEle = $(".static"),
		bodyArea = $(".bodyPartsArea"),
		playArea = $(".playArea"),
		currentScore = 0,
		scoreMap = {
			eyes : 10,
			nose : 10,
			chin : 5,
			flexus : 20,
			groin : 20,
			knee : 10,
			shin : 10,
			stepin : 10
		},
		scoreDiv =  $(".scorediv"),
		finishHim = $(".fall"),
		finishHimBtn = $(".finishHimBtn");

	var eyesFrame = ['<div class="commonGif eyes"></div>'];
	var staticFrame = ['<div class="commonGif static"></div>'];
	var $body = $('body');

	var imageSrcLookup = {
		"nose" : "images/gif/nose.gif",
		"eyes" : "images/gif/eyes.gif",
		"nose" : "images/gif/nose.gif",
		"chin" : "images/gif/chin.gif",
		"flexus" : "images/gif/plexus.gif",
		"groin" : "images/gif/groin.gif",
		"knee" : "images/gif/groin2.gif",
		"shin" : "images/gif/shin.gif",
		"stepin" : "images/gif/instep.gif"
	};

	$(".sideNav").click(function(evt) {
		var evtTarget = $(evt.currentTarget);
		$(".sideNav").removeClass('active');

		if(evtTarget.hasClass('sideOne')) {
			$body.animate({scrollTop : 0}, 500, 'swing');
		}
		else if(evtTarget.hasClass('sideTwo')) {
			$body.animate({scrollTop : bodyArea.offset().top}, 500, 'swing');
		}
		else if(evtTarget.hasClass('sideThree')) {
			$body.animate({scrollTop : playArea.offset().top}, 500, 'swing');
		}

		$(this).addClass('active');
	});
	finishHimBtn.click(function() {
		
		if(gameTimer) {
			return;
		}
		
		$(".animationImg").attr('src', 'images/gif/fall.gif');

		gameTimer = setTimeout(function() {
			$(".animationImg").attr('src', 'images/static.png');
			gameTimer = undefined;
			currentScore = 0;
			scoreDiv.html(currentScore);
			finishHimBtn.hide();
		}, 1300);	
	
	});
	
	$(".action-btn").click(function(evt) {
		if(gameTimer) {
			return;
		}

		actionType = $(evt.currentTarget).attr('data-actiontype');

		$(".animationImg").attr('src', imageSrcLookup[actionType]);
		
		currentScore = scoreMap[actionType] + currentScore;
		
		if(currentScore >= 50) {
			finishHimBtn.show();			
		}
		else {
			finishHimBtn.hide();
		}

		scoreDiv.html(currentScore);

		gameTimer = setTimeout(function() {
			$(".animationImg").attr('src', 'images/static.png');
			gameTimer = undefined;
		},1000);

	});
	
	$(".downbutton").click(function(evt) {
		var currentTarget = $(evt.currentTarget);
		$(".sideNav").removeClass('active');

		if(currentTarget.hasClass('slideOne')) {
			$(".sideTwo").addClass('active');
			$('body').animate({scrollTop : bodyArea.offset().top}, 500, 'swing');
		}
		else if(currentTarget.hasClass('slideTwo')) {
			$(".sideThree").addClass('active');
			$('body').animate({scrollTop : playArea.offset().top}, 500, 'swing');
		} 
	});

});