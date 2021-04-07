import 'dotenv/config';

// Environment variables and constants
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || '';

const config =  {
	port: PORT,
	db: MONGODB_URI
}

export default config;