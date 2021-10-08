const express = require('express');
const app = express();
// const userRoutes = require('./routes/userRoutesMongo');
const userRoutesMySQL = require('./routes/userRoutesMySQL')

const PORT = 3000;

app.use(express.json());

app.use('/user', userRoutesMySQL);
// app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
