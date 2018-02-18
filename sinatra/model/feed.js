import { url } from 'inspector';

var mongoose = require('mongoose');

var feedSchema = mongoose.Schema({
    text:{
        type: string,
        required: true
    },
    create_date:{
        type: Date,
        default : Date.now

    }
});

var feed = module.exports=mongoose.model('feed',feedSchema);

//get feed
module.exports.getFeed = function(callback){
    feed.find(callback)
}