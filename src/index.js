import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import module from './modules';
import config from './config';

// Express instance
const app = express();

// Setup
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());


// Serving static files
app.use(express.static('public'));

module(app);

// Routes
app.get('/', (req, res) =>
	res.send(`🖥️ Node and Express server is running on port ${PORT}`)
);

connect(config.db, {
  useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
	console.log('💾  Database connected');
	app.listen(config.port, () =>
		console.log(`🚀  Server is running on port ${config.port}`)
	);
})