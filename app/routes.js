module.exports = function(app) {
  //SET UP ROUTES
  //Home route
  app.get('/', function(req, res) {
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

};
