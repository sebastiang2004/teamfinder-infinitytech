import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
// import { errorHandler } from '../utils/error.js';
// import jwt from 'jsonwebtoken';

export const signup = async(req, res) =>{
  try {
      const {username, organization, address, email, password} = req.body; 
      
      const user = await User.findOne({username});

      if (user){
          return res.status(400).json({error: "User already exists"});
      }

      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
          username,
          organization,
          address,
          email,
          password: hashedPassword,
          
      });
      
      await newUser.save();

      res.status(201).json({
          username: newUser.username,
          organization: newUser.organization,
          address:newUser.address,
          email:newUser.email,
          password: newUser.password,
          //profilePic: newUser.profilePic,
      })

  } catch (error) {
      console.log("Error in signup controller", error.message);
      res.status(500).json({error: "Internal Server Error"});
  }
};


export const login = async(req, res) =>{
  try {
      const {email, password} = req.body;
      const user = await User.findOne({email});
      const isPasswordCorect = await bcrypt.compare(password, user?.password || "")
      
      if(!email || !isPasswordCorect){
          return res.status(400).json({error: "Invalid email or password"});
      };

      res.status(200).json({message: "Login succesfuly! "});

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Logout success!');
};
