# YelpCamp

* Add landing page
Add Campgrounds Page that lists all components

Each Campground has:
* Name
* Image

# Layout and Basic styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show from
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and cofigure mongoose
* Set up campground model
* Use campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collecton.drop()
* Add a show route/template

RESTful Routes
A table of all 7 RESTful routes
name        url              verb    desc.
--------------------------------------------------------------------------------------
INDEX       /dogs            GET     List of all dogs
NEW         /dogs/new        GET     Displays form for new dogs
CREATE      /dogs            POST    Create/add new dog to DB, then redirect somewhere
SHOW        /dogs/:id        GET     Shows info about one dog
EDIT        /dogs/:id/edit   GET     Show edit form for one dog
UPDATE      /dogs/:id        PUT     Update a particular dog, then redirect somewhere
DESTROY     /dogs/:id        DELETE  Detele a prticular dog, then redirect somewhere
======================================================================================
# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

# Add the Comment model!
* Make our errors go away!
* Display comments on campground showpage

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form


RESTful Routes
A table of all 7 RESTful routes
name        url                     verb    desc.
------------------------------------------------------------
INDEX       /campgrounds            GET     List of all campgrounds
NEW         /campgrounds/new        GET     Displays form for new campgrounds
CREATE      /campgrounds            POST    Create/add new campground to DB, then redirect somewhere
SHOW        /campgrounds/:id        GET     Shows info about one campground
EDIT        /campgrounds/:id/edit   GET     Show edit form for one campground
UPDATE      /campgrounds/:id        PUT     Update a particular campground, then redirect somewhere
DESTROY     /campgrounds/:id        DELETE  Dletete a prticular campground, then redirect somewhere


name        url                     verb    desc.
------------------------------------------------------------
INDEX       /campgrounds/:id/comments            GET     List of all campgrounds
NEW         /campgrounds/:id/comments/new        GET     Displays form for new campgrounds
CREATE      /campground/:id/comments            POST    Create/add new campground to DB, then redirect somewhere
SHOW        /campgrounds/:id/comments/:id        GET     Shows info about one campground
EDIT        /campgrounds/:id/comments/:id/edit   GET     Show edit form for one campground
UPDATE      /campgrounds/:id/comments/:id        PUT     Update a particular campground, then redirect somewhere
DESTROY     /campgrounds/:id/comments/:id        DELETE  Dletete a prticular campground, then redirect somewhere

# Style Show Page
* Add sidebar to show page
* Display comments nicely

# Finish Styling Show Page
* Add public directory
* Add custom stylesheet

# Auth1 - Add User Model
* Install all packages needed for auth
* Define User model

# Auth2 - Register
* Configure Passport
* Add register routes
* Add register template

# Auth3 - Login
* Add login routes
* Add login template

# Auth4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

# Auth5 - Show/Hide Links
* Show/hide auth links in navbar correctly

# Refactor the Routes
* Use Express router to reorganise all routes

# Users + Comments
* Associate users and comments
* Save author's name ot a comment automatically

# Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add link to Edit page
* Add Update Route
* Fix $set problem

# Deleting Campgrounds
* Add Destroy Route
* Add delete button

# Authorisation
* User can only edit his/her camprounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

# Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

<!-- /campgrounds/:id/edit -->
<!-- /campgrounds/:id/comments/:comment_id/edit -->

# Deleting Comments
* Add Destroy route
* Add Delete button

Campgrounds Destroy Route: /campgrounds/:id
Comments Destroy Route: /campgrounds/:id/comments/:comment_id

# Authorisation Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor middleware

# Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

RESTful Routes
A table of all 7 RESTful routes
name        url              verb    desc.
--------------------------------------------------------------------------------------
INDEX       /dogs            GET     List of all dogs
NEW         /dogs/new        GET     Displays form for new dogs
CREATE      /dogs            POST    Create/add new dog to DB, then redirect somewhere
SHOW        /dogs/:id        GET     Shows info about one dog
EDIT        /dogs/:id/edit   GET     Show edit form for one dog
UPDATE      /dogs/:id        PUT     Update a particular dog, then redirect somewhere
DESTROY     /dogs/:id        DELETE  Detele a prticular dog, then redirect somewhere
======================================================================================






