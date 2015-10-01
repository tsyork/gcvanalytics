require('./database.js');
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var StormpathStrategy = require('passport-stormpath');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var contact = require('./routes/contact');
var requestDemo = require('./routes/request_demo');
var thanks = require('./routes/thanks');
var support = require('./routes/support');
var dashboard = require('./routes/dashboard');
var login = require('./routes/login');
var about = require('./routes/about');
var useCases = require('./routes/use_cases');
var terms = require('./routes/terms');
var features = require('./routes/features');

var app = express();
var strategy = new StormpathStrategy();

passport.use(strategy);
passport.serializeUser(strategy.serializeUser);
passport.deserializeUser(strategy.deserializeUser);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname,'resources')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: process.env.EXPRESS_SECRET, key: 'sid', cookie: {secure: false} }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

mongoose.connect('mongodb://localhost/gcvanalytics');
//mongoose.connect('gcvauser:Magg13m0@ds059712.mongolab.com:59712/gcvanalytics');

app.use('/', routes);
app.use('/contact', contact);
app.use('/request_demo', requestDemo);
app.use('/thanks', thanks);
app.use('/support', support);
app.use('/dashboard', dashboard);
app.use('/login', login);
app.use('/about', about);
app.use('/terms', terms);
app.use('/use_cases', useCases);
app.use('/features', features);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.listen(9000);
module.exports = app;
