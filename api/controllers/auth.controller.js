import passport from 'passport';
import {Strategy as LinkedInStrategy} from 'passport-linkedin-oauth2';
import {Strategy as GitHubStrategy} from 'passport-github2';
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth';
import Organization from '../models/organizations.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
// LinkedIn Strategy
// passport.use(new LinkedInStrategy({
//   clientID: process.env.LINKEDIN_CLIENT_ID,
//   clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/auth/linkedin/callback",
//   scope: ['r_emailaddress', 'r_liteprofile'],
// }, function(accessToken, refreshToken, profile, done) {
//   // Find or create user in your database
// }));
//
// // GitHub Strategy
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/api/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log(profile)
    let user = await User.findOne({githubId: profile.id});

    if (!user) {
      user = new User({
        githubId: profile.id,
        name: profile.username || 'Unknown',
        organization: profile.company || '',
        email: profile?.emails?.[0].value,
        address: '',
      });
      await user.save();
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

//
// // Google Strategy
// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/auth/google/callback"
// }, function(accessToken, refreshToken, profile, done) {
//   // Find or create user in your database
// }));



export const verifyToken = async(req, res) => {
  res.stastus(200).json({
    message: 'Token is valid',
    user: req.user
  })
}

export const signup = async (req, res) => {
  try {
    const {name, organization_name, organization_address, email, password} = req.body;
    console.log(req.body)
      // Poti adauga mai multa validare, am verificat doar daca field-urile sunt prezente. Ar trebui sa verifici lungimea si tipul lor ca sa fim safe.

    if(!name || !organization_name || !organization_address || !email || !password) {
      return res.status(400).json({
        error: true,
        messsage: "All fields are required (username, organization_name, organization_address, email, password)"
      })
    }


    const user = await User.findOne({email});
    if (user) {
      return res.status(400).json({error: "User already exists"});
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newOrganization = new Organization({
      name: organization_name,
      address: organization_address,
    })


    const newUser = new User({
      name: name,
      organization: newOrganization._id,
      email: email,
      password: hashedPassword,
      role: "Organization Admin"
    });

    await newUser.save();

    newOrganization.manager = newUser._id
    await newOrganization.save();

    const token = jwt.sign(
      {
        userId: newUser._id,
        organizationId: newOrganization._id,
        email: newUser.email,
        role: newUser.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )
    res.status(201).json({
      email: newUser.email,
      token
    })

  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({error: "Internal Server Error"});
  }
};



// Login
export const login = async (req, res) => {
  try {
    const {email, password} = req.body;


    const user = await User.findOne({email});
    const isPasswordCorect = await bcrypt.compare(password, user?.password || "")

    if (!email || !isPasswordCorect || !user) {
      return res.status(400).json({error: "Invalid email or password"});
    }

    const organization = await Organization.findOne({ manager: user._id });


    const token = jwt.sign(
      {
        userId: user._id,
        organizationId: organization._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.status(201).json({
      email: user.email,
      token
    })

  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// Logout
export const signout = (res) => {
  res.clearCookie('access_token').status(200).json('Logout success!');
};
