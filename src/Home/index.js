import React from "react";
import SectionIntro from "./SectionIntro";
import SectionInfo from "./SectionInfo";

const Home = () => {
	return (
		<div>
			<SectionIntro />
			<div style={{ backgroundColor: "#e8eaf6" }}>
			</div>
			<SectionInfo />
		</div>
	);
};

export default Home;