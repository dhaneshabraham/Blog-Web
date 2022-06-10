const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BlogDb');
const Schema=mongoose.Schema;

var postschema=new Schema({
    imageurl:{type:String},
    dateofpost:{type:String},
    heading:{type:String},
    description:{type:String}  
});

const posts=mongoose.model('posts',postschema);
module.exports=posts;