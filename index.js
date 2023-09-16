const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
require("dotenv").config()
const PORT = process.env.PORT || 8080

const userRoute = require("./routes/user.route")
app.use("/music", userRoute)

app.listen(PORT, () => {
	console.log(`port started at ${PORT}`)
})
