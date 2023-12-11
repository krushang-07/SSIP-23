const express = require("express");
const routes = express.Router();
const { attendence } = require("../models/attendenceSchema");
const { coach } = require("../models/coachSchema");

routes.get("/", async (req, res) => {
  const check = await coach.findOne({
    coach_username: req.body.coach_username,
  }).select({_id:1});

  if (!check) {
    res.status(422).send("zs valid data");
  } else {
    const hel = await attendence.find({ coach_id: check });
    if (!hel) {
      res.status(422).send("Enter valid data");
    } else {
      res.send(hel);
    }
  }
});

routes.post("/", async (req, res) => {
  const result = await createAttendence(req);
  res.send(result);
});

async function createAttendence(req) {
  const attendence1 = new attendence({
    program_id: req.body.program_id,
    attendence_date: req.body.attendence_date,
    coach_id: req.body.coach_id,
    at_status: req.body.at_status,
  });
  try {
    const result = await attendence1.save();
    console.log(result);
    return result;
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[field].message);
  }
}

module.exports = routes;
