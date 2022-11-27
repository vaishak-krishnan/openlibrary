// usersschema

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usersschema = new schema({
  
    name: { type: String, requied: true },
    email: { type: String, requied: true },
    password: { type: String, requied: true },
    date:{type:Date,default:Date.now()}

});
let userData = mongoose.model("userData", usersschema);
module.exports = userData;