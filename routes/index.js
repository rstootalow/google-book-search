// require all dependencies
const path = require("path");
const router = require("express").Router();
const apiRouters = require("./api");

// API routing
router.use("/api", apiRoutes);

//if no api routes exist redirect to react application
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//export router

module.exports = router;