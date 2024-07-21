const userModel = require("../models/userModel")

exports.getProfile=async(req,res)=>{
    try {
        const usern=req.params.username
        const user=await userModel.find({Username:usern})
        if(!user){
            res.status(404).json({msg:"User not found"})
        }
        res.status(200).send(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
}

exports.editProfile=async(req,res)=>{
    try {
        const usern=req.params.username;
        const update=req.body;
        const options = {
            new: true,
            // upsert: true,    set to true for api testing only        
            runValidators: true
        };
        const updatedUser = await userModel.findOneAndUpdate({ Username:usern }, update, options);
        // if (!updatedUser) {
        //     return res.status(404).json({ message: 'User not found' });
        // }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
    }
}