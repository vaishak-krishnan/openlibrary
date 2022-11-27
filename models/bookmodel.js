// libraryschema

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const libraryschema = new schema({

    bookname: { type: String, requied: true },
    bookimgaddress: { type: String, requied: true },
    author: { type: String, requied: true },
    content: { type: String, requied: true },
    date: { type: Date, default: Date.now() }

});
let bookData = mongoose.model("bookData", libraryschema);
module.exports = bookData;