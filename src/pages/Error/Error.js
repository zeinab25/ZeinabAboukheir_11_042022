import React from "react";
import styles from "./error.module.css";
import { Link } from "react-router-dom";

function Error() {
	return (
		<main className={styles.error}>
			<div>
				<h2>404</h2>
				<p> Oups! La page que vous demandez n'existe pas</p>
				<Link to="/" className={styles.link}>
					Retourner sur la page d'accueil
				</Link>
			</div>
		</main>
	);
}

export default Error;
