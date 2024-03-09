import express from 'express';
import passport from 'passport';
import { signup, signout, login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/signout', signout);

// LinkedIn routes
router.get('/linkedin', passport.authenticate('linkedin'));
router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

// GitHub routes
router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

// Google routes
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

export const signup = async (req, res) => {
    const { username, organization, address, email, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }
  
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
    res.status(201).json({ message: 'User created successfully' });
  };

export default router;