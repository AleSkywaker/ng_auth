const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log('concetado a base de datos');
  })
  .catch((err) => console.log(err));
