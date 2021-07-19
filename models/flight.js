const mongoose = require("mongoose")

const FlightSchema = new mongoose.Schema({
	number: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	startTime: {
		type: String,
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
	takeOff: {
		type: String,
		required: true,
	},
	windDir: {
		type: String,
		required: false,
	},
	windSpeed: {
		type: Number,
		required: false,
	},
	landing: {
		type: String,
		required: false,
	},
	above: {
		type: Number,
		required: false,
	},
	altitude: {
		type: Number,
		required: false,
	},
	speed: {
		type: Number,
		required: false,
	},
	climb: {
		type: Number,
		required: false,
	},
	sink: {
		type: Number,
		required: false,
	},
	distance: {
		type: Number,
		required: false,
	},
	comments: {
		type: String,
		required: false,
	},
	selectedGlider: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	public_id: {
		type: String,
		required: false,
	},
	original_filename: {
		type: String,
		required: false,
	},
})

const Flight = mongoose.model("Flight", FlightSchema)

module.exports = Flight
