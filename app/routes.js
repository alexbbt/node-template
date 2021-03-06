// =============================================================================
// Routes ======================================================================
// =============================================================================
module.exports = function(app, database, passport) {

  // ===========================================================================
  // Index page ================================================================
  // ===========================================================================
    app.get('/', function(req, res) {
      res.render('pages/index', {
        title: 'Sample Page'
      });
    });

    /* TODO: Setup additional routes */

  // ===========================================================================
  // The 404 Route (ALWAYS Keep this as the last route) ========================
  // ===========================================================================
    app.get('*', function(req, res){
      res.status(404).send('Page not found');
    });

};
