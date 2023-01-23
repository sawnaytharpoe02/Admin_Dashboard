// show hide loading Ui

function load(s) {
	window.addEventListener('load', () => {
		s;
	});
}

function timing(r) {
	setTimeout(() => {
		r;
	}, 1000);
}

export { load, timing };
