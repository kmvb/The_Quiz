var quiz = {};

quiz.quizData = [{
	"question": "The only brand left of the product you need to buy is the eco-friendly, locally produced version. You…",
	"answers" : [
		"<h3 class='action'>Come back later to purchase the cheaper brand</h3><br><p class='description'>after all why pay more for the same thing, this stuff is not even regulated</p>",
		"<h3 class='action'>Buy it without hesitation</h3><br><p class='description'>we should all be more conscious of the environmental impact of the products we use</p>",
		"<h3 class='action'>Evaluate your options</h3><br><p class='description'>this might be false advertising. can we always trust corporations to produce products that are really good for the environment?</p>"
	],
	"pictures" : [
		"images/environment1.jpg",
		"images/environment2.jpg",
		"images/environment3.jpg"
	]
}, {
	"question": "Your doctor is concerned about your health and requests that you pass a scan test. You...",
	"answers" : [
		"<h3 class='action'>Pay for a private clinic</h3><p class='description'>it’s faster and more convenient, so why wait</p>",
		"<h3 class='action'>Place your name on the waiting list</h3><p class='description'>it's free and you are happy to wait your turn like everyone else</p>",
		"<h3 class='action'>Push to get put through as soon as possible</h3><p class='description'>it's a public system so you have a right to be treated quickly</p>"
	], 
	"pictures" : [
		"images/health1.jpg",
		"images/health2.jpg",
		"images/health3.jpg"
	]
}, {
	"question": "You are handed a joint at a party. You...",
	"answers" : [
		"<h3 class='action'>Throw it in the toilet</h3><p class='description'>this stuff is illegal</p>",
		"<h3 class='action'>Smoke it up</h3><p class='description'>this stuff is medicinal</p>",
		"<h3 class='action'>Pass your turn</h3><p class='description'>it's not your thing but you don't mind it.</p>"	
	],
		"pictures" : [
		"images/marijuana1.jpg",
		"images/marijuana2.jpg",
		"images/marijuana3.jpg"
	]
}, {
	"question": "Your cousin decides to enter the workforce directly after high school because higher education is not free. You...",
	"answers" : [
		"<h3 class='action'>Find it completely ridiculous</h3><p class='description'>a good education is worth it's weight in gold</p>",
		"<h3 class='action'>Agree with his decision</h3><p class='description'>tuition cost are not controlled and it's difficult to justify paying those hefty fees</p>",
		"<h3 class='action'>Tell him to get a clue</h3><p class='description'>the prime function of schooling is to prepare him for a better job</p>"
	],
	"pictures" : [
		"images/education1.jpg",
		"images/education2.jpg",
		"images/education3.jpg"
	]
}, {
	"question": "Your brother in the military is being deployed for a mission in a country that has recently seen violence. You are…",
	"answers" : [
		"<h3 class='action'>Proud of him</h3><p class='description'>he is doing a service for his country</p>",
		"<h3 class='action'>Scared for him</h3><p class='description'>the idea of saving people half way across the world is foolish</p>",
		"<h3 class='action'>Worry for him</h3><p class='description'>military action is never really justified nor necessary</p>"
	],
		"pictures" : [
		"images/military1.jpg",
		"images/military2.jpg",
		"images/military3.jpg"
	]
}, {
	"question": "You are seeing a flow of ethnic restaurants opening up in your neighbourhood. You...",
	"answers" : [
		"<h3 class='action'>Get nostalgic</h3><p class='description'>of the time where greasy diners were everywhere</p>",
		"<h3 class='action'>Get hungry</h3><p class='description'>and plan to try them all</p>",
		"<h3 class='action'>Think it looks interesting</h3><p class='description'>but it is far too many options</p>"
	],
		"pictures" : [
		"images/ethnic1.jpg",
		"images/ethnic2.jpg",
		"images/ethnic3.jpg"
	]
}, {
	"question": "Your friend’s pregnancy test comes out positive. You advise her to...",
	"answers" : [
		"<h3 class='action'>Stay at home with her children until kindergarden</h3><p class='description'>she may have had a great job but raising her newborns is more important</p>",
		"<h3 class='action'>Rush to get her name on the waiting lists for the daycare lottery</h3><p class='description'>who wants to spend university-tuition prices for little more than babysitting</p>",
		"<h3 class='action'>Reassure her that the government will help her</h3><p class='description'>by giving money directly to the parents which is more than we should ask for</p>",
		
	],
		"pictures" : [
		"images/daycare1.jpg",
		"images/daycare2.jpg",
		"images/daycare3.jpg"
	]
}, {
	"question": "You receive an invitation to the opening of a new publicly funded theatre. You...",
	"answers" : [
		"<h3 class='action'>Quickly toss the invitation</h3><p class='description'>taxpayers should not be expected to prop up any theatres or museums that cannot survive on a commercial basis</p>",
		"<h3 class='action'>Call all your friends to join you</h3><p class='description'>art and culture enriches everyone’s lives</p>",
		"<h3 class='action'>Get the word out on social media</h3><p class='description'>public art funded by the state provides a valuable service to the population</p>"
	],
		"pictures" : [
		"images/art1.jpg",
		"images/art2.jpg",
		"images/art3.jpg"
	]
}, {
	"question": "Your neighbour’s 15 year-old got arrested and sentenced to house arrest. You think he/she...",
	"answers" : [
		"<h3 class='action'>Should be sent to prison</h3><p class='description'>punishment and prison are the best way to protect law-abiding citizens</p>",
		"<h3 class='action'>Deserves to get a second chance</h3><p class='description'>we should always try to rehabilitate some criminals</p>",		
		"<h3 class='action'>Will avoid being influenced by other criminals</h3><p class='description'>violent young offenders should not be sentenced as adults</p>"
	],
		"pictures" : [
		"images/crime1.jpg",
		"images/crime2.jpg",
		"images/crime3.jpg"
	]
}, {
	"question": "You are advised to upgrade the security system on your computer to protect against increased surveillance. You...",
	"answers" : [
		"<h3 class='action'>Delete it</h3><p class='description'>although the electronic age makes official surveillance easier, only wrongdoers need to be worried.</p>",
		"<h3 class='action'>Immediately upgrade</h3><p class='description'>our civil liberties are being excessively curbed in the name of counter terrorism and criminal surveillance</p>",
		"<h3 class='action'>Glance at it and postpone</h3><p class='description'>there is not an urgency to do this right away, even though the government should not censor free speech</p>"
	],
		"pictures" : [
		"images/privacy1.jpg",
		"images/privacy2.jpg",
		"images/privacy3.jpg"
	]
}, {
	"question": "Your mother asks you to accompany her to volunteer at the local food bank. You...",
	"answers" : [
		"<h3 class='action'>Show no interest in going.</h3><p class='description'>you already do your part by paying your taxes which should be assisting those in need</p>",
		"<h3 class='action'>Gladly accept</h3><p class='description'>charity is better than social security as a means of helping the genuinely disadvantaged.</p>",
		"<h3 class='action'>Take a rain check</h3><p class='description'>some people are naturally unlucky, but maybe around the holidays you'll have some time to help</p>"
		
	],
		"pictures" : [
		"images/charity1.jpg",
		"images/charity2.jpg",
		"images/charity3.jpg"
	]
}, {
	"question": "It is nearing that time when you should start having all your records to file your taxes organized. You…",
	"answers" : [
		"<h3 class='action'>Get a head start on filling your report</h3><p class='description'>let's see how much money you can get back with those tax credits</p>",
		"<h3 class='action'>Hand in everything to your accountant</h3><p class='description'>it needs to be done and you cannot cope with the stress of leaving this to the last minute.</p>",
		"<h3 class='action'>Get a headache</h3><p class='description'>why should you be paying more when rich people are not giving their fair share?</p>"
	],
		"pictures" : [
		"images/tax1.jpg",
		"images/tax2.jpg",
		"images/tax3.jpg"
	]
}
];

