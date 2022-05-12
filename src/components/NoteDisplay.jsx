import React from "react";
import ReactMarkdown from "react-markdown";

const NoteDisplay = ({activeNote}) => {
	if (!activeNote){
		return (<p className="text-light">pas de note</p>)
	}
	return (
		<>
			<div className="bg-dark">
				<h1 className="text-danger">{activeNote.title}</h1>
				<div className="text-light"><ReactMarkdown>{activeNote.content}</ReactMarkdown></div>
			</div>
		</>
	)
};

export default NoteDisplay;