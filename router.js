const router = require('express').Router();

const booksRouter = require('./routes/books.router');

//RESOURCES
router.use('/books', booksRouter);

module.exports = router;