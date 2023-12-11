const express = require("express");
const routes = express.Router();
const { coach } = require("../models/coachSchema");

routes.post("/", async (req, res) => {
  // const { avail } = req.body;

  // if (!avail) {
  //   return res.status(400).json({ error: "Path `avail` is required." });
  // }

  // // Process the data with the avail field

  // res.status(200).json({ message: "Data received successfully" });
  const result = await createCoach(req);
  res.send(result);
});

async function createCoach(req) {
  const coach1 = new coach({
    firstname: req.body.firstname,
    middlename: req.body.middlename,
    lastname: req.body.lastname,
    coach_username: req.body.coach_username,
    coach_password: req.body.coach_password,
    coach_dob: req.body.coach_dob,
    coach_address: req.body.coach_address,
    coach_city: req.body.coach_city,
    coach_pincode: req.body.coach_pincode,
    coach_mno: req.body.coach_mno,
    coach_eid: req.body.coach_eid,
    sport: req.body.sport,
    coach_gender: req.body.coach_gender,
  });
  try {
    const result = await coach1.save();
    console.log(result);
    return result;
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[field].message);
  }
}

module.exports = routes;
