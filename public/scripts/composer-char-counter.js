// Function responsible for the character count in the text-form to post on Tweeter
$(document).ready(function(){ 
  var counter = 140 - Number(length);
  var length = 0;
$( "textarea" ).keyup(function() {
	length++;
  }
	console.log(length);
});
// console.log(counter);

});