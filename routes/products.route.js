const express = require('express');
let router = express.Router();

router.route('/').get((req, res) => {
  var products = [
    { id: 1, title: 'LED TV', price: 50000 },
    { id: 2, title: 'OLED TV', price: 100000 },
    { id: 3, title: 'QLED TV', price: 500000 },
  ];
  //   res.json(products);

  res.render('products', {
    pageTitle: 'Using Pug !',
    pageHeader: 'List Of Products',
    products,
  });
});

module.exports = router;
