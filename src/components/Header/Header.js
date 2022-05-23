import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo from "./kasaHeader.png";

function Header() {
	return (
		<header>
			<nav>
				<h1>
					<img src={logo} alt="logo Kasa" />
				</h1>
				<ul>
					<NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
						<li>Accueil</li>
					</NavLink>

					<NavLink
						to="/about"
						className={({ isActive }) => (isActive ? styles.active : "")}
					>
						<li>A Propos</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
