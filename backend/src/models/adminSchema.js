const mongoose =  require("mongoose");
const {Schema} = require("mongoose");

const adminSchema  =  new Schema({
    username : {
        type:String
    },
    password:{
        type : String
    }
})

const Admin = mongoose.model("Admin",adminSchema);

module.exports = Admin;