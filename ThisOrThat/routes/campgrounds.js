var express     = require("express"),
    router      = express.Router(), // chnage app.get to router.get
    Campground  = require("../models/campground"),
    middleware  = require("../middleware"); // index.js is a special name, doesn't require more referencing

// INDEX - show all campgrounds
// ============================
router.get("/", function(req, res){
   // console.log(req.user); // req.user contains username and ID
    // Get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {                                                        // variable
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user, page: "campgrounds"});
            // need to get from db no longer from the array
        }   // from above {name we want to give it:   data we want to pass in}
    });
});

// CREATE - add new campgrounds to database
// ========================================
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to campgrounds array
    var name     = req.body.name; // grab the name
    var price    = req.body.price;
    var image    = req.body.image; // grab the image
    var desc     = req.body.description; // grab the description
    var author   = {
        id: req.user._id, // req.user contains information about currently logged in user
        username: req.user.username
    };
    var newCampground = {name: name, price: price, image: image, description: desc, author: author};
    // create a new campground and save to db, was campgrounds.push(newCampground) array
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated); //newlyCreated campground from database
            res.redirect("/campgrounds"); // redirect back to campgounds page
        }
    });
});

// NEW - show form to create new campground
// ========================================
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
// ===========================================
router.get("/:id", function(req, res){
    // find the campground with provided ID, then popn. the comments on said campground, then executing the fn
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground);
            // render show template with the campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT CAMPGROUND ROUTE changed in v11 to handle error
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            req.flash("error", "Campground not in database");
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", {campground: foundCampground}); 
        }
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        } else {             // could do updatedCampground.id
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
    // redirect somewhere (show page)
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;