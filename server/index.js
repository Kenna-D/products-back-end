require('dotenv').config();

const express = require ('express');
const app = express();
const massive = require ('massive');
const ctrl = require('./products_controller');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get('/api/products', ctrl.getAll);
app.get('/api/products/:id', ctrl.getOne);
app.post('/api/products', ctrl.create);
app.put('/api/products/:id', ctrl.update);
app.delete('/api/products/:id', ctrl.delete);


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
})
  .then(dbInstance => {
    app.set('db', dbInstance)
  
    app.listen(SERVER_PORT, () => console.log(`DB and Server is running on ${SERVER_PORT}`));
})
  .catch(err => console.log(err));
