require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const api = require("./routes/api")

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(api)

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
	console.log("Mongo connected!")
})

app.listen(port, () => {
	console.log(`Server running on port ${port}!`)
})
