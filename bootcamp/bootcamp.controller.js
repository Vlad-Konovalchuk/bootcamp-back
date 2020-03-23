const Bootcamp = require("./bootcamp.model");
const asyncErrors = require("../middleware/asyncErrorWrap");
const createBootcamp = asyncErrors(async (req, res) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: bootcamp
  });
});
const getAllBootcamp = async (req, res) => {
  res.json({ msg: "Get All" });
};
const deleteBootcamp = async (req, res) => {
  res.json({ msg: "Deleted" });
};

module.exports = {
  createBootcamp,
  getAllBootcamp,
  deleteBootcamp
};
