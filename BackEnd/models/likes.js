const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BlogDb');
const Schema=mongoose.Schema;

var likesschema=new Schema({
    postheading:{type:String}
});

const likes=mongoose.model('likes',likesschema);
module.exports=likes;