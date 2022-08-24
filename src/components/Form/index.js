import React, { useState } from "react";

export default function Form(props) {
	// Form state.
	const [input, setInput] = useState("");

	// Submit button click.
	const handleSubmit = (event) => {
		event.preventDefault();

		props.onSubmit({
			id: 1,
			text: input
		});

		setInput("");
	};

	// Updates input field with key input.
	const handleInput = (event) => setInput(event.target.value);

	// Form render.
	return (
		<>
			<form className="bucket-form" onSubmit={handleSubmit}>
				<input type="text" placeholder="Add to bucket list" value={input} name="text" className="bucket-input" onChange={handleInput}></input>
				<button className="bucket-button">Add bucket list item</button>
			</form>
		</>
	);
}