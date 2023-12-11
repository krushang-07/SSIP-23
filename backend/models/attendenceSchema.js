const mongoose = require("mongoose");
const attendenceSchema = mongoose.Schema({
    
    
    program_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        minlength:1,
        maxlength:100 
    },
    
    attendence_date: {
        type:Date,
        required:true,
    
    },
    coach_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    at_status: {
        type: Boolean,
        required:true    
    }
});

const attendence = mongoose.model("attendence", attendenceSchema);

module.exports.attendence = attendence;
