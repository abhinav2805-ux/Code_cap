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
        const user=await userModel.find({Username:usern});
        if(!user){
          return res.status(404).json({msg:"User Not Found"})
        }
        console.log(usern);
        const update=req.body;
      //   const pw=update.Password;
        //  console.log(update);
        //  console.log(user);
        //  console.log(pw);
        // console.log(user[0].Password);
      //   const isMatch = await bcrypt.compare(pw, user[0].Password);
      // if (!isMatch) {
      //   return res.status(400).json({ msg: 'Invalid Credentials' });
      // }
    //   Object.keys(update).forEach(key => {
    //     if (key == 'Name' || key=='Gender'  && typeof update[key] === 'string') {
    //         update[key] = update[key].toLowerCase();
    //     }
    // });
        console.log(update);
        
        const options = {
            new: true,
            // upsert: true,    set to true for api testing only        
            runValidators: true
        };
        const updatedUser = await userModel.findOneAndUpdate({ Username:usern }, update, options);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(updatedUser);
        
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
              let createdUser
                try {
                    createdUser=await userModel.create({
                    Name,
                    Username,
                    Email,
                    Password:hash
                })
                } catch (error) {
                  console.log(error);
                  return res.status(500).json({"msg":"Error"})
                }
               
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
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'Strict',
                        maxAge: 3600000, // 1 hour
                      });
                      res.cookie('user', Username, {
                   //     httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'Strict',
                        maxAge: 3600000, // 1 hour
                      });
                      return res.status(200).json({ token, user:createdUser.Username });
                    }
                );
                
           })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"There was some error"})
    }
}

exports.signIn=async (req, res) => {
    const { Username, Password } = req.body;
    console.log("signin");
    
    try {
      let user = await userModel.findOne({ Username });
      if (!user) {
        console.log("nahi mila")
        return res.status(400).json({ msg: 'Invalid Credentials' });
        
      }
      
      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch) {
        console.log("galat dala h tumne")
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
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 3600000, // 1 hour
          });
          res.cookie('user', Username, {
          //  httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 3600000, // 1 hour
          });
          //console.log(user.Username);
          return res.status(200).json({ token, username:user.Username});
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  };

  exports.signout = (req, res) => {
    try {
      res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
    });
    res.clearCookie('user', {
    //  httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
  });
    return res.status(200).json({ msg: 'Successfully logged out' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({msg: "Trouble logging out"})
    }
  
};

exports.findUsers = async (req, res) => {
  try {
      const { Text, Gender, Year, College, Branch,Status } = req.query;
      const regex = Text ? new RegExp(Text, 'i') : null; // 'i' for case-insensitive
      const regexClg = College ? new RegExp(College, 'i') : null; 
      const regexBr = Branch ? new RegExp(Branch, 'i') : null; 
      const regexSt = Status ? new RegExp(Status, 'i') : null; 
      // Construct a query object based on available parameters
      let query = {};

      if (Gender) {query.Gender = Gender;
  }    if (Year){ query.Year = Year;
     } if (College){ query.College = regexClg;}
      if (Branch) {query.Branch = regexBr;}   
      if (Status) {query.Status = regexSt;}     
      
      if (regex) {
        query.$or = [
            { Name: regex },
            { Role: regex },
            { Skill: { $in: [regex] } }
        ];
    }
    const projection = {
      Name: 1,
      Email: 1,
      Gender: 1,
      Skill: 1,
      Role: 1,
      Username: 1,
      College: 1,
      Branch: 1,
      Year: 1,
      Github:1,
      Status:1,
      LinkedIn:1,
  };
      // Execute the database query
      const users = await userModel.find(query).select(projection);

      // Respond with the combined result set
      res.status(200).json(users);
  } catch (error) {
      console.error('Error finding users:', error);
      res.status(500).json({ msg: 'Server error' });
  }
};
