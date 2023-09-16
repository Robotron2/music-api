const express = require("express")
const { getMusicAPI, getSingleMusic } = require("../controllers/musicController")
const router = express.Router()

//Get all music
router.get("/my-api", getMusicAPI)
//Get single music
router.get("/my-api/:id", getSingleMusic)

module.exports = router

//https://robo-music-api.onrender.com/music/my-api
