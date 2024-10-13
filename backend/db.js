// backend/db.js

const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Create a Sequelize instance with PostgreSQL database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database Name
  process.env.DB_USER,      // Username
  process.env.DB_PASSWORD,  // Password
  {
    host: process.env.DB_HOST,  // Host
    port: process.env.DB_PORT,  // Port (Default: 5432)
    dialect: 'postgres',        // SQL dialect
    logging: false,             // Disable logging for cleaner output
  }
);

// Test the connection to the database
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Call the test function
testConnection();

module.exports = sequelize;
