const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

});

const user = mongoose.model("User",User);
module.exports = user;