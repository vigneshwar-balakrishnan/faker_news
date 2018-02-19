var express = require('express');
var router = express.Router();


router.get('/',function(req ,res ,next){
    res.render('index.html');
});

router.get('/feedlist',function(req ,res ,next){
    res.render('feedlist.ejs');
});

router.get('/comments/:id',function(req ,res ,next){
    res.render('comments.ejs');
});

module.exports = router;