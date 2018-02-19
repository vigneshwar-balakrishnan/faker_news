var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    comment:{
        type: String,
        required: true
    },
    
    // create_date:{
    //     type: Date,
    //     default : Date.now

    // }
});

var Comment = module.exports = mongoose.model('Comment',commentSchema);
