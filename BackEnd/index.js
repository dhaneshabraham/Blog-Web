const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const postsdata=require('./models/posts');
const followersdata=require('./models/followers');
const postlikesdata=require('./models/likes')
const mongoose =require("./db.js");
const app=express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
// api for latest posts
app.get('/latestposts',function(req,res){    
    postsdata.find()
                .then(function(posts){
                    res.send(posts);
                });
});
// api for getting number of followers
app.get('/followers',function(req,res){    
    followersdata.find()
                .then(function(followers){
                    res.send(followers);
                });
});

// api for getting individual post likes
app.get('/postlikes',function(req,res){    
    postlikesdata.find()
                .then(function(likes){
                    res.send(likes);
                });
});



app.listen(3000,()=> 
console.log('Server started @ port : 3000'));