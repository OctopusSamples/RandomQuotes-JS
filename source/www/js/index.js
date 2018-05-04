$(function(){
    function refreshQuote() {
        fetch('/api/quote').then(function (a) {
            return a.json();
        }).then(function (quote) {
            $("#quoteText").text(quote.quote);
            $("#quoteAuthor").text(quote.author);
        });
    }

    $("#refreshQuote").click(function(){
        refreshQuote();
    });

    refreshQuote();
});