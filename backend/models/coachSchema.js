const mongoose = require("mongoose");
const coachSchema = mongoose.Schema({
  firstname: String,
  //   email: String,
  middlename: String,
  lastname: String,
  //   username: String,
  //     password: String,
  // dob: date,
  //     {
  //     type:number,
  //     required:true,
  //     minlength:1,
  //     maxlength:10,
  //     unique:[true , "id already"]
  // },

  coach_username: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
    unique: [true, "username already"],
  },
  coach_password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
  },
  coach_dob: {
    type: Date,
    required: true,
  },
  coach_address: {
    type: String,
    required: true,
  },
  coach_city: {
    type: String,
  },
  coach_pincode: {
    type: Number,
    // minlength: 6,
    // maxlength: 6,
  },
  coach_mno: {
    type: Number,
    required: true,
    // minlength: 10,
    // maxlength: 10,
    unique: [true, "mno already"],
  },
  coach_eid: {
    type: String,
    required: true,
    uniuqe: [true, "email already"],
  },
  sport: {
    type: String,
    required: true,
  },
  program_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "program",
  },
  avail: {
    type: Boolean,
    // required: true,
  },
  fb_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "feedback",
  },
  coach_gender: {
    type: String,
    required: true,
  },
});
const coach = mongoose.model("coach", coachSchema);

module.exports.coach = coach;
