const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    name: {type: String , required: true},
    prompt: {type: String,required: true},
    photo: {type: String, required: true}
})

const post=mongoose.model('post',schema);

module.exports=post