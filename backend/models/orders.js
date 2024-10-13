const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'orders', // This should match the table name
  tableName: 'orders', // Explicitly specify the table name
  timestamps: false // Set to true if you want Sequelize to manage createdAt and updatedAt fields
});

module.exports = Order;
