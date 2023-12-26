document.addEventListener('DOMContentLoaded', function () {
	const headerBurger = document.querySelector('.header__burger');
	const headerMenu = document.querySelector('.header__menu');
	const body = document.querySelector('body');

	headerBurger.addEventListener('click', function () {
		headerBurger.classList.toggle('active');
		headerMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const buttonTop = document.querySelector('.button-top');

	document.addEventListener('scroll', function () {
		window.scrollY < 400 ? buttonTop.classList.add('hidden') : buttonTop.classList.remove('hidden');
	})
	buttonTop.onclick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}
})