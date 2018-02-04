
// Function responsible for the character count in the text-form POST on Tweeter


// $(document).ready(function() {
//     $( "#textTweet" ).keyup(function(ev) {
//         let charAmount = $(this).val().length;
//         let newCount = 140 - charAmount;
//         $(this).parent().children( ".counter" ).html(newCount);
//         if (newCount < 0) {
//             $(this).parent().children( ".counter" ).css("color", "Red");
//         } else {
//             $(this).parent().children( ".counter" ).css("color", "Black")
//         }
//       });
//   });
$(document).ready(function(){ 

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