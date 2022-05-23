import React from "react";
import styles from "./footer.module.css";
import logo from "./kasaFooter.png";

export default function Footer() {
	return (
		<footer>
			<div className={styles.footer}>
				<img src={logo} alt="logo Kasa" />
				<p>
					<i className="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved
				</p>
			</div>
		</footer>
	);
}
