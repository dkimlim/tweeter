/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(function(){ 
 	console.log('start');

	
 	//Render the single tweet to append it to the main container. 
	function renderTweets(tweets) {
		const articles_elm = $('.tweets-container');

		tweets.forEach((article) => {
			articles_elm.append(createTweetElement(article));
		})
	};	

	//Get a single tweet from the database.
	function createTweetElement (article) {
	  let $tweet = 
	  	`<article class="tweet">
	    <header><img src ="${article["user"].avatars.small}">
	    <span class="name">${article["user"].name}</span>
		<span class="username">${article["user"].handle}</span></header>
	    <p>${article["content"].text}</p>
	    <footer class="time-ago">${article.created_at}</footer>
	    </article>`;
	  return $tweet;
	};

// beforeSend: function() {                    
//     $empty = $('form#yourForm').find("input").filter(function() {
//         return this.value === "";
//     });
//     if($empty.length) {
//         alert('You must fill out all fields in order to submit a change');
// 	// // POST data of new tweet with Ajax and rendering it back to main index page;
// 	function validateTweet(form) {
//     if(this.text.value == "") {
//       alert("Don't leave me empty!");
//       this.text.focus();
//       return false;
//     }
//     if(this.text.value == "" || !this.valid_email.checked) {
//       alert("Please enter a valid Email address");
//       this.email.focus();
//       return false;
//     }
//     if(this.age.value == "" || !this.valid_age.checked) {
//       alert("Please enter an Age between 16 and 100");
//       this.age.focus();
//       return false;
//     }
//     alert("Success!  The form has been completed, validated and is ready to be submitted...");
//     return false;
//   }

// 	$("form").submit(validate() {

//     if(this.text.value == ""})

//     submitHandler: function(form) {
//         $.ajax({
//             url: form.action,
//             type: form.method,
//             data: $(form).serialize(),
//             success: function(response) {
//                 $('#answers').html(response);
//             }            
//         });
//     }
// });

// 	$("form").validate({
//   invalidHandler: function(event, validator) {
//     // 'this' refers to the form
//     var errors = validator.numberOfInvalids();
//     if (errors) {
//       var message = errors == 1
//         ? 'You missed 1 field. It has been highlighted'
//         : 'You missed ' + errors + ' fields. They have been highlighted';
//       $("div.error span").html(message);
//       $("div.error").show();
//     } else {
//       $("div.error").hide();
//     }
//   }
// });


	$("form").submit(function( event ) {
	    event.preventDefault();

	    let formText = $("#textTweet");

	    console.log(formText.text());





		$.ajax({
			url: '/tweets/',
			dataType: 'text',
			method: 'POST',
			data: $(this).serialize(),
			success: function(){
				$.get('/tweets/')
				.then(renderTweets)
				.fail(handleError('loadArticles'));
			},
			error: handleError('loadArticles')
		})
	});
		// }}

		$( document ).ajaxError(function( event, request, settings ) {
  $( "#msg" ).append( "<li>Error requesting page " + settings.url + "</li>" );
});
	  

	const handleError = (label) => {
	    return (err) => {
	    console.debug(`Error @ ${label}`, err);
	    }
  	}

	
	// const textArea = $('.textTweet');

	// if (textArea.length > 140) {
	// 	   alert('tweet is too long');

	// 	   console.log(textArea)
	// 	   console.log(textArea.length)

	// 	   console.log('tweet is too long')

	// 	} else if (textArea === "") {
	// 	   alert('tweet is empty');
		
	// 	} else {


});





