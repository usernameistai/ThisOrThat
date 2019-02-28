var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    flash            = require("connect-flash"),
    passport         = require("passport"),
    LocalStrategy    = require("passport-local"),
    methodOverride   = require("method-override"),
    Campground       = require("./models/campground"),
    Comment          = require("./models/comment"),
    User             = require("./models/user"),
    seedDB           = require("./seeds");

// Requiring Routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");

var url              = process.env.DATABASEURL || "mongodb://localhost:27017/yelp_camp_11D";
mongoose.connect(url, {useNewUrlParser: true}); // exported to the general environment

/* instead of the above, updates the how and edit route error handling, assign mongoose promise library and connect to database
mongoose.Promise = global.Promise; const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yelp_camp_11D';
mongoose.connect(databaseUri, { useMongoClient: true }).then(() => console.log(`Database connected`)).catch(err => console.log(`Database connection error: ${err.message}`));
*/

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(methodOverride("_method"));
app.use(flash()); // in order to use flash
// seedDB(); seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Look without looking",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user; // passes currentUser to every template
   res.locals.error = req.flash("error"); // "error" must be same as in message above, can be referenced in ejs, as in middlewareObj.isLoggedOn
   res.locals.success = req.flash("success"); // error and success are the key
   next(); // need the next, for next middleware, route handler in most cases
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes); // upends campground routes with /campgrounds
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){ // could have (8080, process.env.IP), use variables instead
   console.log("YelpCamp Server has started hooray!!!!"); 
});
