const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstName :{
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model("Users",userSchema);