// backend/index.js

const express = require('express');     
const bodyParser = require('body-parser'); 
const sequelize = require('./db');      
const dotenv = require('dotenv');       
const orderRoutes = require('./routes/orderRoutes'); // Import order routes

dotenv.config(); // Load environment variables

const app = express(); // Initialize Express app

// Middleware
app.use(bodyParser.json()); // Enable JSON body parsing

// Register the Order Routes under '/api/orders'
app.use('/api/orders', orderRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to Group Order Management API!');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  // Test the DB connection and sync models
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    await sequelize.sync(); // Sync the models with the database
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Database connection or syncing failed:', error);
  }
});
