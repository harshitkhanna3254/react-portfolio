import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./styles/resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownloadButton from "../components/common/downloadButton";

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

					<div className="resume-main-container">
						<div className="resume-title">
							<div className="resume-title-text">
								{INFO.resume.title}
							</div>
							<div className="resume-download-button">
								<DownloadButton target="_blank" />
							</div>
						</div>

						<div className="subtitle resume-subtitle">
							{INFO.resume.description}
						</div>

						<div className="resume-container">
							<div className="resume-wrapper">
								<div className="resume-card">
									<div className="resume-card-container">
										<div className="resume-card-header">
											<div className="resume-card-icon">
												<FontAwesomeIcon
													icon={faBriefcase}
												/>
											</div>
											<div className="resume-card-title">
												Work
											</div>
										</div>
										<hr className="hr"></hr>
										<div className="resume-card-body">
											<div className="resume-card-text">
												<div className="resume-works-body">
													<div className="resume-work">
														<img
															src={
																process.env
																	.PUBLIC_URL +
																"/images/smith-logo.webp"
															}
															alt="smith"
															className="resume-work-image"
														/>
														<div className="resume-work-title">
															Smith & Associates
														</div>
														<div className="resume-work-subtitle">
															Software Engineer
															Intern
														</div>
														<div className="resume-work-duration">
															May 2023 - Aug 2023
														</div>
													</div>
													<div className="resume-work-skills">
														<strong>Skills:</strong>{" "}
														Angular, PHP Laravel,
														Artisan Tinker, Ngnix,
														AWS EC2
													</div>
													<div className="resume-work-details">
														<ul className="resume-work-details-list">
															<li>
																Led the
																development of
																<strong>
																	&nbsp;Skills
																	Development
																	Platform
																</strong>
																. Dockerized the
																services and
																deployed on
																Amazon EC2 with
																Nginx, resulting
																in a significant
																reduction of
																over
																<strong>
																	&nbsp;1000
																	idle
																	hours&nbsp;
																</strong>
																per week
																potentially
																saving{" "}
																<strong>
																	$300,000
																	monthly
																</strong>{" "}
																.
															</li>
															<li>
																Effectively
																decoupled a PHP
																Laravel
																application and
																created
																event-based REST
																endpoints. Used
																PHP Artisan
																Tinker to write
																and execute
																tests,
																increasing the
																test coverage
																from
																<strong>
																	&nbsp;~35%&nbsp;
																</strong>
																to
																<strong>
																	&nbsp;92%
																</strong>
																.
															</li>
															<li>
																Successfully
																transitioned
																services to AWS
																Fargate,
																resulting in{" "}
																<strong>
																	~15%
																	reduction
																</strong>{" "}
																in AWS costs.
															</li>
															<li>
																Performed data
																wrangling and
																analysis on
																Google Analytics
																data to uncover
																correlations
																between user
																behavior,
																courses,
																departments, and
																optimal
																engagement
																timings.
															</li>
														</ul>
													</div>

													<div className="resume-work">
														<img
															src={
																process.env
																	.PUBLIC_URL +
																"/images/uhg-logo.png"
															}
															alt="uhg"
															className="resume-work-image"
														/>
														<div className="resume-work-title">
															UnitedHealth Group
														</div>
														<div className="resume-work-subtitle">
															Software Engineer
														</div>
														<div className="resume-work-duration">
															Jul 2019 - May 2022
														</div>
													</div>
													<div className="resume-work-skills">
														<strong>Skills:</strong>{" "}
														SpringBoot, Node.js,
														MongoDB, MySQL, React,
														Angular, Kafka, AWS EC2,
														EKS and Athena, Docker,
														Kubernetes
													</div>

													<div className="resume-work-details">
														<ul className="resume-work-details-list">
															<li>
																Led the
																development
																of&nbsp;
																<strong>
																	Coordination
																	of Benefits
																</strong>
																, a
																message-based
																microservice
																platform with
																Kafka as a
																message broker
																to enable
																asynchronous
																communication
																among the
																processing,
																validation and
																notification
																services,
																reducing
																multi-benefit
																claim processing
																time by{" "}
																<strong>
																	45%
																</strong>
																.
															</li>
															<li>
																Developed
																Jenkins CI/CD
																pipelines,
																dockerized the
																microservices,
																and pushed the
																containers on
																AWS EC2. Used
																Istio mesh and
																Kubernetes for
																container
																orchestration
																with AWS EKS;
																reaching a{" "}
																<strong>
																	~25%
																	reduction
																</strong>{" "}
																in downtime.
															</li>
															<li>
																Wrote AWS Athena
																queries to catch
																regressions and
																derive insights
																from the
																benchmark runs
																and wrote Python
																scripts to
																create JIRA work
																items for the
																Claim Analysis
																team to
																investigate
																aiding the team
																in analyzing
																inefficiencies.
															</li>
															<li>
																Wrote
																microservices
																using gRPC
																framework and
																protobuf data
																modeling for
																communicating
																with Health Care
																Platform UI
																reducing the API
																response time by{" "}
																<strong>
																	~2 seconds
																</strong>
																.
															</li>
															<li>
																Architected and
																implemented
																multiple
																features through
																stateful
																services for the{" "}
																<strong>
																	Claims
																	Processing
																	Application
																</strong>
																, using MySQL,
																Hibernate ORM,
																and Redis for
																the caching
																layer.
															</li>

															<li>
																Led the complete
																revamp of the
																obsolete
																Validation
																process by
																converting Perl
																Scripts to
																Python,
																significantly
																reducing the
																downtime and
																increasing the
																validation speed
																by over
																<strong>
																	&nbsp;30
																	seconds
																</strong>
																.
															</li>
															<li>
																Researched on,
																built POCs, and
																integrated
																framework-agnostic
																pages using
																<strong>
																	&nbsp;Angular
																	Elements
																</strong>
																, into an
																existing Spring
																Boot project.
															</li>
														</ul>
													</div>

													<div className="resume-work">
														<img
															src={
																process.env
																	.PUBLIC_URL +
																"/images/idemia-logo.jpeg"
															}
															alt="idemia"
															className="resume-work-image"
														/>
														<div className="resume-work-title">
															Idemia
														</div>
														<div className="resume-work-subtitle">
															Software Engineer
															Intern
														</div>
														<div className="resume-work-duration">
															May 2018 - Aug 2018
														</div>
													</div>
													<div className="resume-work-skills">
														<strong>Skills:</strong>{" "}
														React, Node.js
													</div>
													<div className="resume-work-details">
														<ul className="resume-work-details-list">
															<li>
																Designed a
																telemetry web
																app with a
																dashboard to
																monitor consumer
																traffic,
																increasing
																traffic
																visibility.
															</li>
															<li>
																Reconfigured the
																Payment Gateway
																to accommodate
																crypto payments;
																achieved a{" "}
																<strong>
																	15%
																</strong>{" "}
																increase in web
																traffic.
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

export default Resume;
