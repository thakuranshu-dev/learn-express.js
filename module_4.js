/*Problem 4: Create a User

Goal: Accept JSON data via POST request.

Requirements

* `POST /users`
* Request body:

```json
{
  "name": "Alice",
  "email": "alice@test.com"
}
```

* Response:

```json
{
  "message": "User created",
  "user": { ... }
}
```
*/

const express = require('express');
const app = express();
const port = 3000;

// Built-in middleware to parse JSON bodies
app.use(express.json());

// Post route to create a user
app.post('/users', 
  (req, res)=>{
    const { name, email } = req.body;

    if(name && email)
      res.json({
        message: 'User created',
        user: { name, email }
      });
    else
      res.status(400)
        .json({ message: 'Invalid user data' });
  }
)

app.listen(port, () => console.log(`Server running on port ${port}`));