const User=require('../../Models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();

const SignUp=async (req,res)=>{
 try{
   const {username,email,password}=req.body;
   if(!email){
    return res.status(400).json({
        message:"Please fill all the details"
    })
 }
 if(!username){
    return res.status(400).json({
        message:"Please fill all the details"
    })
 }
 if(!password){
    return res.status(400).json({
        message:"Please fill all the details"
    })
 }

   const isUserEmail=await User.findOne({email});
  

    if(isUserEmail){
         return res.status(422).json({
            message:"Email Already Registered"
        })
     
    }
    else{
    let hashpassword;
    try{
     hashpassword= await bcrypt.hash(password,10);

    }catch(err){
        console.log(err);
        res.status(404).json({
            success:false,
            message:"Account Not Created"
        })
    }
    const token=jwt.sign({id:email},process.env.SECRET_KEY);
    try{
    const newuser= new User({name:username,email,pass:hashpassword});
    const response=await newuser.save();
    const {pass,...rest}=response._doc;
    res.json({
    
        sucsess:true,
        message:"Account Created Successfully",
        ...rest,
        token

    })
   }
   catch(err){
    console.log(err);
    res.status(404).json({
        sucsess:false,
        message:"Account Already Exist"
    })
   }
    }
 }catch(err){
    console.log(err);
    res.status(404).json({
        sucsess:false,
        message:"Account Not Created"
    })
 }
}

module.exports=SignUp;