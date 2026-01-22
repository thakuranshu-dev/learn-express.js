/* Bonus Challenge: Mini REST API

**Problem 8: In-Memory Notes API

**Goal: Build a CRUD API without database.

##Requirements

* `GET /notes`
* `POST /notes`
* `PUT /notes/:id`
* `DELETE /notes/:id`
* Store notes in an array
*/

// example notes object - {title: "...", content: "..."}

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let notes = [];
let newId = 1;

//GET /notes - show all notes
app.get('/notes', (req, res)=>{
  res.json(notes);
});

//POST /notes - create a new notes
app.post('/notes', (req, res)=>{
  const {title, content} = req.body;

  if(!title || !content)
    res.status(400)
      .json({error: "Title and Content are required!"})
    
  const newNote = {
    id: newId++,
    title,
    content,
  }

  notes.push(newNote);
  res.status(200)
    .json({message: "Note created!", newNote});

});

//PUT /notes/:id - update a note
app.put('/notes/:id', (req, res)=>{
  const noteId = Number(req.params.id);
  const {title, content} = req.body;

  const note = notes.find(n=>(n.id === noteId));

  if(!note)
    res.status(404)
      .json({error: "Note not found!"});

  if(title !== undefined)
    note.title = title;
  if(content !== undefined)
    note.content = content;

  res.json({message: "Note updated!", note});
});

// DELETE /note/:id - delete a note
app.delete('/notes/:id', (req, res)=>{
  const noteId = Number(req.params.id);
  const index = notes.findIndex(n => n.id === noteId);

  if(index === -1)
    res.status(404)
      .json({error: "Note not found!"});

  const deletedNote = notes.splice(index, 1);
  res.json({message: "Note deleted!", deletedNote});
});

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`);
})
