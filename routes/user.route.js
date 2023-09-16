const express = require("express")
const { getMusicAPI } = require("../controllers/user.controller")
const router = express.Router()

router.get("/my-api", getMusicAPI)

module.exports = router
