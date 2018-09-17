'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default('test', 'root', 'mysql', {
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

var Product = exports.Product = sequelize.define('product', {
  description: {
    type: _sequelize2.default.STRING,
    allowNull: true
  },
  code: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  value: {
    type: _sequelize2.default.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true,
  freezeTableName: true,
  paranoid: true,
  charset: 'utf8',
  collate: 'utf8_unicode_ci'
});

// force: true will drop the table if it already exists