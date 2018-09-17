// @flow
import {Product} from './db_init';


export function create_datastore_product(product_entity){
  const existing_entity = get_datastore_product(product_entity);
  if(existing_entity === undefined || existing_entity === null)
    return Product.create(product_entity);
  return 'Product already exist' ;
}

export function get_datastore_product(product_entity){
  const found_entity  = Product.findOne({ where: {id: product_entity.id}});
  return found_entity;
}

export function get_all_product(){
  return Product.findAll();
}

export function update_datastore_product(product_entity){
const existing_entity = get_datastore_product(product_entity);
if(existing_entity === undefined || existing_entity === null)
  return 'Product doesn\'t exist' ;
return Product.update(product_entity);
}

export function delete_datastore_product(product_entity){
const existing_entity = get_datastore_product(product_entity);
if(existing_entity === undefined || existing_entity === null)
  return 'Product doesn\'t exist' ;
return Product.delete(product_entity);
}
