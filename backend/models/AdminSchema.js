const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  firstname: String,
  middlename: String,
  lastname: String,
  admin_username: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
    unique: [true, "username already"],
  },
  admin_password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
  },
  admin_dob: {
    type: Date,
    required: true,
  },
  admin_mno: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
    unique: [true, "mno already"],
  },
  admin_eid: {
    type: String,
    required: true,
    uniuqe: [true, "email already"],
  },
  senior_admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
  admin_gender: {
    type: String,
    required: true,
  },
});

const admin = mongoose.model("admin", adminSchema);

module.exports.admin = admin;
