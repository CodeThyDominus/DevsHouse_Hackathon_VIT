const User = require('../../Models/User');

const Updatebalance = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, amount } = req.body;
    console.log(email, amount);

    // Fetch receiver's document
    const receiver = await User.findOne({ email });
    //const recAmount = receiver.amount + amount;

    // Update receiver's amount using $inc operator
    await User.findOneAndUpdate({ email }, { $inc: { amount: amount } });

    // Fetch sender's document
    const sender = await User.findById(id);
    //const senAmount = sender.amount - amount;

    // Update sender's amount using $inc operator
    await User.findByIdAndUpdate(id, { $inc: { amount: -amount } });

    const updatedata = await User.findOneAndUpdate(
        { _id: id },
        { $pull: { request: { email:email} } },
        { new: true } // This option ensures that the updated document is returned
      );

    res.json({
      success: true,
      message: "Amount added successfully"
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = Updatebalance;
