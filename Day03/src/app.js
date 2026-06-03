const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

//router
app.post('/notes', (req,res)=>{
    console.log(req.body);
    notes.push(req.body);

    console.log("notes created");
})

app.get('/notes',(req,res)=>{
    res.send(notes);
})

app.delete('/delete/:index',(req,res)=>{
    const deleteNote = notes.pop();
    res.send({
        message:"note deleted",
        deleteNote
    })
})

//update partucular workd or line on decription of note
app.patch('/notes/updateD/:index', (req, res) => {
    

    if (!notes[req.params.index]) {
        return res.status(404).send("Note not found");
    }

    notes[req.params.index].Description = req.body.Description;

    res.send("Note updated successfully");
});

module.exports = app;