var mongoose = require('mongoose');

var feedSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default : Date.now

    }
});

var Feed = module.exports.Feed=mongoose.model('Feed',feedSchema);

//get feed
/*module.exports.getFeed = function(callback,limit){
    feed.find(callback).limit(limit);
}*/