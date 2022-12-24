const controller = require("../controller/controller.js")
const express = require('express');
const router = express.Router();



////router.post("/", controller.postData)
router.get("/getData", controller.getData)

module.exports = router