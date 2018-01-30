// Function responsible for the character count in the text-form to post on Tweeter

$(document).ready(function(){ 
  console.log('start');

  const maxCounter = 140;

	$('textarea').on('keyup', (function() {
	    let characters = $(this).val().length;
	    let counter = $(this).parent().children('.counter')

	    counter.text(140 - characters);
	  
		if (characters > maxCounter) {
		   counter.css('color', 'red');
		} else {
		   counter.css('color', 'black');
		}
	}));
});