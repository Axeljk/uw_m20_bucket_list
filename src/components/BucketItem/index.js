import React, { useState } from "react";

export default function BucketItem(props) {
	const [edit, setEdit] = useState({
		id: null,
		value: ""
	});

	// Submitting edited bucket item.
	const submitUpdate = (value) => {
		//
	};

	return (
		<ul>
			{ props.bucket.map((item, index) =>
				<li key={index}>
					<p data-key={item.id} onClick={props.completeBucketItem}>{item.text}</p>
					<div className="icons">
						<p data-key={item.id} onClick={props.editBucketItem}> ✏️</p>
						<p data-key={item.id} onClick={props.removeBucketItem}> 🗑️</p>
					</div>
				</li>
			)}
		</ul>
	);
};