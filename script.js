const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quotes");

let apiQuotes = [];

//new Quotes
function newQuote(){
    // Pick a random quote from apiQuotes array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // chech if authot field are empty
    if(!quote.author) {
        authorText.textContent = "Unknow";
    } else {
        authorText.textContent = quote.author;
    }

    // check the lenght of the quote statement to determine styling
    if (quote.text.length > 100 ) {
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
        
    }
    quoteText.textContent = quote.text;
}

// get quotes from API 

async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        
        newQuote()

    } catch (error) {
        alert(error);
        // Catch error here


    }

}

//tweet quote
function tweetQuote (){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  window.open(twitterUrl, "_blank");
}

//Event Listners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);


// on Load
getQuotes();