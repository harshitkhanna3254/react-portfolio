const INFO = {
	main: {
		title: "My Portfolio",
		name: "Harshit Khanna",
		email: "harshitkhanna3254@gmail.com",
		logo: process.env.PUBLIC_URL + "/images/hk-logo-3.jpeg",
	},

	socials: {
		github: "https://github.com/harshitkhanna3254",
		linkedin: "https://www.linkedin.com/in/harshit3254",
		leetcode: "https://leetcode.com/harshitkhanna3254",
	},

	homepage: {
		title: "Harshit Khanna",
		description1: `I'm Harshit. I have a strong background in working with Distributed Backend Systems and I'm equally adept with Frontend and DevOps, having spent around 30 months as a Software Engineer at UnitedHealth Group and being a summer intern at Smith & Associates.
			Currently, I am pursuing my Masters at Rice University, where I am focusing on the exciting field of Data Science to expand my skill set and knowledge.`,
		description2: `When I'm not coding, you will find me listing to 60s - 80s music, watching crime dramas, or cheering on Real Madrid. Hala Madrid!`,
	},

	about: {
		title: "Read more about me!",
		subtitle: "MCS at Rice University",
		description: `
		I'm Harshit Khanna. I am currently pursuing my Master's in Computer Science with a specialization in Data Science at Rice University. Throughout my academic journey, I have delved into a wide range of courses such as Machine Learning, Database System Implementation, IoT Programming, Graduate Design and Analysis of Algorithms, and Web Development. These experiences have equipped me with a diverse skill set that spans both frontend and backend development.

		During the summer of 2023, I had the opportunity to work as a software engineer at Smith & Associates, where I focused on frontend and backend development. This enriching three-month internship allowed me to apply my knowledge in a real-world setting and gain valuable industry experience.

		Before embarking on my graduate studies in the US, I spent around 30 months as a Software Engineer at Optum in India. In this role, I primarily worked on backend development in distributed systems, alongside frontend development and deployment tasks as part of DevOps practices. This exposure to various domains has made me equally adept in different areas of software engineering.

		Beyond my passion for technology and innovation, I also have a keen interest in diverse fields such as Music, Philosophy, and Italian Crime Dramas. I believe in continuous growth and always seek opportunities to challenge myself, adapt, and thrive in the dynamic world of technology.

		As I look forward to the future, I am eager to leverage my expertise in data science, alongside my extensive software engineering background, to create impactful solutions and contribute meaningfully to the ever-evolving world of technology and innovation.
		`,
	},

	education: {
		title: "My Education History",
		description: `
		I am currently pursuing a Master of Science in Computer Science at Rice University. I started my program in August 2022 and am expected to graduate in December 2023. I originally planned specialized in Systems and Security, but I am now switching to Data Science because I find it more appealing and explorative. I have taken courses in Database System Implementation, IoT Programming, Machine Learning, and Deep Learning. I have also taken general courses to improve my core CS skills, such as Graduate Analysis of Algorithms and Web Development.
		Before coming to Rice, I attended Guru Gobind Singh Indraprastha University in India, where I earned a Bachelor of Technology in Information Technology. I took courses related to Data Structures, Object-Oriented Programming, Java Programming, and Cryptography.
		`,
	},

	resume: {
		title: "My Work Experience",
		description:
			"During my work experience, I had the opportunity to work in various roles and projects that enriched my skillset and knowledge in the field of computer science. After completing two semesters of my MCS program at Rice, I spent a summer at Smith & Associates, where I contributed to both frontend and backend development tasks. Prior to coming to the US, I worked for around 30 months as a Software Engineer at UnitedHealth Group, where I honed my expertise in Distributed Systems on the backend, while also gaining valuable experience in frontend development and DevOps for seamless deployments. Additionally, during my undergraduate studies, I had a rewarding three-month summer internship at Idemia, where I was involved in both frontend and backend projects. These experiences have been instrumental in shaping my career and fueling my passion for technology.",
	},

	articles: {
		title: "Articles I've Written",
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
