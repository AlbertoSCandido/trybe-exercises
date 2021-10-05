function validateEmailAndPassword(req, res, next) {
  const { email, password } = req.body;

  const expEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!email || !password || !expEmail.test(email) || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: 'email or password is incorrect'});
  }

  next();
}

module.exports = { validateEmailAndPassword }