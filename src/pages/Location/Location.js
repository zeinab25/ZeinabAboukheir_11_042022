import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./location.module.css";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Accordion from "../../components/Accordion/Accordion";
import { Navigate } from "react-router-dom";

function Location({ locations }) {
	const { id } = useParams();

	const location = locations.filter((location) => location.id === id).shift();

	if (location === undefined) {
		return <Navigate to="/404" />;
	}

	return (
		<>
			<main>
				<div>
					<Carousel pictures={location.pictures} />
					<section>
						<div className={styles.description}>
							<div>
								<h2>{location.title}</h2>
								<h3>{location.location}</h3>
								<Tags tags={location.tags} />
							</div>
							<div className={styles.host}>
								<Host name={location.host.name} picture={location.host.picture} />
								<Rating rating={location.rating} />
							</div>
						</div>
						<div className={styles.custom_accordion}>
							<Accordion title="Description">{location.description}</Accordion>
							<Accordion title="Équipements">
								{location.equipments.map((elt, idx) => (
									<li key={idx}>{elt}</li>
								))}
							</Accordion>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}

export default Location;
