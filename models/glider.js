const mongoose = require("mongoose")

const GliderSchema = new mongoose.Schema({
	glider: {
		type: String,
		required: true,
	},
	brand: {
		type: String,
		required: true,
	},
	hours: {
		type: String,
		required: true,
	},
	purchase: {
		type: Date,
		required: false,
	},
	control: {
		type: Date,
		required: false,
	},
})

const Glider = mongoose.model("Glider", GliderSchema)

module.exports = Glider
