// Problem 6: Modular User Routes

const express = require('express');
const router = express.Router();

// Get /users
router.get('/', (req, res)=>{
  res.send("User's page");
})

// POST /users
router.post('/', (req, res)=>{
  if(!req.body || !req.body.name){
    return res.status(400).json({ error: "Name is required" });
  }
  res.json({
    message: "User created",
    user: req.body
  })
})

module.exports = router;