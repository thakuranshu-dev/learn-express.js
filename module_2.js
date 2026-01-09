/* Problem 2: User Profile API */

/* Goal: Handle route params and query params. */

/* Requirements */

/* GET /users/:id`
* Return:

```json
{
  "userId": "123",
  "role": "admin"
}
```

* `role` comes from query string (`?role=admin`)
* If `role` is missing, default to `"user"` 
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/users/:id',
  (req, res) =>{
    const userId = req.params.id;
    const role = req.query.role || "user";

    res.json({
      userId: userId,
      role: role,
    });
  }
)

app.listen(port,
  ()=> console.log(`Server is listening on port ${port}`)
);

// get api at http://localhost:3000/users/123?role=admin