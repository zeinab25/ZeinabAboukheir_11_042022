import React, { useState } from "react";
import styles from "./accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Accordion({ title, children }) {
	const [visiblity, setVisiblity] = useState(false);

	const toogleVisiblity = () => {
		setVisiblity((v) => !v);
	};

	return (
		<div className={`${styles.card} ${visiblity ? styles.accordion_active : ""}`}>
			<div className={styles.card_header} onClick={toogleVisiblity}>
				{title}
				<span>
					<FontAwesomeIcon icon={faChevronDown} className={styles.accordion_icon} />
				</span>
			</div>
			<div className={styles.card_body}>{children}</div>
		</div>
	);
}

export default Accordion;
