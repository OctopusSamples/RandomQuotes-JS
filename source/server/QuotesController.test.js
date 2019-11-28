const QuotesController = require('./QuotesController');

test('get a random quote', done => {
    QuotesController.RandomQuote().then(quote => {
        expect(quote.quote).toBeTruthy();
        done();
    })
});