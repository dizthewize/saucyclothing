module.exports = app => {
  app.get('/api/customers', (req, res) => {
    const customers = [
      {id: 1, firstName: 'Cassius', lastName: 'Clay'},
      {id: 2, firstName: 'Mansa', lastName: 'Musa'},
      {id: 3, firstName: 'Malcolm', lastName: 'X'}
    ]

    res.json(customers);
  });
};
