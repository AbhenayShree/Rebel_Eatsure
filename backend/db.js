// backend/db.js

const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Check if required environment variables are set
const requiredEnvVars = ['DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_PORT'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}. Please check your .env file.`);
}

// Create a Sequelize instance with PostgreSQL database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database Name
  process.env.DB_USER,      // Username
  process.env.DB_PASSWORD,  // Password
  {
    host: process.env.DB_HOST,  // Host
    port: process.env.DB_PORT,  // Port (Default: 5432)
    dialect: process.env.DB_DIALECT || 'postgres', // SQL dialect (default to postgres)
    logging: false,             // Disable logging for cleaner output
  }
);

// Test the connection to the database
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.');
  } catch (error) {
    // Enhanced error handling
    console.error('Unable to connect to the database:', error.message);
  }
};

// Call the test function
testConnection();

module.exports = sequelize;
