const { Book } = require('../models');

class BookController {
    constructor(){}

    async getAll(){
        return Book.findAll();
    }

    async update(book, id){
        return Book.update(book, { where: { id } });
    }
}

let bookController = new BookController;

module.exports = bookController;