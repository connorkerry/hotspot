var express = require("express");
var login = require('./routes/login');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
router.get('/', function(req, res) {});
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);
app.listen(5000);