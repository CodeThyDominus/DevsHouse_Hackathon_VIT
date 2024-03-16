const User=require('../../Models/User');

const RequestMoney= async(req,res)=>{
  try{
    const{id}=req.params;
    console.log(id);
    const{email,amount}=req.body;
  console.log(id,amount);
  const userdetails=await User.findById(id);

  const data={name:userdetails.name,email:userdetails.email,amount};
  const updatedata=await User.findOneAndUpdate({email},{ $push: { request: data }});
   res.json({
    success:true,
    data
   })
  }catch(err){
    console.log(err);
  }
}
module.exports=RequestMoney;