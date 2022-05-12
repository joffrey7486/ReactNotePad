import React from "react";
import ReactMarkdown from "react-markdown";

const NoteSaved = ({notes, createNote, activeNote, setActiveNote, deleteNote}) => {
	return (
		<>
			<button onClick={createNote} className="btn btn-lg btn-danger btn-extend m-3" >Ajouter une note</button>
			{notes.map((note) => (
				<div className={`card m-2 p-2 ${note.id === activeNote && "bg-dark"} bg-dark`} onClick={() => setActiveNote(note.id)}>
					<h4 className="text-danger">{note.title}</h4>
					<div className="text-light"><ReactMarkdown>{note.content}</ReactMarkdown></div>
                    <button className="btn btn-outline-danger" onClick={() => deleteNote(note.id)}>Supprimer</button>
				</div>
			))}
		</>
	)
};

export default NoteSaved;