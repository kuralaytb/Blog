const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog').then(()=>{
    console.log('Connected to Mongodb')
}).catch((e)=>{
    console.log('Failed to connect Mongodb')
})