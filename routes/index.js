const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.getUsernames);
router.get("/new", indexController.getNew);
router.post("/new", indexController.createUsernamePost);

module.exports = router;
