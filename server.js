var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title: 'article-one |Anzel Fernandes',
    heading: 'article-one',
    date: 'Aug 8,2017',
    content: `
        <p>
            I feel a great pleasure to present to you my very first hand written webpage.....
            Hope you like it, and i'll assure you that i'll be making more amazing websites in future
            and simly amaze with my unique talent.
        </p>
        
        <p>
            I feel a great pleasure to present to you my very first hand written webpage.....
            Hope you like it, and i'll assure you that i'll be making more amazing websites in future
            and simly amaze with my unique talent.
        </p>
        
        <p>
            I feel a great pleasure to present to you my very first hand written webpage.....
            Hope you like it, and i'll assure you that i'll be making more amazing websites in future
            and simly amaze with my unique talent.
        </p>`
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
            <link href="ui/style.css" rel="stylesheet" />
        </head>
        <body>
        <div class = 'container'>
            <div>
                <a href="/">Go to home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res) {
    res.send(createTemplate(articleone)); 
});

app.get('/article-two',function (req,res) {
   res.send('this is the article number two'); 
});

app.get('/article-three',function (req,res) {
   res.send('this is the article number three'); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
