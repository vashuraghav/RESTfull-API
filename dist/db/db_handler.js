'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create_datastore_product = create_datastore_product;
exports.get_datastore_product = get_datastore_product;
exports.get_all_product = get_all_product;
exports.update_datastore_product = update_datastore_product;
exports.delete_datastore_product = delete_datastore_product;

var _db_init = require('./db_init');

function create_datastore_product(product_entity) {
  var existing_entity = get_datastore_product(product_entity);
  if (existing_entity === undefined || existing_entity === null) return _db_init.Product.create(product_entity);
  return 'Product already exist';
}
function get_datastore_product(product_entity) {
  var found_entity = _db_init.Product.findOne({ where: { id: product_entity.id } });
  console.log('Found Product', found_entity);
  return found_entity;
}

function get_all_product() {
  return _db_init.Product.findAll();
}

function update_datastore_product(product_entity) {
  var existing_entity = get_datastore_product(product_entity);
  if (existing_entity === undefined || existing_entity === null) return 'Product doesn\'t exist';
  return _db_init.Product.update(product_entity);
}

function delete_datastore_product(product_entity) {
  var existing_entity = get_datastore_product(product_entity);
  if (existing_entity === undefined || existing_entity === null) return 'Product doesn\'t exist';
  return _db_init.Product.delete(product_entity);
}