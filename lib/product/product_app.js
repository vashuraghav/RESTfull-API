// @flow
import * as datastore from '../db/db_handler';

export function create_product(req){
  const product = {
    value: req.body.value,
    code: req.body.code,
    description: req.body.description
  };
  return datastore.create_datastore_product(product);
}

export function get_product(req){
  const product = {
    id: req.params.id,
  };
  return datastore.get_datastore_product(product);
}

export function update_product(req){
  const product = {
    id: req.params.id,
    code: req.body.code,
    value: req.body.value
  };
  return datastore.update_datastore_product(product);
}

export function delete_product(req){
  const product = {
    id: req.params.id,
  };
  return datastore.delete_datastore_product(product);
}
