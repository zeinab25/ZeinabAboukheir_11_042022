import React from "react";
import { Link } from "react-router-dom";
import styles from "./thumb.module.css";

function Thumb(props) {
	return (
		<article className={styles.location}>
			<img src={props.cover} alt="" />
			<div className={styles.title}>
				<h2>{props.title}</h2>
			</div>
		</article>
	);
}

export default Thumb;
