# Contact Manager API
A simple Node.js Express API for managing contacts.

## Background
This project's source code was initially created by [Emmanuel Henri](https://www.lynda.com/Emmanuel-Henri/6037653-1.html), a course tutor at [Lynda.com](https://www.lynda.com). Updates or modifications were carried out by [Emmanuel Sekyere](https://wesscoby.me), facilitator for [TypeScript Fridays](https://www.facebook.com/events/919733038786431) at [Facebook Developer Circles: Accra](https://www.facebook.com/groups/DevCAccra)

## Installation
- Clone the repo and install dependencies
```sh
yarn install

# or npm
npm run install
```
- Create a `.env` file in the root repository and copy over the contents from `.env.example`. Assign the respective values to the variables

### Usage
- Run the project locally with:
	```sh
	# yarn
	yarn dev

	# or npm
	npm run dev
	```
- To use with Postman, you can import `postman/collection.json` file.
  - If you're using a different port (not 4000), edit the collection in postman - choose `Variables` tab and update URL value with the new port.