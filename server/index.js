const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./Router/router');
const db = require('./Models/index')
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(router);


db.sequelize.sync().then(()=> {

  console.log('db is running!')

  app.listen(PORT, (err) => {
    console.log('Server is bloody running!');
  });
})
