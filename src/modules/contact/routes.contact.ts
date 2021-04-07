import { Router } from 'express';
import ContactController from './controller.contact';

const router = Router();

router
	.route('/')
	.get(ContactController.getAll)
	.post(ContactController.create);

router
	.route('/:id')
	.get(ContactController.getOne)
	.put(ContactController.update)
	.delete(ContactController.delete);

export default router;