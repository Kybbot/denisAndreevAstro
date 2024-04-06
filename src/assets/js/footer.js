export const initFooter = () => {
	const footerEn = document.querySelector("#footerEn");
	const footerUa = document.querySelector("#footerUa");

	const pathname = window.location.pathname;

	if (pathname === "/ua") {
		footerEn.dataset.current = "false";
		footerUa.dataset.current = "true";
	} else {
		footerUa.dataset.current = "false";
		footerEn.dataset.current = "true";
	}

	footerEn.addEventListener("click", () => {
		window.location.href = "/";
	});

	footerUa.addEventListener("click", () => {
		window.location.href = "/ua";
	});
};
