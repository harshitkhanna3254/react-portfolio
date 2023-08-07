import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import "./styles/education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../components/common/downloadButton";

const Education = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "education");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Education | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="education" />
				<div className="content-wrapper">
					<div className="education-logo-container">
						<div className="education-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="education-main-container">
						<div className="education-title">
							<div className="education-title-text">
								{INFO.education.title}
							</div>
							<div className="education-download-button">
								<DownloadButton target="_blank" />
							</div>
						</div>

						<div className="subtitle education-subtitle">
							{INFO.education.description}
						</div>

						<div className="education-container">
							<div className="education-wrapper">
								<div className="education-card">
									<div className="education-card-container">
										<div className="education-card-header">
											<div className="education-card-icon">
												<FontAwesomeIcon
													icon={faUserGraduate}
												/>
											</div>
											<div className="education-card-title">
												Education
											</div>
										</div>
										<hr className="hr"></hr>
										<div className="education-card-body">
											<div className="education-card-text">
												<div className="education-card-body-inner">
													<div className="education">
														<img
															src={
																process.env
																	.PUBLIC_URL +
																"/images/rice-uni-logo.png"
															}
															alt="smith"
															className="university-image"
														/>
														<div className="education-card-title">
															Rice University
														</div>
														<div className="education-card-subtitle">
															Masters in Computer
															Science
														</div>
														<div className="education-card-duration">
															Aug 2022 - Dec 2023
														</div>
													</div>
													<div className="education-card-details">
														<ul className="education-card-details-list">
															<li>
																<strong>
																	Database
																	Systems
																	Implementation:
																</strong>
																&nbsp; Built
																Database System
																on top of
																boilerplate code
																as a part of the
																course.
																Implemented
																Buffer Manager,
																LRU Caching,
																Record Manager,
																indexing using
																B+ Trees, and
																Page Sorting
																using (TPMMS),
																SQL Type
																Checking.
															</li>
															<li>
																<strong>
																	Machine
																	Learning:
																</strong>
																&nbsp; I
																assessed the
																performance of
																machine learning
																and deep
																learning methods
																for detecting
																large language
																model
																(LLM)-generated
																text. I achieved
																an accuracy of
																80% using TF-IDF
																with XGBoost,
																and 71% on
																BeRT-based
																models.
															</li>
															<li>
																<strong>
																	IoT
																	Programming:
																</strong>
																&nbsp;I studied
																streaming
																algorithms, the
																dataflow model
																of computation,
																and Kahn's
																processes and
																implemented
																real-time
																analysis of ECG
																signals.
															</li>
															<li>
																<strong>
																	Web
																	Development:
																</strong>
																&nbsp; In my Web
																Development
																course, I
																strengthened and
																revised my
																frontend and
																backend skills.
																I built a fully
																functional
																e-commerce store
																called
																HendrixMart
																using React,
																Redux and
																Node.js.
															</li>
														</ul>
													</div>

													<div className="education">
														<img
															src={
																process.env
																	.PUBLIC_URL +
																"/images/ipu-logo.png"
															}
															alt="uhg"
															className="university-image"
														/>
														<div className="education-card-title">
															Indraprastha
															University
														</div>
														<div className="education-card-subtitle">
															Bachelors in
															Information
															Technolofy
														</div>
														<div className="education-card-duration">
															Aug 2015 - May 2019
														</div>
													</div>

													<div className="education-card-details">
														<ul className="education-card-details-list">
															<li>
																<strong>
																	Capstone
																	Project:{" "}
																</strong>
																Developed a
																decentralized
																solution to the
																problem of false
																expenditure on
																crowdfunding
																platforms using
																Blockchain.
																Implemented
																several Smart
																Contracts to
																allow the
																contributors to
																approve the
																request before
																the manager can
																use money from
																the campaign.
															</li>

															<li>
																Active member of
																AAMBRA
																foundation and
																Prakriti,
																promoting Indian
																culture and
																supporting
																humanitarian
																causes through
																volunteering,
																fundraising, and
																event planning.
															</li>
														</ul>
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

export default Education;
