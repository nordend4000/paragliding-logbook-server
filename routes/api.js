const FlightModel = require("../models/flight")
const GliderModel = require("../models/glider")
const HarnessModel = require("../models/harness")
const ProfileModel = require("../models/profile")
const express = require("express")
const router = express.Router()
const PAGE_SIZE = 15

router.use(function middleware(req, res, next) {
	next()
})

// FLIGHTS
router.post("/post", async (req, res) => {
	const newNumber = req.body.number
	const newTakeOff = req.body.takeOff
	const newWindDir = req.body.windDir
	const newWindSpeed = req.body.windSpeed
	const newStartTime = req.body.startTime
	const newDate = req.body.date
	const newDuration = req.body.duration
	const newAbove = req.body.above
	const newAltitude = req.body.altitude
	const newSpeed = req.body.speed
	const newDistance = req.body.distance
	const newClimb = req.body.climb
	const newSink = req.body.sink
	const newLanding = req.body.landing
	const newComments = req.body.comments
	const newSelectedGlider = req.body.selectedGlider
	const newUrl = req.body.url
	const newPublic_id = req.body.public_id
	const newOriginal_filename = req.body.original_filename

	const flight = new FlightModel({
		number: newNumber,
		takeOff: newTakeOff,
		windDir: newWindDir,
		windSpeed: newWindSpeed,
		startTime: newStartTime,
		date: newDate,
		duration: newDuration,
		landing: newLanding,
		climb: newClimb,
		sink: newSink,
		distance: newDistance,
		comments: newComments,
		above: newAbove,
		altitude: newAltitude,
		speed: newSpeed,
		selectedGlider: newSelectedGlider,
		url: newUrl,
		public_id: newPublic_id,
		original_filename: newOriginal_filename,
	})
	try {
		await flight.save()
		res.send("inserted data")
	} catch (err) {
		console.log(err)
	}
})
router.put("/update", async (req, res) => {
	const id = req.body.id
	const newTakeOff = req.body.takeOff
	const newWindDir = req.body.windDir
	const newWindSpeed = req.body.windSpeed
	const newStartTime = req.body.startTime
	const newDate = req.body.date
	const newDuration = req.body.duration
	const newAbove = req.body.above
	const newAltitude = req.body.altitude
	const newSpeed = req.body.speed
	const newDistance = req.body.distance
	const newClimb = req.body.climb
	const newSink = req.body.sink
	const newLanding = req.body.landing
	const newComments = req.body.comments
	const newSelectedGlider = req.body.selectedGlider
	const newUrl = req.body.url
	const newPublic_id = req.body.public_id
	const newOriginal_filename = req.body.original_filename
	try {
		await FlightModel.findById(id, (err, response) => {
			response.takeOff = newTakeOff
			response.windDir = newWindDir
			response.windSpeed = newWindSpeed
			response.startTime = newStartTime
			response.date = newDate
			response.duration = newDuration
			response.above = newAbove
			response.altitude = newAltitude
			response.Speed = newSpeed
			response.distance = newDistance
			response.climb = newClimb
			response.sink = newSink
			response.landing = newLanding
			response.comments = newComments
			response.selectedGlider = newSelectedGlider
			response.url = newUrl
			response.public_id = newPublic_id
			response.original_filename = newOriginal_filename
			response.save()
			res.send("update ok")
		})
	} catch (err) {
		console.log(err)
	}
})
router.get("/getAll", async (req, res) => {
	FlightModel.find({}, (err, result) => {
		if (err) {
			res.send(err)
		}
		res.send(result)
	})
})
router.get("/get", async (req, res) => {
	const page = parseInt(req.query.page || 0)
	const totalFlight = await FlightModel.countDocuments({})
	FlightModel.find({}, (err, result) => {
		if (err) {
			res.send(err)
		}
		res.send({
			result: result,
			totalPage: Math.ceil(totalFlight / PAGE_SIZE),
		})
	})
		.limit(PAGE_SIZE)
		.skip(PAGE_SIZE * page)
		.sort({ number: "desc" })
})
router.get("/get/:id", async (req, res) => {
	const id = req.params.id
	try {
		await FlightModel.findById(id, (err, response) => {
			res.send(response)
		})
	} catch (err) {
		console.log(err)
	}
})
router.get("/sort/:key/:dir", async (req, res) => {
	const queryObject = { [req.params.key]: req.params.dir }
	try {
		FlightModel.find({})
			.sort(queryObject)
			.limit(PAGE_SIZE)
			.exec(function (err, response) {
				res.send(response)
			})
	} catch (err) {
		console.log(err)
	}
})
router.get("/search/:selectSearch/:search", async (req, res) => {
	const searchObject = { [req.params.selectSearch]: req.params.search }
	console.log(searchObject)
	try {
		FlightModel.find(searchObject).exec(function (err, response) {
			res.send(response)
		})
	} catch (err) {
		console.log(err)
	}
})
router.delete("/delete/:id", async (req, res) => {
	const id = req.params.id
	await FlightModel.findByIdAndRemove(id).exec()
	res.send("deleted")
})
// GLIDERS
router.get("/gliders", async (req, res) => {
	GliderModel.find({}, (err, result) => {
		if (err) {
			res.send(err)
		}
		res.send(result)
	})
})
router.get("/getGlider/:id", async (req, res) => {
	const id = req.params.id
	try {
		await GliderModel.findById(id, (err, response) => {
			res.send(response)
		})
	} catch (err) {
		console.log(err)
	}
})
router.post("/newGlider", async (req, res) => {
	console.log(req.body)
	const newGlider = req.body.glider
	const newBrand = req.body.brand
	const newHours = req.body.hours
	const newControl = req.body.control
	const newPurchase = req.body.purchase

	const glider = new GliderModel({
		glider: newGlider,
		brand: newBrand,
		hours: newHours,
		control: newControl,
		purchase: newPurchase,
	})

	try {
		await glider.save()
		res.send("inserted glider data")
	} catch (err) {
		console.log(err)
	}
})
router.put("/updateGlider", async (req, res) => {
	const id = req.body.id
	const newGlider = req.body.glider
	const newBrand = req.body.brand
	const newHours = req.body.hours
	const newControl = req.body.control
	const newPurchase = req.body.purchase
	try {
		await GliderModel.findById(id, (err, response) => {
			response.glider = newGlider
			response.brand = newBrand
			response.hours = newHours
			response.control = newControl
			response.purchase = newPurchase

			response.save()
			res.send("update glider ok")
		})
	} catch (err) {
		console.log(err)
	}
})
router.delete("/deleteGlider/:id", async (req, res) => {
	const id = req.params.id
	await GliderModel.findByIdAndRemove(id).exec()
	res.send("deleted")
})
// HARNESS
router.get("/harness", async (req, res) => {
	HarnessModel.find({}, (err, result) => {
		if (err) {
			res.send(err)
		}
		res.send(result)
	})
})
router.get("/getHarness/:id", async (req, res) => {
	const id = req.params.id
	try {
		await HarnessModel.findById(id, (err, response) => {
			res.send(response)
		})
	} catch (err) {
		console.log(err)
	}
})
router.post("/newHarness", async (req, res) => {
	console.log(req.body)
	const newIsHarness = req.body.isHarness
	const newHarness = req.body.harness
	const newHarnessBrand = req.body.harnessBrand
	const newHarnessPurchase = req.body.purchaseHarness
	const newParachute = req.body.parachute
	const newParachuteBrand = req.body.parachuteBrand
	const newParachutePurchase = req.body.purchaseParachute
	const newParachuteControl = req.body.controlParachute

	const harness = new HarnessModel({
		isHarness: newIsHarness,
		harness: newHarness,
		harnessBrand: newHarnessBrand,
		purchaseHarness: newHarnessPurchase,
		parachute: newParachute,
		parachuteBrand: newParachuteBrand,
		purchaseParachute: newParachutePurchase,
		controlParachute: newParachuteControl,
	})
	try {
		await harness.save()
		res.send("inserted harness data")
	} catch (err) {
		console.log(err)
	}
})
router.put("/updateHarness", async (req, res) => {
	const id = req.body.id
	const newIsHarness = req.body.isHarness
	const newHarness = req.body.harness
	const newHarnessBrand = req.body.harnessBrand
	const newHarnessPurchase = req.body.purchaseHarness
	const newParachute = req.body.parachute
	const newParachuteBrand = req.body.parachuteBrand
	const newParachutePurchase = req.body.purchaseParachute
	const newParachuteControl = req.body.controlParachute
	try {
		await HarnessModel.findById(id, (err, response) => {
			response.isHarness = newIsHarness
			response.harness = newHarness
			response.harnessBrand = newHarnessBrand
			response.purchaseHarness = newHarnessPurchase
			response.parachute = newParachute
			response.parachuteBrand = newParachuteBrand
			response.purchaseParachute = newParachutePurchase
			response.controlParachute = newParachuteControl

			response.save()
			res.send("update harness ok")
		})
	} catch (err) {
		console.log(err)
	}
})
router.delete("/deleteHarness/:id", async (req, res) => {
	const id = req.params.id
	await HarnessModel.findByIdAndRemove(id).exec()
	res.send("deleted")
})
// PROFILE
router.get("/profile", async (req, res) => {
	ProfileModel.find({}, (err, result) => {
		if (err) {
			res.send(err)
		}
		res.send(result)
	})
})
router.post("/newProfile", async (req, res) => {
	const newTotalHours = req.body.totalHours
	const newFlightNumber = req.body.flightNumber

	const profile = new ProfileModel({
		totalHours: newTotalHours,
		flightNumber: newFlightNumber,
	})

	try {
		await profile.save()
		res.send("inserted profile data")
	} catch (err) {
		console.log(err)
	}
})
router.put("/updateProfile", async (req, res) => {
	const id = req.body.id
	const newTotalHours = req.body.totalHours
	const newFlightNumber = req.body.flightNumber
	try {
		await ProfileModel.findById(id, (err, response) => {
			response.totalHours = newTotalHours
			response.flightNumber = newFlightNumber
			response.save()
			res.send("update profile ok")
		})
	} catch (err) {
		console.log(err)
	}
})
router.delete("/deleteProfile/:id", async (req, res) => {
	const id = req.params.id
	await ProfileModel.findByIdAndRemove(id).exec()
	res.send("deleted")
})

module.exports = router
