const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const postSchema = mongoose.Schema({
    title:String,
    description:String,
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Posts',postSchema);