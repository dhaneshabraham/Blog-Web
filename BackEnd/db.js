const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/BlogDb',(err)=>
{
    if(!err)
    {
    console.log('DB Connection Successful')
    }
    else{
        console.log('Unsuccessful')
    }
})
module.exports=mongoose