const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const touristSchema = Schema({
  type: {
    type: String,
    default: 'Feature'
  },
  Properties: {
    id: String,
    type: String,
    type_detail: String,
    nom: String,
    adresse: String,
    codepostal: String,
    commune: String,
    telephone: String,
    producteur: String,
    date_creation: String,
    last_update: String,
    last_update_fme: String
  },
  geometry: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  }
});

touristSchema.index({ geometry: '2dsphere' });

module.exports = mongoose.model('pointouristiques', touristSchema);
