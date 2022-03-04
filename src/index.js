const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// setup middleware
var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup routes
app.get('/test', (req, res) => {
	res.send('Running!');
});

app.use('/api/', require('./routes/index.routes'));

// handler errors
app.all('*', (_, res) => {
	return res.status(404).json({ message: 'Error 404', success: false });
});

// handle any thrown errors
app.use(require('./middlewares/errorHandler'));

// run server
const PORT = process.env.PORT || 1412;
app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
