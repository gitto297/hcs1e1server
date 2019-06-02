constexpress = require('express');
constpath = require('path');
constcookieParser = require('cookie-parser');
constlogger = require('morgan');

constindexRouter = require('./routes/index');
constusersRouter = require('./routes/users');

const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const config = require('./config');

constapp = express();

const api = new ParseServer({
    databaseURI: 'mongod://localhost:27017/hackathon',
    appID: '@hackathon&2019',
    masterKey: '_@hackathon&2019_',
    serverURL: 'hack.fahamutech.com:1337/api',
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
