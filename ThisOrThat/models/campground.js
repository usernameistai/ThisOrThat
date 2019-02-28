var mongoose = require("mongoose");

// Schema set up
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String, // can add more stuff here (https://mongoosejs.com/docs/guide.html)
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String,
   },
   comments: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Comment"
   }]
});

module.exports = mongoose.model("Campground", campgroundSchema);