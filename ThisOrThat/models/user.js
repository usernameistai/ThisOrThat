var mongoose              = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
   username: String,
   password: String
});

// add a bunch pf methods that come with the userschema 
// that are necessary for user authentication
UserSchema.plugin(passportLocalMongoose);
// in the mongo DB we get a "salt" and a "hash" huge long digits,
// the above helps the "salt" decode the password in "hash"

module.exports = mongoose.model("User", UserSchema);