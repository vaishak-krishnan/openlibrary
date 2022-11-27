const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://vaishakkrishnan:11Knights@fsdmain.4y3vqzk.mongodb.net/digitallibrary', {
    useNewUrlParser: true,//to enable new features of mongidb
    useUnifiedTopology: true//to enable new features of mongidb
})
    .then(() => {
        console.log("mongodb is connected successfully");

    })
    .catch((err) => {
        console.log("mongodb not connected" + err);
    });
