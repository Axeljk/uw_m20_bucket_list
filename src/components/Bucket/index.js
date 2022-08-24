import React, { useState } from "react";
import Form from "../Form";
import BucketItem from "../BucketItem";

export default function Bucket() {
	// Bucket state.
	const [bucket, setBucket] = useState([]);
//	setBucket((prev) => prev.map((item) => item.id == itemId ? newValue : item ));

	// Bucket item fuctions.
	const addBucketItem = (item) => {
		setBucket(current => [...current, item]);
	};
	const completeBucketItem = (event) => {
		console.log("Bucket item " + event.target.dataset.key + " completed.");
	};
	const removeBucketItem = (event) => {
		console.log("Bucket item " + event.target.dataset.key + " removed.");
	};
	const editBucketItem = (event, newValue) => {
		console.log("Bucket item " + event.target.dataset.key + " edited.");
	};

	// What's rendered.
	return (
		<>
			<h1>Bucket List</h1>
			<Form onSubmit={addBucketItem} />
			<BucketItem bucket={bucket} completeBucketItem={completeBucketItem} removeBucketItem={removeBucketItem} editBucketItem={editBucketItem} />
		</>
	);
}