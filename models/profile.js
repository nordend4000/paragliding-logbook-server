const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
	flightNumber: {
		type: Number,
		required: true,
	},
	totalHours: {
		type: Number,
		required: true,
	},
})

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile
