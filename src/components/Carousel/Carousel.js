import React, { useState } from "react";
import styles from "./carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Carousel({ pictures }) {
	const [current, setCurrent] = useState(0);
	const length = pictures.length;

	function nextSlide() {
		// setCurrent(current === length - 1 ? 0 : current + 1);
		setCurrent((prevCurrent) => {
			return prevCurrent === length - 1 ? 0 : prevCurrent + 1;
		});
	}

	function prevSlide() {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	return (
		<>
			<div className={styles.carousel}>
				<button
					className={styles.prevSlide}
					onClick={() => {
						nextSlide();
					}}
				>
					<FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
				</button>
				<div className={styles.slide}>
					<img src={pictures[current]} />
				</div>
				<button
					className={styles.nextSlide}
					onClick={() => {
						prevSlide();
					}}
				>
					<FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
				</button>
			</div>
		</>
	);
}

export default Carousel;
