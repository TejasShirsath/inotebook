import { useState } from 'react';
import NoteContext  from './noteContext';

const NoteState =  (props)=>{
    const notesInitial = [
        {
          "_id": "67a7a57c47b359ef57afd767",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:04.644Z",
          "__v": 0
        },
        {
          "_id": "67a7a57e47b359ef57afd769",
          "user": "6799cacb1e12023b3384f533",
          "title": "Plan for 14feb",
          "description": "Sleep whole day",
          "tag": "personal",
          "date": "2025-02-08T18:42:06.431Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
             {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;