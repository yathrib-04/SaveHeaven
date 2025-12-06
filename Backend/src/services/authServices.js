// src/services/authServices.js
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const { signAccessToken, signRefreshToken } = require('../utils/token');

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || '10', 10);

async function register({ firstName, lastName, email, password, policyAgreement }) {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('Email already in use');

  const user = new User({
    firstName,
    lastName,
    email,
    policyAgreement: !!policyAgreement,
    googleAuth: false,
  });

  if (password) {
    user.password = await bcrypt.hash(password, SALT_ROUNDS);
  }

  await user.save();

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  return { user, accessToken, refreshToken };
}

async function login({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  if (!user.password) {
    // this account likely created via Google OAuth
    throw new Error('Please login with Google');
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('Invalid credentials');

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  return { user, accessToken, refreshToken };
}

async function googleSignIn({ idToken, googlePayload }) {
  // If frontend sends google payload post-verification or idToken, you can verify in controller
  // Here we expect controller to pass the verified payload as googlePayload
  const email = googlePayload.email;
  let user = await User.findOne({ email });

  if (!user) {
    user = new User({
      firstName: googlePayload.given_name || 'Unknown',
      lastName: googlePayload.family_name || '',
      email,
      googleAuth: true,
      policyAgreement: true, // assume accepted if using Google sign-in (confirm with team policy)
    });
    await user.save();
  } else {
    // ensure googleAuth flag is set for existing user who used Google
    if (!user.googleAuth) {
      user.googleAuth = true;
      await user.save();
    }
  }

  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  return { user, accessToken, refreshToken };
}

async function refreshTokens(oldRefreshToken) {
  // simple refresh flow: verify token and issue new ones (no DB-stored refresh token)
  const { verifyRefreshToken, signAccessToken, signRefreshToken } = require('../utils/token');
  const jwt = require('jsonwebtoken');

  try {
    const payload = verifyRefreshToken(oldRefreshToken); // will throw if invalid
    const user = await User.findById(payload.sub);
    if (!user) throw new Error('User not found');

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    return { accessToken, refreshToken };
  } catch (err) {
    throw new Error('Invalid refresh token');
  }
}

module.exports = {
  register,
  login,
  googleSignIn,
  refreshTokens,
};
