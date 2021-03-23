import contactRoutes from './contact/routes.contact';

const module = (app) => {
	app.use('/contact', contactRoutes);
}

export default module;