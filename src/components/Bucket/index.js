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
		let completedItem = bucket.find(item => item.id == event.target.dataset.key);
		completedItem.completed = true;
		console.log("COMPLETED ITEM", completedItem);

		setBucket(current => current.map(item => item.id == event.target.dataset.key ? completedItem : item));
		console.log("BUCKET", bucket);
	};
	const removeBucketItem = (event) => {
		setBucket(current => current.filter(item => item.id != event.target.dataset.key));
	};
	const editBucketItem = (event, newValue) => {
		console.log(newValue);
		if (!newValue.text)
			return;

		setBucket(current => current.map(item => item.id == event.target.dataset.key ? newValue : item));
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