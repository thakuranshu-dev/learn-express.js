/*Problem 3: Request Logger

Goal: Log every incoming request.

#### Requirements

* Log method, URL, and timestamp
* Apply middleware globally
* Example log:

```
[2026-01-07T10:30:00Z] GET /users/1
```
*/

const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
const requestLogger = (req, res, next)=>{
  const timestamp= new Date().toISOString();
  const method = req.method;
  const origin = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${origin}`);
  next();
}

// Register middleware globally
app.use(requestLogger);

app.get('/users/:id', (req, res)=>{
  res.json({
    status: 'success',
    message: `User ID requested: ${req.params.id}`
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

