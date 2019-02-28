var mongoose = require("mongoose");
/* 
ALl of this is to enable the person who has logged in to make a comment without entering
their name every time
*/
var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Comment", commentSchema);