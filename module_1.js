/* Problem 1: Hello Express API */

/* Goal: Create a basic Express server that responds with text. */

/* Requirements */

// Server runs on port `3000`
// `GET /` → returns `"Welcome to Express"`
// `GET /health` → returns JSON `{ status: "OK" }`

import express from 'express';

const app = express();
const port = 3000;

app.get("/", 
  (req, res)=> res.send("Hello from express.js")
  //res.send() respond with text
);

app.listen(port,
  ()=> console.log(`Server is listening om port ${port}`)
);