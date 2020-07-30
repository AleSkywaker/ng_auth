const express = require('express');
const app = express();
const main = require('./routes/index');
const PORT = 3600;

require('./database');

app.use(express.json());
app.use('/api', main);

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
});
