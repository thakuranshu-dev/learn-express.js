/*Problem 7: API Key Protection

**Goal: Protect routes using middleware.

##Requirements

* Require header: `x-api-key`
* Valid key: `"secret123"`
* If missing or invalid → `401 Unauthorized`
* Protect `/admin` route only
*/

const express = require('express');
const app = express();
const port = 3000;

// Middleware to check for API key
function apiKeyMiddleware(req, res, next){
  const apikey = req.headers['x-api-key'];
  
  if(!apikey || apikey !== 'secret123')
    return res.status(401)
    .send('Unauthorized: Invalid or missing API key');

  next();
}


// Public route
app.get('/', (req, res)=>{
  res.send('Welcome to the public API!');
})

// Protected /admin route
app.get('/admin', apiKeyMiddleware, (req, res,)=>{
  res.send("Welcome to the admin page!");
})

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
});