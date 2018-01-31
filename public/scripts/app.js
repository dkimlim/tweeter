
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis In order to experiment with Ajax we need a web page. We will make a web page that displays a list of blog posts. At the bottom of the list there will be a button to load more posts. Instead of that button navigating to another web page, it will trigger an Ajax request that loads the new posts asynchronously."
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
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

	renderTweets(data);

});



