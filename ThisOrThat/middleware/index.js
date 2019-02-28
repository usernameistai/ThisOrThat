// All the middleware goes in here
var Campground    = require("../models/campground"),
    Comment       = require("../models/comment"),
    middlewareObj = {}; // empty object

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err || !foundCampground){
                req.flash("error", "Campground not found");
                res.redirect("back"); // goes to previous poge
            } else if(foundCampground.author.id.equals(req.user._id) || req.user.isAdmin){// mongoose method, if mongoose object equals user id (req.user._id) 
                req.campground = foundCampground;
                next();     
            } else {
                req.flash("error", "You do not have permission to do that");
                res.redirect("back");
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){ // is the user logged in?
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err || !foundComment){
                req.flash("error", "Sorry, that comment does not exist!");
                res.redirect("back"); // goes to previous poge
            } else if(foundComment.author.id.equals(req.user._id) || req.user.isAdmin){// mongoose method, if mongoose object equals user id (req.user._id) 
                req.comment = foundComment;
                next();     
            } else {
                req.flash("error", "You do not have permission to do that");
                res.redirect("/campgrounds/" + req.params.id);
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back"); // if not logged in redirect them back
    }
};

// Middleware
middlewareObj.isLoggedIn = function(req, res, next){ // next is function called after middleweare
    if(req.isAuthenticated()){
        return next();
    } else {    // key          value
        req.flash("error", "You need to be logged in to do that"); // has ot go before redirecting
        res.redirect("/login");
    }
};



module.exports = middlewareObj;