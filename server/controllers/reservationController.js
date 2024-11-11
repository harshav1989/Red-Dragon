const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  const { date, time, tableNumber } = req.body;

  try {
    const newReservation = new Reservation({
      userId: req.user.id,
      date,
      time,
      tableNumber,
    });

    const reservation = await newReservation.save();
    res.json(reservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.reservationId).populate('userId', 'username email');
    if (!reservation) {
      return res.status(404).json({ msg: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getReservationsByUser = async (req, res) => {
  try {
    const reservations = await Reservation.find({ userId: req.user.id });
    res.json(reservations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
