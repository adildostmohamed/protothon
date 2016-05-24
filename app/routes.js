module.exports = function(app, passport) {
  //SET UP ROUTES
  //Home route
  app.get('/', isLoggedIn, function(req, res) {
    res.render("home");
  });

  //Incident route
  app.get('/incidents/123', function(req, res) {
    res.render("incident");
  });

  //Confirmation route
  app.get('/confirmation', function(req, res) {
    res.render("confirmation");
  });

  //Login route
  app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login', { message: req.flash('loginMessage') });
  });

  //Handle the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the homepage
    failureRedirect : '/login', // redirect back to the login page if there is an error
    failureFlash : true // allow flash messages
  }));

  //Signup form route
  app.get('/signup', function(req, res) {
   // render the page and pass in any flash data if it exists
   res.render('signup', { message: req.flash('signupMessage') });
  });

  // Handle the signup form
   app.post('/signup', passport.authenticate('local-signup', {
       successRedirect : '/', // redirect to home
       failureRedirect : '/signup', // redirect back to the signup page if there is an error
       failureFlash : true // allow flash messages
   }));

  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the login page
    res.redirect('/login');
  }

};
