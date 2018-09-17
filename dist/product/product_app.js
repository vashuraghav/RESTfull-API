'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create_product = create_product;
exports.get_product = get_product;
exports.update_product = update_product;
exports.delete_product = delete_product;

var _db_handler = require('../db/db_handler');

var datastore = _interopRequireWildcard(_db_handler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function create_product(req) {
  var product = {
    value: req.body.value,
    code: req.body.code,
    description: req.body.description
  };
  return datastore.create_datastore_product(product);
}
function get_product(req) {
  var product = {
    id: req.params.id
  };
  return datastore.get_datastore_product(product);
}

function update_product(req) {
  var product = {
    id: req.params.id,
    code: req.body.code,
    value: req.body.value
  };
  return datastore.update_datastore_product(product);
}

function delete_product(req) {
  var product = {
    id: req.params.id
  };
  return datastore.delete_datastore_product(product);
}