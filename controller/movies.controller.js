const asyncWrapper = require("../helpers/asyncwWapper");
const customApiError = require("../helpers/customAPIerror");
const Movies = require("../model/Movies.model");

//! create

let CreateMovie = asyncWrapper(async (req, res) => {
  if (req.user.isAdmain) {
    const newMovie = await Movies.create(req.body);
    return res
      .status(201)
      .json({ error: false, message: "Movie Added Sucessfully", newMovie });
  }
  throw customApiError("You are not allowed", 403);
});

//! Update
let updateMovie = asyncWrapper(async (req, res) => {
  let { id } = req.params;
  if (req.user.isAdmain) {
    const UpdatedMovie = await Movies.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json({
      error: false,
      message: "Movie Updated Sucessfully",
      UpdatedMovie,
    });
  }
  throw customApiError("You are not allowed", 403);
});

//! Delete
let DeleteMovie = asyncWrapper(async (req, res) => {
  let { id } = req.params;
  if (req.user.isAdmain) {
    await Movies.findByIdAndDelete(id);
    return res.status(200).json({
      error: false,
      message: "Movie deleted Sucessfully",
    });
  }
  throw customApiError("You are not allowed", 403);
});

//! GET
let GETMovie = asyncWrapper(async (req, res) => {
  let { id } = req.params;

  const movie = await Movies.findById(id);
  return res.status(200).json({
    error: false,
    message: "Movie Fetched Sucessfully",
    movie,
  });
});

//! GET Random
let GETRandomMovie = asyncWrapper(async (req, res) => {
  let type = req.query.type;
  let movie;
  if (type === "series") {
    movie = await Movies.aggregate([
      {
        $match: { isSeries: true },
      },
      { $sample: { size: 1 } },
    ]);
  } else {
    movie = await Movies.aggregate([
      {
        $match: { isSeries: false },
      },
      { $sample: { size: 1 } },
    ]);
  }
  return res
    .status(200)
    .json({ error: false, message: "Random movie fetched", movie });
});

//! GET all
let GetAllMovie = asyncWrapper(async (req, res) => {
    if (req.user.isAdmain) {
     const movies= await Movies.find();
      return res.status(200).json({
        error: false,
        message: "All Movie fetced Sucessfully",movies:movies.reverse()
      });
    }
    throw customApiError("You are not allowed", 403);
  });
  

module.exports = {
  CreateMovie,
  updateMovie,
  DeleteMovie,
  GETMovie,
  GETRandomMovie,
  GetAllMovie
};
