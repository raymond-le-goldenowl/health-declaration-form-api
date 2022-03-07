import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

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

import routesIndex from '@/routes/index.routes';
app.use('/api/', routesIndex);

// handler errors
app.all('*', (_, res) => {
	return res.status(404).json({ message: 'Error 404', success: false });
});

// handle any thrown errors
import errorHandler from '@/middlewares/errorHandler';
app.use(errorHandler);

// run server
const PORT = process.env.PORT || 1412;
app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
