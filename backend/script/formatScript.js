const Velov = require('../models/velov');
const mongoose = require('mongoose');
const request = require('request');
const db = mongoose.connection;

exports.formatVelov = () => {
  const url =
    'https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171';
  db.once('open', () => {
    console.log('db connect');

    db.dropCollection('velovs', (err, result) => {
      if (err) {
        console.log('error delete collection');
      } else {
        console.log('delete collection velovs success');
      }
    });
  });

  request(url, (err, response, body) => {
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
              geometry: { type: velovStruct.geometry.type, coordinates: velovStruct.geometry.coordinates }
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

exports.formatQuartiers = () => {
  const url =
    'https://download.data.grandlyon.com/wfs/grandlyon?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=adr_voie_lieu.adrquartier&SRSNAME=urn:ogc:def:crs:EPSG::4171';
  db.once('open', () => {
    console.log('db connect');

    db.dropCollection('quartiers', function(err, result) {
      if (err) {
        console.log('error delete collection');
      } else {
        console.log('delete collection poinTouristiques success');
      }
    });
  });

  request(url, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      const quartiers = JSON.parse(body);
      quartiers.features.forEach(quartier => {
        db.collection('quartiers').insertMany(
          [
            {
              type: quartier.type,
              properties: {
                nom: quartier.properties.nom,
                datecreation: quartier.properties.datecreation
              },
              geometry: { type: quartier.geometry.type, coordinates: quartier.geometry.coordinates }
            }
          ],
          (err, result) => {
            if (err) {
              console.log('error insert collection quariers');
            }
          }
        );
      });
      Velov.createIndexes({ geometry: '2dsphere' });
    }
  });
};

exports.formatPoinTouristiques = () => {
  const url =
    'https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=sit_sitra.sittourisme&SRSNAME=urn:ogc:def:crs:EPSG::4171';
  db.once('open', () => {
    console.log('db connect');

    db.dropCollection('pointouristiques', function(err, result) {
      if (err) {
        console.log('error delete collection');
      } else {
        console.log('delete collection quartiers success');
      }
    });
  });

  request(url, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      const poinTouristiques = JSON.parse(body);
      poinTouristiques.features.forEach(poinTouristique => {
        db.collection('pointouristiques').insertMany(
          [
            {
              type: poinTouristique.type,
              properties: {
                id: poinTouristique.properties.id,
                type: poinTouristique.properties.type,
                type_detail: poinTouristique.properties.type_detail,
                nom: poinTouristique.properties.nom,
                adresse: poinTouristique.properties.adresse,
                codepostal: poinTouristique.properties.codepostal,
                commune: poinTouristique.properties.commune,
                telephone: poinTouristique.properties.telephone,
                producteur: poinTouristique.properties.producteur,
                date_creation: poinTouristique.properties.date_creation,
                last_update: poinTouristique.properties.last_update,
                last_update_fme: poinTouristique.properties.last_update_fme
              },
              geometry: { type: poinTouristique.geometry.type, coordinates: poinTouristique.geometry.coordinates }
            }
          ],
          (err, result) => {
            if (err) {
              console.log('error insert collection poinTouristiques');
            }
          }
        );
      });
    }
  });
};
