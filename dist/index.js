"use strict";

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)(); // setup middleware

var corsOptions = {
  origin: 'http://localhost:3000'
};
app.use((0, _cors.default)(corsOptions));
app.use((0, _helmet.default)());
app.use((0, _cookieParser.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
})); // setup routes

app.get('/test', function (req, res) {
  res.send('Running!');
});
app.use('/api/', _index.default); // handler errors

app.all('*', function (_, res) {
  return res.status(404).json({
    message: 'Error 404',
    success: false
  });
}); // handle any thrown errors

app.use(_errorHandler.default); // run server

var PORT = process.env.PORT || 1412;
app.listen(PORT, function () {
  console.log("Running on http://localhost:".concat(PORT));
});