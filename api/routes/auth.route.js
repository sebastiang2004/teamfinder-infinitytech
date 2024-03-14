import express from 'express';
import passport from 'passport';
import { signup, signout, login, verifyToken } from '../controllers/auth.controller.js';
import { authenticateToken } from '../middlewares/authmiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/signout', signout);

router.get('/verifiy', authenticateToken, verifyToken)

// LinkedIn routes
router.get('/linkedin', passport.authenticate('linkedin'));
router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

// GitHub routes
router.get('/github',
  passport.authenticate('github'));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Google routes
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

export default router;
