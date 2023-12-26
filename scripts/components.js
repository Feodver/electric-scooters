document.addEventListener('DOMContentLoaded', function () {
	const backgroundContainer = document.querySelector('.background-container');

	document.addEventListener('scroll', function () {
		let scrollPosition = window.scrollY;
		backgroundContainer.style.transform = 'translateY(' + scrollPosition * 0.6 + 'px)';
	});
});
const body = document.querySelector('body');
body.scrollTop = body.scrollHeight;