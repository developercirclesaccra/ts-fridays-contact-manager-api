import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
	firstName: {
		type: String,
		required: 'Enter a first name'
	},
	lastName: {
		type: String,
		required: 'Enter a last name'
	},
	email: {
		type: String,
		unique: true
	},
	company: {
		type: String
	},
	phone: {
		type: Number,
		unique: true
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

export default model('Contact', ContactSchema);