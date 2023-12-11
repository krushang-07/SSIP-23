const express = require("express");
const routes = express.Router();
const { coach } = require("../models/coachSchema");
const { admin } = require("../models/AdminSchema");

routes.post("/", async (req, res) => {
  if (req.body.Role === "") {
    res.status(422).send("invalid data");
  } else {
    if (req.body.Role === "coach") {
      const check = await coach.findOne({ coach_username: req.body.Username });
      if (!check) {
        res.status(422).send("Enter valid data");
      } else {
        if (check.coach_password === req.body.Password) {
          res.status(200).send(check);
        } else {
          res.status(422).send("Enter valid data");
        }
      }
    }
    if (req.body.Role === "admin") {
      const check = await admin.findOne({
        admin_username: req.body.Username,
      });
      if (!check) {
        res.status(422).send("Enter valid data");
      } else {
        if (check.admin_password === req.body.Password) {
          res.status(200).send(check);
        } else {
          res.status(422).send("Enter valid data");
        }
      }
    }
  }
});

module.exports = routes;
