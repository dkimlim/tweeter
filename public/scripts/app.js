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

	//Get a single tweet from a database.
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

	// renderTweets(data);

	$("form").submit(function( event ) {
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
	  
	  event.preventDefault();
	});

	const handleError = (label) => {
	    return (err) => {
	      // we can access to label here even though this function
	      // is being invoked later
	      console.debug(`Error @ ${label}`, err);
	    }
  	}

	// $.get('/tweets/')
	// .then(renderTweets)
	// .fail(handleError('loadArticles'));

	// $(".tweets-container"function loadTweets(){
	// 	$.ajax({
	// 		url: '/tweets/',
	// 		method: 'GET'
	// 		// success: function renderTweets(data){

	// 		// },
	// 		// error: function handleError(loadedArticles){

	// 		// }
	// 	});
	// });
	// console.log(loadTweets);

});





