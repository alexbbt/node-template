/* =============================================================================
 * This file should not need many changes. =====================================
 * All changes should be done in the corresponding files. ======================
 * Such as database.js or routes.js ============================================
 * 
 * Template Author: Alexander Bell-Towne =======================================
 * alexander@bell-towne.com ====================================================
 * www.bell-towne.com/node-template ============================================
 * github.com/alexbbt/node-template ============================================
 * =============================================================================
 */

// =============================================================================
// Set up ======================================================================
// =============================================================================
	var express    = require('express');
	var bodyParser = require('body-parser');
	var passport   = require('passport');
	var app        = express();
	var port       = process.env.PORT || 8080;	

// =============================================================================
// Configuration ===============================================================
// =============================================================================
	var database = require('./app/database.js');

	require('./config/passport')(passport);     // pass passport for configuration

// =============================================================================
// Set the view engine to ejs ==================================================
// =============================================================================
	app.set('view engine', 'ejs');

	app.use(express.static(__dirname + '/assets'));     // Static css and JS files
	app.use( bodyParser.json() );                // to support JSON-encoded bodies
	app.use( bodyParser.urlencoded({              // to support URL-encoded bodies
	  extended: true
	})); 
	app.use(passport.initialize());

// =============================================================================
// Routes ======================================================================
// =============================================================================
	require('./app/routes.js')(app, database, passport); 


// =============================================================================
// Launch ======================================================================
// =============================================================================
	app.listen(port);
	console.log('The magic happens on port ' + port);