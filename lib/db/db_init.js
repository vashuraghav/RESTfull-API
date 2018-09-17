// @flow
'use strict';

import Sequelize from 'sequelize';

const sequelize = new Sequelize('test', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});

export const Product = sequelize.define('product', {
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},{
  timestamps: true,
  underscored: true,
  freezeTableName: true,
  paranoid: true,
  charset: 'utf8',
  collate:'utf8_unicode_ci'
});

// force: true will drop the table if it already exists
