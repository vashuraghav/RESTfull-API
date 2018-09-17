'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _db_init = require('../db/db_init');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _product_app = require('../product/product_app');

var controller = _interopRequireWildcard(_product_app);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_db_init.Product.sync().then(function () {
  return console.log('DB initialised');
});

app.use(_bodyParser2.default.json());

app.post('/product/create', function (req, res) {
  controller.create_product(req);
  return res.send('Data Created');
});

app.get('/product/:id', function (req, res) {
  var data = controller.get_product(req);
  return res.send(data);
});

app.post('/product/update/:id', function (req, res) {
  controller.update_product(req);
  return res.send('Data Updated');
});

app.post('/product/delete/:id', function (req, res) {
  controller.delete_product(req);
  return res.send('Data Deleted');
});

app.listen(3000, function () {
  return console.log('Listening on 3000');
});