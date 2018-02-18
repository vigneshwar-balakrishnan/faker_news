var express = require('express');
var router = express.Router();
 //Feed = require('./model/feed');

router.get('/',function(req ,res ,next){
    res.render('index.html');
});
//if working shift to feedlist
router.post("/", (req, res) => {
    var myData = new Feed(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
module.exports = router;