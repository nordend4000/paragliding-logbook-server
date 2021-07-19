const mongoose = require("mongoose")

const HarnessSchema = new mongoose.Schema({
	isHarness: {
		type: Boolean,
		required: true,
	},
	harness: {
		type: String,
		required: false,
	},
	harnessBrand: {
		type: String,
		required: false,
	},
	purchaseHarness: {
		type: Date,
		required: false,
	},
	parachute: {
		type: String,
		required: false,
	},
	parachuteBrand: {
		type: String,
		required: false,
	},
	purchaseParachute: {
		type: Date,
		required: false,
	},
	controlParachute: {
		type: Date,
		required: false,
	},
})

const Harness = mongoose.model("Harness", HarnessSchema)

module.exports = Harness
