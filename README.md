# CYF Todos App: example with client and server

This repo contains 2 projects: a Node API in `cyf-todos-api` and a React frontend application in `cyf-todos-app`.
The objective is to show how to connect the dots between frontend and backend, as in how to call a Node API from a React application.

The API contains 4 endpoints:
- `GET /todos` : get the list of todos
- `POST /todos` : create a new todo (expect to receive a request body with something like `{"todo":"do something"}`)
- `DELETE /todos/:id` : delete a todo item identified by its id
- `PUT /todos/:id` : update an existing todo item identified by its id (expect to receive a request body with something like `{"completed":true}` or `{"todo":"new value"}`)

The React app shows how to use these 4 endpoints. Everything has been done in a single component, which would need to be split in smaller components. This is left as an exercise. You can find a better implementation of a todo list in React in https://github.com/llh1/cyf-react-todolist.

## Run the example

- Clone the repo
- Open a terminal and `cd cyf-todos-api` then `npm run start` to start the API locally.
- Open another terminal and `cd cyf-todos-app` then `yarn start` to start the React app locally.

## I want to do it myself, how do I start?

First create your Node API, you can follow the steps below to start from scratch:

- Create a new directory on your machine: `mkdir my-new-api`
- Change directory: `cd my-new-api`
- Create a new package.json: `npm init -y`
- Install express.js: `npm install --save express`
- Create a new Javascript `index.js` file to write the code of your API (you can name this file the way you like, just make sure you use the right filename in the steps below).
- Add a `start` script in your package.json, under the `scripts` section: `"start": "node index.js"`.
- Development is easier with nodemon! Install nodemon: `npm install --save-dev nodemon`
- Add a `dev` script in your package.json, under the `scripts` section: `"dev": "nodemon index.js"`.
- Start coding!

Once you're satisfied with the few endpoints you implemented in your API, you can start building a React application and use them!

- Create a new React project on your machine: `npx create-react-app my-new-react-app`
- Change directory: `cd my-new-react-app`.
- Start coding!

## When my React app sends a request to my API, it fails... why?

As described in https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS, for security reasons, browsers restrict requests to resources outside a given domain. To solve this in your local machine, do the following:

- In the code of your API, install `cors`: `npm install --save cors`
- In your `index.js`, import `cors`: `const cors = require('cors');`
- Add the cors middleware: `app.use(cors());`.

More examples and information can be found in https://expressjs.com/en/resources/middleware/cors.html.
