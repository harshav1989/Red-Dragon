const express = require('express');
const { createOrder, getOrder, getOrdersByUser } = require('../controllers/orderController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/:orderId', auth, getOrder);
router.get('/', auth, getOrdersByUser);

module.exports = router;
