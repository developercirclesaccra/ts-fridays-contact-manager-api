import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import { PORT, MONGODB_URI } from './constants';
import module from './modules';

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

connect(MONGODB_URI, {
  useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
}).then(() => {
	console.log('💾  Database connected');
	app.listen(PORT, () =>
		console.log(`🚀  Server is running on port ${PORT}`)
	);
})