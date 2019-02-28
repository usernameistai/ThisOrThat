var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/user");

// Root route
router.get("/", function(req, res){
    res.render("landing"); // refers to landing .ejs
});
// =======================================================
// AUTHENTICATION ROUTES
// =======================================================
// Show Register Form
router.get("/register", function(req, res){
    res.render("register", {page: "register"});
});

// Handle Sign Up Logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message); // console.log(err);
            return res.render("register", {error: err.message}); // return can be used to short-circuit 
            // the function and prevent any code below front running after it gets triggered. 
        } else { // if the user registers correctly, passport.auth to go on to campgrounds
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    }});
});

// Show Login Form
router.get("/login", function(req, res){    // key
    res.render("login", {page: "login"});
});         

// Handling Login Logic
router.post("/login", passport.authenticate("local", // app.post route to "/login"
    { // when a request comes into "/login", the middleware will run first
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){

});

// Logout Route
router.get("/logout", function(req, res){
    req.logout(); // from passport
    req.flash("success", "logged you out!");
    res.redirect("/campgrounds");
});


module.exports = router;