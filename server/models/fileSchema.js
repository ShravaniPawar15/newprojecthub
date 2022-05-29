const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    domain:{
        type:String,
        required: true,
    },
    department:{
        type:String,
        required: true,
    },
    lang:{
        type: String,
        required: true,
    },
    academicYear:{
        type: Number,
        required: true,
    },
    files:{
        type: String,
        // required: true,
    },
    guideName:{
        type: String,
        required: true,
    },
   
});

const File = mongoose.model('FILE', fileSchema);
module.exports = File;
