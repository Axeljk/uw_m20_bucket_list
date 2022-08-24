import React, { useState } from "react";

export default function Form(props) {
	// Form state.
	const [input, setInput] = useState({ text: "", count: 1 });

	// Submit button click.
	const handleSubmit = (event) => {
		event.preventDefault();

		if (input.text)
			props.onSubmit({
				id: input.count,
				text: input.text
			});

		setInput({ text: "", count: (input.count+1) });
	}

	// Updates input field with key input.
	const handleInput = (event) => setInput({ text: event.target.value, count: input.count });

	// Form render.
	return (
		<>
			<form className="bucket-form" onSubmit={handleSubmit}>
				<input type="text" placeholder="Add to bucket list" value={input.text} name="text" className="bucket-input" onChange={handleInput}></input>
				<button className="bucket-button">Add bucket list item</button>
			</form>
		</>
	);
}