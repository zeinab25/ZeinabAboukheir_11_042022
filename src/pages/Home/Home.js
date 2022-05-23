import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Banner from "../../components/Banner/Banner";
import bannerHome from "./bannerHome.png";
import Thumb from "../../components/Thumb/Thumb";

function Home({ locations }) {
	return (
		<>
			<main>
				<Banner image={bannerHome}>
					<h2>Chez vous, partout et ailleurs</h2>
				</Banner>
				<section className={styles.locations}>
					{locations.map((location) => (
						<Link key={location.id} to={`/location/${location.id}`}>
							<Thumb title={location.title} cover={location.cover} />
						</Link>
					))}
				</section>
			</main>
		</>
	);
}

export default Home;
