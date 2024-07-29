const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config()

exports.getProfile=async(req,res)=>{
    try {
        const usern=req.params.username
        const user=await userModel.find({Username:usern})
        if(!user){
            res.status(404).json({msg:"User not found"})
            return
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

exports.signUp=async(req,res)=>{
    try {
        const {Username,Password,Email,Name}=req.body;

        bcrypt.genSalt(10,(err,salt)=>{
           // console.log(salt);
           bcrypt.hash(Password,salt,async (err,hash)=>{
              //  console.log(hash);
                
                let createdUser=await userModel.create({
                    Name,
                    Username,
                    Email,
                    Password:hash
                })
                const uid=createdUser._id;
                const payload = { user: { id: uid } };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' },
                    (err, token) => {
                      if (err) throw err;
                      res.cookie('token', token, {
                        httpOnly: true,
                        // secure: process.env.NODE_ENV === 'production',
                        // sameSite: 'Strict',
                        maxAge: 3600000, // 1 hour
                      });
                      res.status(200).json({ token, user: createdUser });
                    }
                );
                
           })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({"msg":"There was some error"})
    }
}

exports.signIn=async (req, res) => {
    const { Username, Password } = req.body;
  
    try {
      let user = await userModel.findOne({ Username });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const payload = { user: { id: user._id } };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: 'Strict',
            maxAge: 3600000, // 1 hour
          });
          res.status(200).json({ token, user });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };