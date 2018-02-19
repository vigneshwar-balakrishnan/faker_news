var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var hacker = require('./routes/hacker');
var Feed = require('./model/feed')
var Comment = require('./model/comment')
var app = express();
var port = 3000;

//Connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/feedstore');
var db = mongoose.connection;

db.once('open', function(){
    console.log('Connected to the db');
})
db.on('error',function(){
    console.log(err);
})


app.get('/feedlist', function(req, res){
	Feed.find({}, function(err, docs){
		if(err) res.json(err);
		else    res.render('feedlist', {Feed: docs});
	});
});



//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname,'client')));

//Body Parser middleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', hacker);

//feedlist route
app.use('/feedlist', hacker);

//comments route
app.use('/comments', hacker);

//post to the db -----add to the feedlist later
app.post('/', function(req,res){
    let feeds = new Feed();
    feeds.text= req.body.text;
    feeds.create_date = req.body.create_date;
    

    feeds.save(function(err){
        if(err){
            console.log(err);
            return;
        } else{
            res.redirect('/feedlist');
        }
    });
});



app.listen(port, function(){
    console.log('server running on port  ' + port );
})