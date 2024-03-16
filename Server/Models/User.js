const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        default:1000
    },
    request:{
        type:Array,
        default:[]
    }
})
const User=mongoose.model('User',userSchema);
module.exports=User;