import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./smith-logo.webp"
								alt="smith"
								className="work-image"
							/>
							<div className="work-title">Smith & Associates</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">
								May 2023 - Aug 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./uhg-logo.png"
								alt="uhg"
								className="work-image"
							/>
							<div className="work-title">UnitedHealth Group</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								Jul 2019 - May 2022
							</div>
						</div>

						<div className="work">
							<img
								src="./idemia-logo.jpeg"
								alt="idemia"
								className="work-image"
							/>
							<div className="work-title">Idemia</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">
								May 2018 - Aug 2018
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
