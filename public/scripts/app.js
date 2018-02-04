
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

	        <header>
	            <img src ="${article["user"].avatars.small}">
	            <span class="name">${article["user"].name}</span>
		        <span class="username">${article["user"].handle}</span>
		    </header>
	        
	        <p>${escape(article["content"].text)}</p>
	    
	        <footer class="time-ago">${moment(article.created_at).fromNow()}</footer>

	     </article>`;
	  return $tweet;
	};

	//Escape function to prevent XSS in text area of tweet-form.
	function escape(str) {
 	  var div = document.createElement('div');
 	  div.appendChild(document.createTextNode(str));
 	  return div.innerHTML;
	}

	//Button "compose" in the header toggles the new-tweet form and focuses on the text area.
  	$('.new-tweet').hide();
  	$('button').click(function(event) {
  		$('.new-tweet').toggle();
  		$('#textTweet').focus().select();
  	});
    
	//function to handle errors when Ajax is called
	const handleError = (label) => {
	    return (err) => {
	    	console.debug(`Error @ ${label}`, err);
	    }
  	}
	//GET data from mongoDB with Ajax to load tweets on default page.
	function loadTweets() {
			$.get('/tweets/')
			.then(renderTweets)
			.fail(handleError('loadArticles'));
	}	
	loadTweets();

	//Click button on form has 2 conditionals before passing to AJAX Post request:
	// - cannot submit empty text (return error message)
	// - cannot submit a textarea more than 140 characters (return error message)
	const $button = $('.tweetButton');

	$("form").submit(function(event) {
	    event.preventDefault();
	    let $textTweet = $('#textTweet').val();

	    if (!$textTweet.length) {
	    	alert("Your submission is empty! That won't be interesting to read :(");
	    	return;
	    }

	    if ($textTweet.length > 140) {
	    	alert("Your tweet is too long!");
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
		//clear text area and counter of 140 after posting tweet
        $("#textTweet").val("");
        $(".counter").text(140);
	});
//end DOM
}); 

