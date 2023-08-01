import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../components/common/card";

import "./styles/resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="resume-logo-container">
						<div className="resume-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.resume.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.resume.description}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								<div className="card">
									<div className="card-container">
										<div className="card-header">
											<div className="card-icon">
												<FontAwesomeIcon
													icon={faBriefcase}
												/>
											</div>
											<div className="card-title">
												Work
											</div>
										</div>
										<hr className="hr"></hr>
										<div className="card-body">
											<div className="card-text">
												<div className="works-body">
													<div className="work">
														<img
															src="./smith-logo.webp"
															alt="smith"
															className="work-image"
														/>
														<div className="work-title">
															Smith & Associates
														</div>
														<div className="work-subtitle">
															Software Engineer
															Intern
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
														<div className="work-title">
															UnitedHealth Group
														</div>
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
														<div className="work-title">
															Idemia
														</div>
														<div className="work-subtitle">
															Software Engineer
															Intern
														</div>
														<div className="work-duration">
															May 2018 - Aug 2018
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
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
