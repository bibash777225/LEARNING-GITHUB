const { fetchBook, addBook, deleteBook, editBook } = require("../controllers/book.Controller");

const router = require(" express").Router

router.route("/books").get(fetchBook).post(addBook) // restfull api mah milxa yesto rest api bako vaye mildinah
router.route("books/:id").delete(deleteBook).patch(editBook)

module.exports = router