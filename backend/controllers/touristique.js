const Touristique = require('../models/touristique');

exports.getPointTouristiques = async (req, res, next) => {
  Touristique.find((err, result) => {
    if (err) {
      return res.status(500).json({
        message: err
      });
    }
    return res.status(200).json(result);
  });
};
