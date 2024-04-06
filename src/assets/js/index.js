import { animations } from "./animation";
import { initHeader } from "./header";
import { initMobileMenu } from "./mobilieMenu";
import { initProjects } from "./projects";
import { initExperience } from "./experience";
import { initSLiders } from "./sliders";
import { initCourses } from "./courses";
import { initAdvantages } from "./advantages";
import { initFooter } from "./footer";
import { initScrollTop } from "./scrollTop";

document.addEventListener("DOMContentLoaded", () => {
	animations();
	initHeader();
	initMobileMenu();
	initProjects();
	initExperience();
	initSLiders();
	initCourses();
	initAdvantages();
	initFooter();
	initScrollTop();
});
