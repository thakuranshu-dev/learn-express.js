/*Problem 6: Modular User Routes

**Goal: Organize routes using `express.Router`.

## Requirements

* Move user routes into `/routes/users.js`
* Support:

  * `GET /users`
  * `POST /users`
* Import router into main app 
*/

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//Import users router
const usersRouter = require('./routes/users');

// Mount users router at /users
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

