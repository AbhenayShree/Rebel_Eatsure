// backend/index.js

const express = require('express');    // Import Express
const bodyParser = require('body-parser'); // For parsing JSON requests
const sequelize = require('./db');     // Import Sequelize instance
const dotenv = require('dotenv');      // To use environment variables

dotenv.config(); // Load .env variables

const app = express(); // Initialize Express app

// Middleware
app.use(bodyParser.json()); // Enable JSON body parsing

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to Group Order Management API!');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  // Test the DB connection
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});
