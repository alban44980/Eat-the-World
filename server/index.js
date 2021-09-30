const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const PORT = 3002;

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log('Server is bloody running!');
});
