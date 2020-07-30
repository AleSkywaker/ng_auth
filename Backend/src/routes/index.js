const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.send('Bienvenido ' + email);
});

module.exports = router;
