const express = require('express');
const app = express();
const port = 7070;

app.use(express.json());

app.use('/bounties', require('./bountyRoutes'))

app.listen(port, () => {
  console.log(`success. port ${port} is running`)
});

