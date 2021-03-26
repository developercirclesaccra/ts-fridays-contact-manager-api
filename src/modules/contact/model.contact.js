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
		type: String,
		unique: true
	},
}, {
	timestamps: true,
	toJSON: {
		virtuals: true,
		versionKey: false,
		transform: ((doc, ret) => { delete ret._id })
	}
});

export default model('Contact', ContactSchema);