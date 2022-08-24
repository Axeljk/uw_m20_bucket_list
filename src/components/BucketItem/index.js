import React, { useState } from "react";

export default function BucketItem(props) {
	const [edit, setEdit] = useState({
		id: null,
		value: ""
	});

	// Submitting edited bucket item.
	const submitUpdate = (value) => {

	};

	return (
		<ul>
			<li>
				Stuff
			</li>
		</ul>
	);
};