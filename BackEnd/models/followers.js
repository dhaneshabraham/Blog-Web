const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BlogDb');
const Schema=mongoose.Schema;

var followerschema=new Schema({
    follower:{type:String}
});

const followers=mongoose.model('followers',followerschema);
module.exports=followers;