const INFO = {
	main: {
		title: "My Portfolio",
		name: "Harshit Khanna",
		email: "harshitkhanna3254@gmail.com",
		logo: "../hk-logo-3.jpeg",
	},

	socials: {
		github: "https://github.com/harshitkhanna3254",
		linkedin: "https://www.linkedin.com/in/harshit3254",
		leetcode: "https://leetcode.com/harshitkhanna3254",
	},

	homepage: {
		title: "Full Stack / Distributed Systems Engineer",
		description: `I'm Harshit. I have a strong background in working with distributed systems, having spent 2.5 years as a Software Engineer at UnitedHealth Group.
			Currently, I am pursuing my Masters at Rice University, where I am focusing on the exciting field of Data Science to expand my skill set and knowledge.`,
	},

	about: {
		title: "Read more about me!",
		subtitle: "MCS at Rice University",
		description: `
		I am a Software Engineer with a passion for technology and innovation. With a strong academic background, including specialization in the Systems and Security domain at Rice University, I have honed my skills in various areas. I excelled in Database System Implementation and IoT courses, building a comprehensive database system from scratch with features like Buffer Manager, LRU Caching, Record Manager, indexing with B+ Trees, and Page Sorting using TPMMS. In my professional journey at UnitedHealth Group, I contributed to the design and development of a message-based microservice platform using technologies like Spring Boot, Kubernetes, Kafka, Docker, MongoDB, SQL Server, Node.js, React.js, and Angular. I also gained valuable experience in CI/CD pipelines with Jenkins, Istio service mesh, and stateful services with MySQL, Spring Data JPA, and Redis caching. Now, as I transition to Data Science and ML, I'm eager to leverage my diverse background and expertise to explore algorithms, analyze data streams, and create impactful solutions in this dynamic field. My determination to learn and adapt drives my enthusiasm for continuous growth and success.
			`,
	},

	articles: {
		title: "I like to write sometimes",
		description: `Welcome to my articles page. This is where you'll find my long-form writing on the things I'm most passionate about: music, guitar, and philosophy.
			I'm a firm believer that the best way to learn is by doing. That's why I like to write about my own experiences and the challenges I've faced. I hope my writing will inspire you to think differently and to never give up on your dreams.
			Whether you're a seasoned developer, a musician, or a philosopher, I hope you'll find something useful on this page.`,
	},

	projects: [
		{
			title: "DS & Algorithms",
			description: `A compilation of data structures and algorithms implemented in Java. This project is a great resource for anyone who wants to learn or see solutions to DS and Algo problems in Java.`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/harshitkhanna3254/ds-algo",
		},
		{
			title: "HendrixMart",
			description: `Developed a fully scalable e-commerce platform in MERN-Redux-Stack and deployed it on Heroku.
				Implemented an Admin portal for Product Creation, Product Delivery, and a Product Review System.
				Implemented the Razorpay payment gateway and session management with JWTs and Redis
				`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
			linkText: "View Project",
			link: "https://hendrixmart.herokuapp.com/",
		},
		{
			title: "Database System",
			description: `Built Database System on top of boilerplate code as a part of COMP: 530 at Rice University. Implemented Buffer Manager, LRU Caching, Record Manager, indexing using B+ Trees, and Page Sorting using (TPMMS), SQL Type Checking.`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			linkText: "View Project",
			link: "https://github.com/harshitkhanna3254/database-system",
		},
		{
			title: "Portfolio",
			description:
				"My portfolio (this website) built with React wihtout any UI libraries",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
			linkText: "View Project",
			link: "https://github.com/harshitkhanna3254/portfolio",
		},
		{
			title: "Kaggle ML Competitions",
			description:
				"A work in progress which I'll focus on in the next five months",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/harshitkhanna3254/Kaggle-Competitions",
		},
		{
			title: "Kickstarter2",
			description: `Built a decentralized solution to the problem of false expenditure on crowdfunding platforms using Blockchain. 
				Implemented several Smart Contracts to allow the contributors to approve the request before the manager can use money from the campaign.
				`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/harshitkhanna3254/Kickstarter2",
		},
	],
};

export default INFO;
