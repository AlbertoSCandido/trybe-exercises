const express = require('express');
const router = express.Router();

const teamsArray = [];

const validateMiddleware = function (req, res, next) {
  const { name, initials, country } = req.body;

  if (!name || name.length <= 5) {
    res.status(400).json({ message: "Invalid data" });
  }

  if(initials.length !== 3 || /^[A-Z]*$/.test(initials)) {
    res.status(400).json({ message: "Invalid data" });
  }

  if (country.length != 3) {
    res.status(400).json({ message: "Invalid data" });
  }

  next();
}

router.post('/', validateMiddleware, (req, res) => {
  const { name, initials, country, league } = req.body;
  const newTeam = {};
  newTeam.name = name;
  newTeam.initials = initials;
  newTeam.country = country;
  if (league) newTeam.league = league;
  
  teamsArray.push(newTeam);
  
  res.status(200).send('ok');
});

router.get('/', (_req, res) => {
  res.status(200).send({ "teams": teamsArray });
});

module.exports = router;