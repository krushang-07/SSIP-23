const express = require("express");
const routes = express.Router();

const { feedback } = require("../models/feedbackSchema");
const { program } = require("../models/programSchema");

routes.get("/", async (req, res) => {
  const check = await program.findOne({
    institute_name: req.body.institute_name,
  }).select({_id:1});

  if (!check) {
    res.status(422).send("zs valid data");
  } else {
    const hel = await feedback.find({ program_id: check });
    if (!hel) {
      res.status(422).send("Enter valid data");
    } else {
      res.send(hel);
    }
  }
});

routes.post("/", async (req, res) => {
  const result = await createFeedback(req);
  res.send(result);
});

async function createFeedback(req) {
  const feedback1 = new feedback({
    program_id: req.body.program_id,
    feedback_desc: req.body.feedback_desc ,
    institute_name:req.body.institute_name,
    coach_id: req.body.coach_id,

  });
  try {
    const result = await feedback1.save();
    console.log(result);
    return result;
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[field].message);
  }
}

module.exports = routes;