quiz.counter = 0,
quiz.name = "",
quiz.score = 0;

quiz.start = function(count) {
	var current = quiz.quizData;
	// Initial questions.
	$('#question').text(current[count].question);
	$('#answer1').html(current[count].answers[0]);
	$('#answer2').html(current[count].answers[1]);
	$('#answer3').html(current[count].answers[2]);
	$('.box1').css('background-image', 'linear-gradient(to bottom, rgba(189, 195, 199,0.8), rgba(189, 195, 199,0.8)), url(' + current[count].pictures[0] + ')');
	$('.box2').css('background-image', 'linear-gradient(to bottom, rgba(127, 140, 141, 0.8), rgba(127, 140, 141,0.8)), url(' + current[count].pictures[1] + ')');
	$('.box3').css('background-image', 'linear-gradient(to bottom, rgba(149, 165, 166, 0.8), rgba(149, 165, 166,0.8)), url(' + current[count].pictures[2] + ')');

	// Create list for progress
	for (var i = 0; i < quiz.quizData.length; i++) {
		$('ul.progress').append('<li class="icon"></li>');
	}

	// Update current progress list item
	$('ul.progress li.icon:nth-child(' + (count += 1) + ')').css('background-image', 'url(images/checkmarkdone.svg)');


$('.next').hover(
	function()
	{

 $(this).addClass('boxHover');
		if ($(this).hasClass('box1')) {
			// $(this).toggle({direction: "horizontal", effect: "scale" });
			$(this).css('background-image', 'linear-gradient(to bottom, rgba(189, 195, 199,0.2), rgba(189, 195, 199,0.2)), url(' + current[quiz.counter].pictures[0] + ')');
		}
		if ($(this).hasClass('box2')) {
			$(this).css('background-image', 'linear-gradient(to bottom, rgba(127, 140, 141, 0.2), rgba(127, 140, 141,0.2)), url(' + current[quiz.counter].pictures[1] + ')');
		}
		if ($(this).hasClass('box3')) {
			$(this).css('background-image', 'linear-gradient(to bottom, rgba(149, 165, 166, 0.2), rgba(149, 165, 166,0.2)), url(' + current[quiz.counter].pictures[2] + ')');
		}


	},
	function()
	{
	$(this).removeClass('boxHover');
			if ($(this).hasClass('box1')) {
			$(this).css('background-image', 'linear-gradient(to bottom, rgba(189, 195, 199,0.8), rgba(189, 195, 199,0.8)), url(' + current[quiz.counter].pictures[0] + ')');
		}
		if ($(this).hasClass('box2')) {
			$(this).css('background-image', 'linear-gradient(to bottom, rgba(127, 140, 141, 0.8), rgba(127, 140, 141,0.8)), url(' + current[quiz.counter].pictures[1] + ')');
		}
		if ($(this).hasClass('box3')) {
			$(this).css('background-image', 'linear-gradient(to bottom, rgba(149, 165, 166, 0.8), rgba(149, 165, 166,0.8)), url(' + current[quiz.counter].pictures[2] + ')');
		}
	});

	// When answer clicked
	$('.next').on('click', function() {
		// Update score based on value clicked
		if ($(this).is('#answer1')) {
			quiz.score += 1;
		} else if ($(this).is('#answer2')) {
			quiz.score += 2;
		} else if ($(this).is('#answer3')) {
			quiz.score += 3;
		}
		

		// Update counter on click
		quiz.counter++;

		// Check to see if end of questions
		if (quiz.counter < 12) {
			var i = quiz.counter;
			var list = i + 1;

			// Update current progress list item
			$('ul.progress li:nth-child(' + list + ')').css('background-image', 'url(images/checkmarkdone.svg)');
			$('#question').text(current[i].question);
			$('#answer1').html(current[i].answers[0]);
			$('#answer2').html(current[i].answers[1]);
			$('#answer3').html(current[i].answers[2]);
			$('.box1').css('background-image', 'linear-gradient(to bottom, rgba(189, 195, 199,0.8), rgba(189, 195, 199,0.8)), url(' + current[i].pictures[0] + ')');
			$('.box2').css('background-image', 'linear-gradient(to bottom, rgba(127, 140, 141, 0.8), rgba(127, 140, 141,0.8)), url(' + current[i].pictures[1] + ')');
			$('.box3').css('background-image', 'linear-gradient(to bottom, rgba(149, 165, 166, 0.8), rgba(149, 165, 166,0.8)), url(' + current[i].pictures[2] + ')');

		} else {
			$('.questionnaire').hide();
			$('.result').show();
			$('.inputName').text(quiz.name);
			if (quiz.score < 11) {
				$('.resultText').text('Your choices indicate that you have respect for traditional values, value a strong regime of law and order and in favour of a small less intrusive government. You might consider voting for the blue team!');
				// $('body').css('background-image', 'linear-gradient(to bottom, rgba(230, 126, 34, 0.8), rgba(230, 126, 34, 0.8)),url("images/vote3.jpeg")');
			} else if (quiz.score > 12 && quiz.score < 23) {
				$('.resultText').text('Your choices indicate that you have respect for a pacifist tradition, value a strong system of wealth distribution, and in favour of social programs. You might consider voting for the orange team!');
				// $('body').css('background-image', 'linear-gradient(to bottom, rgba(52, 152, 219, 0.8), rgba(52, 152, 219, 0.8)),url("images/vote3.jpeg")');
			} else {
				$('.resultText').text('Your choices indicate that you have respect for a centrist egalitarian view, value a strong social progressive agenda and in favour of a fiscally conservative government. You might consider voting for the red team!');
				// $('body').css('background-image', 'linear-gradient(to bottom, rgba(231, 76, 60, 0.8), rgba(231, 76, 60, 0.8)),url("images/vote3.jpeg")');
			}
		}
	});
}

quiz.init = function() {
	$('#submit').on('click', function (e) {
		e.preventDefault();
		quiz.name = $('#textName').val();
		$('.intro').hide();
		$('.questionnaire').show();
		quiz.start(quiz.counter);
	});
	
}

quiz.refreshPage = function (e) {
	$('#refresh').on('click', function (e) {
		e.preventDefault();
		console.log('it works');

		document.location.reload(true);
	});
};

$(function() {
	quiz.init();
	quiz.refreshPage();
});