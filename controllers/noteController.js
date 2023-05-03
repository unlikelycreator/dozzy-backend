const Note = require('../models/noteModel')

module.exports.getNote = async (req, res) =>{
    const note = await Note.find()
    res.send(note)
}

module.exports.saveNote = async (req, res) => {
    const {title, content, color} = req.body
     Note
     .create({title, content, color})
     .then((data) => { 
        console.log("Added Successfully..");
        console.log(data);
        res.send(data)
     })
}

module.exports.updateNote = async (req,res) =>{
    const{_id,title, content, color} = req.body
    Note.findByIdAndUpdate(_id, { title, content, color }, { new: true })
    .then((updatedNote) => res.send(updatedNote))
    .catch((err) => console.log(err))
}

module.exports.deleteNote = async (req,res) =>{
    const{_id} = req.body
    Note
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}

