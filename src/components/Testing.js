import React, { useState } from "react";
import music from "../../assets/music.json";

export default function Testing() {
	const [clickedText, setClickedText] = useState([]);

	var handleClick = (index) => {
		setClickedText(music);
	};
	return (
		<div>
			{music.map((role, index) => (
				<img
					src={music[index].cover.musicCover}
					key={index}
					onClick={() => handleClick(index)}
				/>
			))}

			<ul>
				{clickedText.map((t, index) => (
					<ul>
						<li key={index}>{t}</li>
					</ul>
				))}
			</ul>
		</div>
	);
}
