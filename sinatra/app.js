var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var index = require('./routes/index');
var feedlist = require('./routes/feedlist');
var feed = require('./model/feed')

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


/*app.get('/feedlist',function(req,res){
 feed.getFeed(function(err,data){
     if(err){
         throw err;
        }
        res.send(data);
        console.log(feed)
 })
})*/




var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname,'client')));

//Body Parser middleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', index);

app.listen(port, function(){
    console.log('server running on port  ' + port );
})