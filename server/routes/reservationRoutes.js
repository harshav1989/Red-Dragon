const express = require('express');
const { createReservation, getReservation, getReservationsByUser } = require('../controllers/reservationController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createReservation);
router.get('/:reservationId', auth, getReservation);
router.get('/', auth, getReservationsByUser);

module.exports = router;
