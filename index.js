const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

require("dotenv").config()
const PORT = process.env.PORT || 8080

const userRoute = require("./routes/user.route")
app.use("/music", userRoute)

app.listen(PORT, () => {
	console.log(`port started at ${PORT}`)
})
