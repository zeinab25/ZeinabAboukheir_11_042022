import React from "react";
import styles from "./about.module.css";
import Accordion from "../../components/Accordion/Accordion";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "./bannerAbout.png";
import aboutData from "./aboutData.json";

function About() {
	return (
		<>
			<main>
				<Banner image={bannerAbout} />
				<div className={styles.custom_accordion}>
					{aboutData.map((elt, idx) => (
						<Accordion key={idx} title={elt.title} children={elt.content} />
					))}
				</div>
			</main>
		</>
	);
}

export default About;
