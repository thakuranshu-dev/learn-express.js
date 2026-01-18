/*Problem 5: Centralized Error Handler

**Goal:Handle errors gracefully.

## Requirements

* Throw error if `/users/:id` is not a number
* Return:

```json
{
  "error": "Invalid user ID"
}
```

* Use centralized error-handling middleware
*/

const express = require('express');
const app = express();
const port = 3000;

app.get("/users/:id", (req, res, next) => {
  const userId = req.params.id;
  console.log("User Id: ", userId);
  if(isNaN(userId)){
    const error = new Error("Invalid user ID");
    error.status = 400;
    return next(error);
  }
  res.json({
    status: "success",
    message: `User ID requested: ${userId}`
  })
  next();
});

// Centralized error-handling middleware
app.use((err, req, res, next)=>{
  res.status(err.status || 500)
    .json({error: err.message || "Internal Server Error"});
})

app.listen(port,
  ()=> console.log("Server id running on http://localhost:3000")
);