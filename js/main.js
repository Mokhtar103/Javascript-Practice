var author = document.getElementById('author');
var singleQuote = document.getElementById('quote');

var quotes = [

{
    author: 'Oscar Wilde',
    quote: 'Be yourself; everyone else is already taken.'
},

{
    author: 'Albert Einstein',
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
},

{
    author: 'Marcus Tullius Cicero',
    quote: 'A room without books is like a body without a soul.'
},

{
    author: 'Mae West',
    quote: 'You only live once, but if you do it right, once is enough.'
},

{
    author: 'Mahatma Gandhi',
    quote: 'Be the change that you wish to see in the world.'
},

{
    author: 'Elbert Hubbard',
    quote: 'A friend is someone who knows all about you and still loves you.'
},

{
    author: 'Thomas A. Edison',
    quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.'
}

];

function generateQuote() {
    var randomQuote = Number.parseInt(Math.random() * quotes.length);
    singleQuote.innerHTML = `\"${quotes[randomQuote].quote}\"`;
    author.innerHTML = `--${quotes[randomQuote].author}`;
    
}