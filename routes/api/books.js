// requiring dependencies

const router = require("express").Router();

const booksController = require("../../controller/booksController");

//route for api endpoint
router.route("/")
    .get(booksController.findAll).post(booksController.create);


//route for api:id endpoint

router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

    //export books routes
    module.exports = router;