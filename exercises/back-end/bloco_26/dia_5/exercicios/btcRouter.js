const express = require('express');
const { validateToken } = require('./validateToken');

const router = express.Router();

router.get('/', validateToken, async (_req, res) => {
  const result = await axios.get(ENDPOINTEXTERNALAPI);

  res.status(200).json(result.data);
});

module.exports = router;