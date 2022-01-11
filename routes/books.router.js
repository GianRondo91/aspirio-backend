const router = require('express').Router();
const bookController = require('../controller/book.controller');

/* getAll */
router.get('/', async(req, res) => {
  try {
    res.json(await bookController.getAll());
  }catch (error){
    res.status(500).json({
      message: error
    });
  }

});


/* update */
router.put('/:id', async(req, res) => {
  try{
    let id = req.params.id;
    let status = 'Usuario actualizado con exito';

    let result = await bookController.update(req.body, id);

    res.json({ status, result });
  }catch (error){
    res.status(500).json({
      message: error
    });
  }
});

module.exports = router;
