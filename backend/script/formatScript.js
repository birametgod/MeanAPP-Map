const Velov = require('../models/velov');
const mongoose = require('mongoose');
const request = require('request');
const db = mongoose.connection;
const url =
  'https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171';

const formatVelov = async () => {
  db.once('open', () => {
    console.log('db connect');

    db.dropCollection('velovs', function(err, result) {
      if (err) {
        console.log('error delete collection');
      } else {
        console.log('delete collection success');
      }
    });
  });

  await request(url, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      const velov = JSON.parse(body);
      velov.features.forEach(velovStruct => {
        db.collection('velovs').insertMany(
          [
            {
              type: velovStruct.type,
              properties: {
                number: velovStruct.properties.number,
                name: velovStruct.properties.name,
                address: velovStruct.properties.address,
                commune: velovStruct.properties.commune,
                bike_stands: velovStruct.properties.bike_stands,
                status: velovStruct.properties.status,
                available_bike_stands: velovStruct.properties.available_bike_stands,
                available_bikes: velovStruct.properties.available_bikes,
                availabilitycode: velovStruct.properties.availabilitycode,
                last_update: velovStruct.properties.last_update,
                last_update_fme: velovStruct.properties.last_update_fme,
                code_insee: velovStruct.properties.code_insee
              },
              geometry: { type: velovStruct.geometry.type, coordinates: velovStruct.geometry.coordinates },
              index: '2dsphere'
            }
          ],
          (err, result) => {
            if (err) {
              console.log('error insert collection velovs');
            }
          }
        );
      });
    }
  });
};

module.exports.formatVelov = formatVelov;
