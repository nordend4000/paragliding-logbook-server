const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
	flightNumber: {
		type: Number,
		required: false,
	},
	totalHours: {
		type: Number,
		required: false,
	},
	spotNumber: {
		type: Number,
		required: false,
	},
	spotTotal: {
		type: Number,
		required: false,
	},
})

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile
