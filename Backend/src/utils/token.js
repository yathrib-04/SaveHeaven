// src/utils/token.js
const jwt = require('jsonwebtoken');

const signAccessToken = (user) => {
  const payload = { sub: user._id, email: user.email };
  const secret = process.env.JWT_ACCESS_SECRET || 'access-secret';
  const expiresIn = process.env.ACCESS_TOKEN_EXPIRES || '15m';
  return jwt.sign(payload, secret, { expiresIn });
};

const signRefreshToken = (user) => {
  const payload = { sub: user._id };
  const secret = process.env.JWT_REFRESH_SECRET || 'refresh-secret';
  const expiresIn = process.env.REFRESH_TOKEN_EXPIRES || '7d';
  return jwt.sign(payload, secret, { expiresIn });
};

const verifyAccessToken = (token) => {
  const secret = process.env.JWT_ACCESS_SECRET || 'access-secret';
  return jwt.verify(token, secret);
};

const verifyRefreshToken = (token) => {
  const secret = process.env.JWT_REFRESH_SECRET || 'refresh-secret';
  return jwt.verify(token, secret);
};

module.exports = {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
