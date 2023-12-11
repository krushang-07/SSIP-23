const express = require("express");
const routes = express.Router();
const { admin } = require("../models/AdminSchema");

routes.post("/", async (req, res) => {
  const result = await createAdmin(req);
  res.send(result);
});

async function createAdmin(req) {
  const check = await admin
    .findOne({
      admin_username: req.body.senior_admin_id,
    })
    .select({ _id: 1 });
  if (!check) {
    return res.status(400).send("Enter valid senior id");
  } else {
    console.log(check._id);
    //   const oneid  =
    const admin1 = new admin({
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      admin_username: req.body.admin_username,
      admin_password: req.body.admin_password,
      admin_dob: req.body.admin_dob,
      admin_mno: req.body.admin_mno,
      admin_eid: req.body.admin_eid,
      senior_admin_id: check._id,
      admin_gender: req.body.admin_gender,
    });
    try {
      const result = await admin1.save();
      console.log(result);
      return result;
    } catch (ex) {
      for (field in ex.errors) console.log(ex.errors[field].message);
    }
  
}}

module.exports = routes;
