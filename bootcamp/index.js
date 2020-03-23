const express = require("express");
const router = express.Router();
const bootcampController = require("./bootcamp.controller");
// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
router.get("/", bootcampController.getAllBootcamp);

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
router.post("/", bootcampController.createBootcamp);

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
router.get("/", bootcampController.deleteBootcamp);

/* exports.getBootcamps = (req, res, next) => {
res.json({ success: true, msg: "All bootcamps" });
};
exports.create = (req, res) => bootcampController.createBootcamp;
 */

module.exports = router;
