import Contact from './model.contact';

export default class ContactController {
	static getOne = async (req, res) => {
		try {
			const id = req.params.id;
			const contact = await Contact.findById(id).exec();
	
			if (contact) {
				res.json({
					status: 200,
					data: contact
				})
			} else {
				res.json({
					status: 404,
					message: 'Not found'
				})
			}
		} catch (error) {
			res.json({
				status: 500,
				message: error.message
			})
		}
	}

	static getAll = async (req, res) => {
		try {
			const contacts = await Contact.find({}).exec();
			res.json({
				status: 200,
				data: contacts
			})
		} catch (error) {
			res.json({
				status: 500,
				message: error.message
			})
		}
	}

	static create = async (req, res) => {
		try {
			const contact = await Contact.create(req.body);
	
			if (contact) {
				res.json({
					status: 201,
					data: contact
				})
			} else {
				res.json({
					status: 400,
					message: 'Bad request'
				})
			}
		} catch (error) {
			res.json({
				status: 500,
				message: error.message
			})
		}
	}

	static update = async (req, res) => {
		try {
			const id = req.params.id;
			const contact = await Contact
				.findByIdAndUpdate(id, req.body, { new: true })
				.exec();
	
			if (contact) {
				res.json({
					status: 200,
					data: contact
				})
			} else {
				res.json({
					status: 404,
					message: 'Not found'
				})
			}
		} catch (error) {
			res.json({
				status: 500,
				message: error.message
			})
		}
	}

	static delete = async (req, res) => {
		try {
			const id = req.params.id;
			const contact = await Contact.findByIdAndDelete(id).exec();

			if (contact) {
				res.json({
					status: 200,
					message: 'Successfully deleted contact'
				})
			} else {
				res.json({
					status: 404,
					message: 'Not found'
				})
			}
		} catch (error) {
			res.json({
				status: 500,
				message: error.message
			})
		}
	}
}