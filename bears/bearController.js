const router = require('express').Router();

const Bear = require('./bearModel');

router
  .route('/')
  .get((req, res) => {

  Bear
    .find({})
    .then(bears => {    //to limit the number of query results set limit Bear.find({}).limit(20).then(bears => {})
    res.status(200).json(bears);
  })
    .catch(err => {
      res.status(500).json(err);
    })
  })
  .post((req, res) => {
    const bear = new Bear(req.body);
  
  bear
    .save()
    .then(savedBear => {
      res.status(201).json(savedBear);
    })
    .catch(err => {
      res.status(500).json(err);
    })
    
  });

router
  .route('/:id')
  .get((req, res) => {

    Bear
      .findById(req.params.id)
      .then(bears => {
        res.status(200).json(bears);
      })
      .catch(err => {
        res.status(500).json(err);
      })
    res.status(200).json({ route: '/api/bears/' + req.params.id });
  })
  .delete((req, res) => {
    res.status(200).json({ status: 'please implement DELETE functionality' });
  })
  .put((req, res) => {
    res.status(200).json({ status: 'please implement PUT functionality' });
  });

module.exports = router;
