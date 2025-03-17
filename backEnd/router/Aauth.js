const express = require("express");
const router = express.Router();
const Auser = require("../model/Auser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_sec = "dineshval";
const getuser = require('../middleware/getuser');
const { body, validationResult } = require("express-validator");
const multer = require('multer');

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Posting the user data to the database
router.post(
  "/a",
  upload.single('csvDocument'),
  [
    body("name", "Enter a valid name").optional().isLength({ min: 6 }),
    body("password", "Enter a valid password").optional().isLength({ min: 6 }),
    body("email").isEmail(),
  ],
  async (req, res) => {
    let success = false;

    const result = validationResult(req);
    if (!result.isEmpty()) {
      success = false;
      return res.send({ errors: result.array() });
    }
    try {
      if (await Auser.findOne({ email: req.body.email })) {
        success = false;
        return res.send({ message: "Email already exists" });
      } else {
        const salt = await bcrypt.genSalt(10);
        const sec_pass = await bcrypt.hash(req.body.password, salt);

        const newUser = new Auser({
          name: req.body.name,
          email: req.body.email,
          password: sec_pass,
          csvDocument: {
            data: req.file.buffer,
            contentType: req.file.mimetype
          }
        });
        await newUser.save();
      }
      const data = {
        user: {
          id: Auser.id, // This gives the user's id
        },
      };
      success = true;
      const jwtdata = jwt.sign(data, jwt_sec); // This sign gives you the web token
      console.log(jwtdata);
      res.json({ success, jwtdata });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error occurred");
    }
  }
);

// Checking if the given email exists in the database or not
router.post(
  "/alogin", // It is used to login 
  [
    body("password", "Enter a valid password").exists(),
    body("email", "Enter a valid email").isEmail()
  ],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await Auser.findOne({ email });
      if (!user) {
        success = false;
        return res.send({ errors: "Enter a valid email or password" });
      }

      const comparepassword = await bcrypt.compare(password, user.password); // It compares the password of body and user (database)
      if (!comparepassword) {
        success = false;
        return res.send({ success, errors: "Enter a valid email or password" });
      }
      const data = {
        user: {
          id: user.id, // This gives the user's id
        },
      };
      const jwtdata = jwt.sign(data, jwt_sec); // This sign gives you the web token
      success = true;
      res.json({ success, jwtdata });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server occurred");
    }
  }
);

// Getting the logged in user's details
router.post(
  "/agetuser",
  getuser,
  async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await Auser.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server occurred");
    }
  }
);

// ->

const { getCSVDocument } = require("../controllers/userController");

router.get('/csv/:userId', getCSVDocument);

module.exports = router;

