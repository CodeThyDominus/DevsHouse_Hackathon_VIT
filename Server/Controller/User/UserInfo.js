const User=require('../../Models/User');

const UserInfo=async(req,res)=>{
  try{
    const {id}=req.params;
    const userdata=await User.findById(id);
    const{pass,...rest}=userdata._doc
    res.json({
        success:true,
        profile:rest,
    })
  }catch(err){
    console.log(err);
  }
}
module.exports=UserInfo;