import React from "react";
import styles from "./tags.module.css";

function Tags({ tags }) {
	return (
		<>
			<ul className={styles.tags}>
				{tags.map((tag) => {
					return <li key={tag}>{tag}</li>;
				})}
			</ul>
		</>
	);
}

export default Tags;
