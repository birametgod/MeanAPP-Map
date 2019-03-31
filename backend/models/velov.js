const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const velovSchema = Schema({
  type: {
    type: String,
    default: "Feature"
  },
  Properties: {
    number: Number,
    name: String,
    address: String,
    address2: String,
    commune: String,
    nmarrond: Number,
    bonus: String,
    pole: String,
    lat: Number,
    lng: Number,
    bike_stands: Number,
    status: String,
    available_bike_stands: Number,
    available_bikes: Number,
    availabilitycode: Number,
    availability: String,
    banking: Number,
    gid: Number,
    last_update: String,
    last_update_fme: String,
    code_insee: String,
    langue: String,
    etat: String,
    nature: String,
    titre: String,
    description: String
  },
  geometry: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    }
  }
});
