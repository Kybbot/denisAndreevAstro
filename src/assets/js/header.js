export const initHeader = () => {
	const headerSelect = document.querySelector("#headerSelect");
	const headerSelectOptions = document.querySelectorAll("#headerSelect option");

	const pathname = window.location.pathname;

	for (const headerSelectOption of headerSelectOptions) {
		if (headerSelectOption.value === pathname) {
			headerSelectOption.selected = true;
		} else {
			headerSelectOption.selected = false;
		}
	}

	headerSelect.addEventListener("change", (event) => {
		const target = event.target;
		window.location.href = target.value;
	});
};
