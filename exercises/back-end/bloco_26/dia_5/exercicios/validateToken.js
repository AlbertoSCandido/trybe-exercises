function validateToken(req, res, next) {
  const { authorization } = req.headers;

  const expToken = /^[a-zA-Z0-9]/
  if (authorization.length !== 12 || !expToken.test(authorization)) return res.status(401).json({ message: 'Invalid Token' });
  
  next();
}

module.exports = { validateToken };