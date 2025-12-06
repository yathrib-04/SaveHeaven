// src/Controllers/userController.js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const authServices = require('../services/authServices');

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, policyAgreement } = req.body;
    if (!policyAgreement) return res.status(400).json({ message: 'You must agree to the policy' });

    const result = await authServices.register({ firstName, lastName, email, password, policyAgreement });
    res.status(201).json({
      user: { id: result.user._id, email: result.user.email, firstName: result.user.firstName },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authServices.login({ email, password });
    res.json({
      user: { id: result.user._id, email: result.user.email, firstName: result.user.firstName },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await authServices.refreshTokens(refreshToken);
    res.json(tokens);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.google = async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) return res.status(400).json({ message: 'idToken required' });

    // verify idToken with google
    const ticket = await client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID });
    const payload = ticket.getPayload();

    const result = await authServices.googleSignIn({ googlePayload: payload });
    res.json({
      user: { id: result.user._id, email: result.user.email, firstName: result.user.firstName },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    });
  } catch (err) {
    console.error('Google sign-in error:', err);
    res.status(400).json({ message: 'Google sign-in failed' });
  }
};

exports.me = async (req, res) => {
  // protected route: authMiddleware should attach req.user
  const user = req.user;
  res.json({ user });
};
