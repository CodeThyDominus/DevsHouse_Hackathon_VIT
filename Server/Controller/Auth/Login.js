
const jwt=require('jsonwebtoken');
const User=require('../../Models/User');
const bcrypt=require('bcrypt');



const authLogin=async (req,res)=>{
 const {email,password}=req.body;
 if(!email){
    return res.status(400).json({
        message:"Please fill all the details"
    })
 }
 if(!password){
   return res.status(400).json({
       message:"Please fill all the details"
   })
}
 const useremail=email.toLowerCase();
 const isUserEmail=await User.findOne({email:useremail});
  //console.log(isUserEmail);
 if(!isUserEmail){
     return res.status(401).json({
        message:"Invalid Email"
    })
 }
 if( !await bcrypt.compare(password,isUserEmail.pass)){
     return res.status(401).json({
        message:"Incorrect Password"
    })
   
 }
 else{

    const token=jwt.sign({id:email},"student");

   return res.status(200).json({
        ...isUserEmail._doc,
        token,
        message:"User verified"
    })
 }

};
module.exports=authLogin;