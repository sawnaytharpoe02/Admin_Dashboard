function showLoader() {
	const loader = document.createElement('div');
	loader.classList.add('loader-control', 'fixed-top', 'animate__animated', 'animate__fadeIn');
	loader.innerHTML = `
			<div
				class="min-vh-100 bg-white d-flex justify-content-center align-items-center"
			>
				<span class="loader"></span>
			</div>
	`;
	document.body.append(loader);
}

function removeLoader() {
	const selectCurrentLoader = document.querySelector('.loader-control');
	selectCurrentLoader.classList.replace('animate__fadeIn', 'animate__fadeOut');
	selectCurrentLoader.addEventListener('animationend', () => {
		selectCurrentLoader.remove();
	});
}

export { showLoader, removeLoader };
