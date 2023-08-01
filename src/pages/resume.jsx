import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/resume.css";

const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="work-experience-container">
						<div className="work-experience-logo">
							<img
								src="./uhg-logo.png"
								alt="uhg"
								className="work-image"
							/>
						</div>
						<div className="work-experience-details">
							<div className="work-experience-company">UHG</div>
							<div className="work-experience-title">
								Software Engineer
							</div>
							<div className="work-experience-stuff">
								<span>Html, Css, Javascript</span>
								<span>May 2021 - Jun 2022</span>

								{/* <div className="work-experience-duration">
								May 2021 - Jun 2022
								</div>
								<div className="work-experience-technologies">
									Html, Css, Javascript
								</div> */}
							</div>

							<div className="work-experience-description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Sit a voluptas iure possimus
								itaque rerum facere. Voluptatum ratione, earum
								eveniet accusamus dolores minima accusantium
								doloremque cupiditate quasi error, non
								aspernatur!
							</div>
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
