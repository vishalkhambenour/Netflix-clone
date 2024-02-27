const asyncWrapper = require("../helpers/asyncwWapper");
const customApiError = require("../helpers/customAPIerror");
const { decryptpass, encrypt } = require("../helpers/cryptpass");
const User = require("../model/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// !Register
let Register = asyncWrapper(async (req, res, next) => {
  let { username, email, password } = req.body;
  let Password = encrypt(password);
  let newUser = await User.create({ username, email, password: Password });
  return res
    .status(201)
    .json({ error: false, message: "user created ", newUser });
});
// ! Login

let login = asyncWrapper(async (req, res, next) => {
  let { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw customApiError("Email does not exist", 500);
  }
  let originalText = decryptpass(user.password);
  if (originalText === password) {
    let token = jwt.sign(
      { id: user._id, isAdmain: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    let { password, ...info } = user._doc;
    return res
      .status(201)
      .json({ error: false, message: "Login Sucessful", info, token });
  }
  throw customApiError("Password does not match", 500);
});

// !UPDATE MIDDLEWARE

let update = asyncWrapper(async (req, res) => {
  let { id } = req.params;
  if (req.user.id === id || req.user.isAdmain) {
    if (req.body.password) {
      req.body.password = encrypt(req.body.password);
    }

    const updateuser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    return res
      .status(200)
      .json({ error: false, message: "updated Sucessfully", updateuser });
  }
  throw customApiError("you can update only your account", 403);
});

// !DELETE
let Delete = asyncWrapper(async (req, res) => {
  let { id } = req.params;
  if (req.user.id === id || req.user.isAdmain) {
    await User.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ error: false, message: "Deleted Sucessfully" });
  }
  throw customApiError("you can Delete only your account", 403);
});

// !GET

let Getuser = asyncWrapper(async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(id);
  let { password, ...info } = user._doc;
  return res
    .status(200)
    .json({ error: false, message: "Fetched Sucessfully", info });
});

//! GET ALL
let Getallusers = asyncWrapper(async (req, res) => {
  let query = req.query.new;
  if (req.user.isAdmain) {
    let users = query
      ? await User.find().sort({ _id: -1 }).limit(10)
      : await User.find();
    return res
      .status(200)
      .json({ error: false, message: "Users list fetched", users });
  }
  throw customApiError("You are not allowed to see all users", 403);
});

// ! Get users stats

let stats = asyncWrapper(async (req, res) => {
  const today = new Date();
  const lastyear = today.setFullYear(today.setFullYear() - 1);
  const monthsArray = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December"
  ]
  const data =await User.aggregate([
    {
        $project:{
            month:{$month:"$createdAt"}

        }
    },
    {
        $group:{
            _id:"$month",
            total:{$sum:1}
        }
    }
  ])
  return res.status(200).json({error:false,data})
});

module.exports = { Register, login, update, Delete, Getuser, Getallusers,stats};
