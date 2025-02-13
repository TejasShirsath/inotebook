import { useState } from 'react';
import NoteContext  from './noteContext';

const NoteState =  (props)=>{
    const notesInitial = [
        {
          "_id": "67a7a57c47b359ef57afd7671",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:04.644Z",
          "__v": 0
        },
        {
          "_id": "67a7a57e47b359ef57afd7692",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        },
        {
          "_id": "67a7a57e47b359ef57afd7693",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        },
        {
          "_id": "67a7a57e47b359ef57afd7694",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        },
        {
          "_id": "67a7a57e47b359ef57afd7695",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        },
        {
          "_id": "67a7a57e47b359ef57afd7696",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        },
        {
          "_id": "67a7a57e47b359ef57afd7697",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

      // Add a Note
      const addNote = (title, description, tag)=>{
        console.log("Adding a new note")

        // TODO: API Call
        const note = {
          "_id": "67a7a57e47b359ef57afd7697",
          "user": "6799cacb1e12023b3384f533",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote = (id)=>{
        console.log("Deleting a note with id" + id)
        const newNotes = notes.filter((note)=>{return note._id !== id})
        setNotes(newNotes)

      }
      // Edit a Note
      const editNote = (id, title, description, tag)=>{
        // API Call

        // Logic to edit in client
        for(let index = 0; index < notes.length; index++){
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
             {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;