import { Express } from 'express';
import contactRoutes from './contact/routes.contact';

const module = (app: Express) => {
	app.use('/contact', contactRoutes);
}

export default module;