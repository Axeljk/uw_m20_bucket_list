import React, { useState } from "react";

export default function BucketItem(props) {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
		completed: false
	});

	// Submitting edited bucket item.
	const submitUpdate = (value) => {
		//
	};

	return (
		<ul>
			{ props.bucket.map((item, index) =>
				(!item.completed)
				? <li key={index} className={`bucket-row ${item.eagerness}`}>
					<p data-key={item.id} onClick={props.completeBucketItem}>{item.text}</p>
					<div className="icons">
						<p data-key={item.id} onClick={props.editBucketItem}> ✏️</p>
						<p data-key={item.id} onClick={submitUpdate}> 🗑️</p>
					</div>
				</li>
				: <li key={index} className={`bucket-row complete ${item.eagerness}`}>
					<p data-key={item.id} onClick={props.completeBucketItem}>{item.text}</p>
				</li>
			)}
		</ul>
	);
};