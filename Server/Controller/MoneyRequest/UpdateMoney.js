const User = require('../../Models/User');
const bcrypt=require('bcrypt')

const Updatebalance = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, amount,pass } = req.body;
    // console.log(id);
    // console.log(email, amount);
    const sender = await User.findById(id);

    if( !await bcrypt.compare(pass,sender.pass)){
        return res.status(401).json({
         message:"Incorrect Password"
     })
    }
    // Fetch receiver's document
    const receiver = await User.findOne({ email });
    console.log(receiver);
    if(receiver===null){
      return res.status(401).json({
        message:"Invalid User"
    })
    }
    //const recAmount = receiver.amount + amount;

    // Update receiver's amount using $inc operator
    await User.findOneAndUpdate({ email }, { $inc: { amount: amount } });

    // Fetch sender's document
   
    //const senAmount = sender.amount - amount;

    // Update sender's amount using $inc operator
    await User.findByIdAndUpdate(id, { $inc: { amount: -amount } });

    const updatedata = await User.findOneAndUpdate(
        { _id: id },
        { $pull: { request: { email:email} } },
        { new:true } // This option ensures that the updated document is returned
      );
     
    res.json({
      success: true,
      newdata:updatedata,
      message:"Transaction successfully done"
    });
    
  } catch (err) {
    console.log(err);
  }
}

module.exports = Updatebalance;
