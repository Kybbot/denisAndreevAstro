const animateTitle = (title, spans) => {
	const observer = new IntersectionObserver(
		(entries) => {
			let delay = 300;
			const entry = entries[0];
			const target = entry.target;

			if (entry.intersectionRatio <= 0) return;

			spans.forEach((span) => {
				span.style.transition = `opacity 0.1s ease-in-out ${delay}ms`;
				span.style.opacity = "1";
				delay += 60;
			});
			observer.unobserve(target);
		},
		{ threshold: 0.3 }
	);
	observer.observe(title);
};

const fadeIn = (element, classActive, checkIntersectionRatio = true) => {
	const observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			const target = entry.target;

			if (checkIntersectionRatio && entries[0].intersectionRatio <= 0) return;

			target.classList.add(classActive);
			observer.unobserve(target);
		},
		{ threshold: 0.3 }
	);
	observer.observe(element);
};

export const animations = () => {
	// HEADER
	const header = document.querySelector(".header");
	fadeIn(header, "header--active", false);

	// HERO
	const heroImg = document.querySelector(".hero__img");
	fadeIn(heroImg, "hero__img--active");

	const heroSocials = document.querySelectorAll(".hero__socials .socialIcon");
	for (const heroSocial of heroSocials) {
		fadeIn(heroSocial, "hero__social--active");
	}

	const heroTitle = document.querySelector(".hero__title");
	const heroTitleLetters = document.querySelectorAll(".hero__title--span");
	animateTitle(heroTitle, heroTitleLetters);

	const heroDescription = document.querySelector(".hero__description");
	fadeIn(heroDescription, "hero__description--active");

	const heroLine = document.querySelector(".hero__line");
	fadeIn(heroLine, "hero__line--active");

	const heroIcon = document.querySelector(".hero__icon");
	fadeIn(heroIcon, "hero__icon--active");

	const heroAbout = document.querySelector(".hero__about");
	fadeIn(heroAbout, "hero__about--active");

	const heroContacts = document.querySelector(".hero__contacts");
	fadeIn(heroContacts, "hero__contacts--active");

	// PROJECTS
	const projectsTitle = document.querySelector(".projects__title");
	const projectsTitleLetters = document.querySelectorAll(".projects__title--span");
	animateTitle(projectsTitle, projectsTitleLetters);

	const projects = document.querySelectorAll(".project");
	for (const project of projects) {
		fadeIn(project, "project--active");
	}

	// EXPERIENCE
	const experienceTitle = document.querySelector(".experience__title");
	const experienceTitleLetters = document.querySelectorAll(".experience__title--span");
	animateTitle(experienceTitle, experienceTitleLetters);

	const experienceWriteTo = document.querySelector(".experience__writeTo");
	fadeIn(experienceWriteTo, "experience__writeTo--active");

	// SKILLS
	const skillsImg = document.querySelector(".skills__img");
	fadeIn(skillsImg, "skills__img--active");

	const skillsDescription = document.querySelector(".skills__description");
	fadeIn(skillsDescription, "skills__description--active");

	const skills = document.querySelectorAll(".skills__skill");
	const skillsObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, index) => {
				if (!entry.isIntersecting) {
					return;
				}

				const i = (index + 1) * 2;
				const delay = i < 10 ? `0.${i}s` : `${i.toString().split("").join(".")}s`;

				entry.target.style.transition = `opacity 0.6s ease-in-out ${delay}, border 0.3s ease`;
				entry.target.style.opacity = "1";
				skillsObserver.unobserve(entry.target);
			});
		},
		{ threshold: 0.3 }
	);

	for (const skill of skills) {
		skillsObserver.observe(skill);
	}

	// APPS
	const appsTitle = document.querySelector(".apps__title");
	const appsTitleLetters = document.querySelectorAll(".apps__title--span");
	animateTitle(appsTitle, appsTitleLetters);

	// EDUCATION
	const educationTitle = document.querySelector(".education__title");
	const educationTitleLetters = document.querySelectorAll(".education__title--span");
	animateTitle(educationTitle, educationTitleLetters);

	const educationCards = document.querySelectorAll(".education__card");
	for (const educationCard of educationCards) {
		fadeIn(educationCard, "education__card--active");
	}

	// REVIEWS
	const reviewsTitle = document.querySelector(".reviews__title");
	const reviewsTitleLetters = document.querySelectorAll(".reviews__title--span");
	animateTitle(reviewsTitle, reviewsTitleLetters);

	const reviewsWriteTo = document.querySelectorAll(".reviews__writeTo");
	for (const reviewWriteTo of reviewsWriteTo) {
		fadeIn(reviewWriteTo, "reviews__writeTo--active");
	}

	// COURSES
	const coursesTitle = document.querySelector(".courses__title");
	const coursesTitleLetters = document.querySelectorAll(".courses__title--span");
	animateTitle(coursesTitle, coursesTitleLetters);

	// LANGUAGES
	const languagesTitle = document.querySelector(".languages__title");
	const languagesTitleLetters = document.querySelectorAll(".languages__title--span");
	animateTitle(languagesTitle, languagesTitleLetters);

	const languagesWriteTo = document.querySelector(".languages__writeTo");
	fadeIn(languagesWriteTo, "languages__writeTo--active");

	const languagesBlocks = document.querySelectorAll(".languages__block");
	for (const languagesBlock of languagesBlocks) {
		fadeIn(languagesBlock, "languages__block--active");
	}
};
