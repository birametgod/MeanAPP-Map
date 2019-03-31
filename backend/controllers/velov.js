const Velov = require("../models/velov");

exports.getVelov = (req, res, next) => {
  Velov.find({
    geometry: {
      $near: {
        $maxDistance: 1000,
        $geometry: {
          type: "Point",
          coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        }
      }
    }
  }).find((err, results) => {
    if (err) {
      return res.status(500).json({
        message: err
      });
    }
    console.log(results);
    return res.status(200).json(results);
  });
};
