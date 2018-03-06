const mongoose = require('mongoose');
const Product = require('../models/Product');
const keys = require('../../config/keys');

mongoose.connect(keys.mongoURI);

// node this file to seed data into db

const products = [
  new Product({
    name: 'LONDON EXCLUSIVE WINDBREAKER',
    description: 'london themed, mesh inner lining,  fits true to size',
    price: 50,
    imgPath: '/img/london.png'
  }),
  new Product({
    name: "BRAVES BOMBER in NAVY",
    description: 'limited release from our collection, full embroidery on back',
    price: 110,
    imgPath: '/img/samplebravesbomber.png'
  }),
  new Product({
    name: 'NYC 1 OF 50 LIMITED RELEASE HOODIE',
    description: 'limited release from NYC collection only (50) made, multicolor design',
    price: 40,
    imgPath: '/img/oneof50hoodie.png'
  }),
  new Product({
    name: "CHARLOTTE PULLOVER JACKET",
    description: 'purple inner lining, all custom logos/lettering are fully embroidered',
    price: 40,
    imgPath: '/img/samplhornetspullover.png'
  }),
  new Product({
    name: "NYC BOMBER JACKET",
    description: 'red inner lining, special tagging, full embroidery/tackle twill logos on the back',
    price: 110,
    imgPath: '/img/nycbomber.png'
  }),
  new Product({
    name: "NYC 'ONE OF FEW' HOODIE",
    description: 'one of few graphic on front, cotton fleece, fits true to size',
    price: 40,
    imgPath: '/img/oneoffewhoodie.png'
  }),
  new Product({
    name: 'NYC Tee in Navy',
    description: '100% cotton',
    price: 25,
    imgPath: '/img/samplnyc.png'
  }),
  new Product({
    name: 'LA EXCLUSIVE COLLAB WARM UP JERSEY',
    description: 'Los Angeles inspired jersey',
    price: 25,
    imgPath: '/img/lakertee.png'
  }),
  new Product({
    name: 'SAMPLE BASEBALL JERSEY',
    description: 'the jersey speaks for itself',
    price: 30,
    imgPath: '/img/samplbaseball.png'
  }),
  new Product({
    name: "'ANNIVERSARY' VARSITY JACKET - BLACK/MULTICOLOR",
    description: 'fits true to size, 100% wool shell, 100% genuine leather sleeves',
    price: 110,
    imgPath: '/img/samplevarsity.png'
  }),
  new Product({
    name: "NYC 'ONE OF FEW' T-SHIRT",
    description: 'fits true to size, cotton construction',
    price: 25,
    imgPath: '/img/oneoffew.png'
  }),
  new Product({
    name: 'BRAVES Tee in NAVY',
    description: 'sample graphics on front chest, part of ON TOUR collection',
    price: 25,
    imgPath: '/img/samplbraves.png'
  }),
]

let done = 0;
products.forEach(product => {
  product.save((err, result) => {
    done++;
    if (done === products.length) {
      exit();
    }
  })
});

const exit = () => {
  mongoose.disconnect();
}