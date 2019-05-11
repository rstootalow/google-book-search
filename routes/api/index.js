// requiring dependencies

const router = require("express").Router();
const bookRoutes = require("./books");

//book routes
router.use("/books", bookRoutes);

//export main books route
module.exports = router;