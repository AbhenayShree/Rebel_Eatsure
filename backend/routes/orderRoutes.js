const express = require('express');
const router = express.Router();
const Order = require('../models/orders'); // Import Order model

// Create a new order
router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: 'Order creation failed', error: error.message });
  }
});

// Get all orders
router.get('/', async (req, res) => { 
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve orders', error: error.message });
  }
});

// Get a single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve order', error: error.message });
  }
});

// Update an order by ID
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.update(req.body);
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Failed to update order', error: error.message });
  }
});

// Delete an order by ID
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.status(204).send(); // 204 No Content response for successful deletion
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }
});

module.exports = router;
