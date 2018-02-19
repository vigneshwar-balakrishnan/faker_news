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

var Feed = module.exports = mongoose.model('Feed',feedSchema);
