import React, { useState } from "react";
import styles from "./rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
	const starFill = [];

	for (let i = 1; i <= 5; i++) {
		i < parseInt(rating)
			? starFill.push(
					<FontAwesomeIcon icon={faStar} className={styles.starHighlight} key={i} />,
			  )
			: starFill.push(<FontAwesomeIcon icon={faStar} className={styles.starEmpty} key={i} />);
	}

	return <div className={styles.rating}>{starFill}</div>;
}

export default Rating;
