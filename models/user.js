const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema ({
    email: {
        type:String,
        required: true
    },
});

userSchema.plugin(passportLocalMongoose);  // ye automatically hashing , salting , username and password create kr deta

module.exports = mongoose.model("User", userSchema);