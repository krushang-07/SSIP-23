const express = require("express");
const routes = express.Router();
const { program } = require("../models/programSchema");

routes.get("/", async(req ,res) => {
  if (req.body.institute_name === "PDPU") {
    const check = await program.findOne({
      institute_name : req.body.institute_name,
    });
    if (!check) {
      res.status(422).send("Enter valid data");
    } else {
      res.send(check);
    }
  }
})

routes.post("/", async (req, res) => {
  
  const result = await createProgram(req);
  res.send(result);
});

async function createProgram(req) {
  const program1 = new program({

    // p_id : req.body.p_id,
    p_name : req.body.p_name,
    p_desc : req.body.p_desc,
    institute_name: req.body.institute_name,
    coach_id : req.body.coach_id,
    start_date : req.body.start_date ,
    end_date : req.body.end_date ,


    
  });
  try {
    const result = await program1.save();
    console.log(result);
    return result;
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[field].message);
  }
}

module.exports = routes;
