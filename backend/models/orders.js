const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

// Define the Order model class
class Order extends Model {}

// Initialize the Order model with attributes
Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  createdAt: {  // Changed to camelCase for Sequelize consistency
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Order',  // Changed to singular
  tableName: 'orders',  // Explicitly specify the table name
  timestamps: true,     // Enable Sequelize-managed timestamps
});

// Export the Order model
module.exports = Order;
