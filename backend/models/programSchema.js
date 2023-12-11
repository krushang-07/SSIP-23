const mongoose = require("mongoose");
const programSchema = mongoose.Schema({

    p_name:{
        type:String,
        required:true,
        minlength:1,
        maxlength:100 
    },
    p_desc:{
        type:String,
        required:true,
        minlength:1,
        maxlength:100 
    },
    institute_name: {
        type:String,
        required:true,
        minlength:1,
        maxlength:10 
    },
    coach_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"coach"
    },
    
    start_date: {
        type:Date,
        required:true, 
    },

    end_date: {
        type:Date,
        required:true,
    
    }
    
    
});

const program = mongoose.model("program", programSchema);

module.exports.program = program;
