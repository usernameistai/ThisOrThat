var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {   name: "Camp Sunset",
        image:"https://farm1.staticflickr.com/594/32604660462_d44352f876.jpg",
        description: "Only like camping around sunset? You're an awkward bugger.. Need a lot more dialogue to make this a maningful description. Need a lot more dialogue to make this a maningful description."
    },
    {   
        name: "Monsters Lurking",
        image: "https://farm4.staticflickr.com/3633/3713605728_556c61abfe.jpg",
        description: "Where be the monsters.... Don't look far, or for too long... Need a lot more dialogue to make this a maningful description. Need a lot more dialogue to make this a maningful description."
    },
    {
        name: "Beware... beware Camping!",
        image: "https://farm9.staticflickr.com/8567/16329188331_33aa262e80.jpg",
        description: "see how the campsite has been cleared by monsters, dare ye pitch here?? Need a lot more dialogue to make this a maningful description. Need a lot more dialogue to make this a maningful description."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){console.log(err);
        } else {
            console.log("removed campgrounds");
           // Add a few campgrounds
            data.forEach(function(seed){ // seed will represent one of these
                Campground.create(seed, function(err, campground){
                    if(err){console.log(err);
                    } else {
                        console.log("Add a campground");
                        // create a comment
                        Comment.create({
                            text: "This place is great, good to get away",
                            author: "Marge"
                            }, function(err, comment){
                                if(err){console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment");
                                }
                        });
                    }
                }); 
            });
        }
    });
}

module.exports = seedDB;