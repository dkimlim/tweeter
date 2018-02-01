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
			articles_elm.prepend(createTweetElement(article));
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
	

	//Click button on form has 2 conditionals before passing to AJAX Post request:
	// - cannot submit empty text (return error message)
	// - cannot submit a textarea more than 140 characters (return error message)

	const $button = $('#tweetButton');

	$("form").submit(function(event) {
	    event.preventDefault();

	    let $textTweet = $('#textTweet').val();
	    if (!$textTweet.length) {
	    	alert("Text input cannot be empty");
	    	return;
	    }

	    if ($textTweet.length > 140) {
	    	alert("Text is too long");
	    	return;
	    }
	   
	   	let formData = $("#textTweet");
		$.ajax({
			url: '/tweets',
			dataType: 'text',
			method: 'POST',
			data: formData.serialize(),
			success: function() {
				$.get('/tweets/')
				.then(renderTweets)
				.fail(handleError('loadArticles'));
			}	
		})
	});

	const handleError = (label) => {
	    return (err) => {
	    console.debug(`Error @ ${label}`, err);
	    }
  	}
});









