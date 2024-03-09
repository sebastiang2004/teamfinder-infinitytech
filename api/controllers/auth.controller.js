import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();
// LinkedIn Strategy
passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function(accessToken, refreshToken, profile, done) {
  // Find or create user in your database
}));

// GitHub Strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/github/callback"
}, function(accessToken, refreshToken, profile, done) {
  // Find or create user in your database
}));

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
}, function(accessToken, refreshToken, profile, done) {
  // Find or create user in your database
}));

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


export const signout = (res) => {
  res.clearCookie('access_token').status(200).json('Logout success!');
};