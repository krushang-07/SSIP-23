const mongoose = require("mongoose");
const feedbackSchema = mongoose.Schema({
  feedback_desc:{
    type:String,
    required:true
  },
  institute_name:{
    type:String,
    required:true,
  },

  coach_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    
  },
  program_id: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    
  }
});

const feedback = mongoose.model("feedback", feedbackSchema);

module.exports.feedback = feedback;
