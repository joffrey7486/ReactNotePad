import React from 'react';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NoteSaved from './components/NoteSaved';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(false);

	const createNote = () => {
		const newNote = {
			id: uuid(),
			title: "",
			content: "",
		};
		console.log(newNote);
		setNotes([newNote, ...notes]);
		setActiveNote(newNote.id);
	};

	const getActiveNote = () => {
		return notes.find((note) => note.id === activeNote);
	}

  const deleteNote = (thisId) => {
    setNotes(notes.filter((note) => note.id !== thisId));
  }

	const editNote = (editedNote) => {
		const editedNoteArray = notes.map((note) => {
			if(note.id === activeNote) {
				return (editedNote);
			}
			return note;
		});
		setNotes(editedNoteArray);
	}

	return (
		<div>
		<Row>
			<Col xs={2} className="border-end vh-100">
				<NoteSaved notes={notes} createNote={createNote} activeNote={activeNote} setActiveNote={setActiveNote} deleteNote={deleteNote}/>
			</Col>
			<Col xs={9}>
				<Row className='content'>
					<NoteDisplay activeNote={getActiveNote()}/>
				</Row>
				<Row>
					<MarkdownInput activeNote={getActiveNote()} editNote={editNote}/>
				</Row>
			</Col>
		</Row>
		</div>
	);
}

export default App;