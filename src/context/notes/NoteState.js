import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWNhY2IxZTEyMDIzYjMzODRmNTMzIn0sImlhdCI6MTczODQzOTAwNn0.DnrVThqwjEEMEI4NjPiICZA_9Fw-HihDgiRTG-JKDpg'
      },
      body: JSON.stringify()
    });
    const json = await response.json()
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {

    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWNhY2IxZTEyMDIzYjMzODRmNTMzIn0sImlhdCI6MTczODQzOTAwNn0.DnrVThqwjEEMEI4NjPiICZA_9Fw-HihDgiRTG-JKDpg'
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = {
      "_id": "67a7a57e47b359ef57afd7697",
      "user": "6799cacb1e12023b3384f533",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2025-02-08T18:42:06.431Z",
      "__v": 0
    };
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWNhY2IxZTEyMDIzYjMzODRmNTMzIn0sImlhdCI6MTczODQzOTAwNn0.DnrVThqwjEEMEI4NjPiICZA_9Fw-HihDgiRTG-JKDpg'
      },
    });

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5OWNhY2IxZTEyMDIzYjMzODRmNTMzIn0sImlhdCI6MTczODQzOTAwNn0.DnrVThqwjEEMEI4NjPiICZA_9Fw-HihDgiRTG-JKDpg'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;