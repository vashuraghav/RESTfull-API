// @flow
import express from 'express' ;
import {Product} from '../db/db_init';
import bodyParser from 'body-parser';
import * as controller from '../product/product_app';
const app = express();

Product.sync().then(() => console.log('DB initialised'));

app.use(bodyParser.json());

app.post('/product/create', (req, res) => {
  controller.create_product(req);
  return res.send('Data Created');
});

app.get('/product/:id', (req, res) => {
  const data = controller.get_product(req);
  return res.send(data);
});

app.post('/product/update/:id', (req, res) => {
  controller.update_product(req);
  return res.send('Data Updated');
});

app.post('/product/delete/:id', (req, res) => {
  controller.delete_product(req);
  return res.send('Data Deleted');
});

app.listen(3000, () => console.log('Listening on 3000'));
