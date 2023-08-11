window.addEventListener("load", function () {
    // FUNCTIONS
	// Fade In
	let fadeIn = (target, duration = 500) => {
		target.style.opacity = 0;
		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;

		if (display === 'none')
			display = 'block';

		target.style.display = display;
		target.style.transitionProperty = "opacity";
		target.style.transitionDuration = duration + 'ms';
		window.setTimeout(() => {
			target.style.opacity = 1;
			window.setTimeout(() => {
				target.style.removeProperty('opacity');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
			}, duration);
		}, 1);
	}

	// Fade Out
	let fadeOut = (target, duration = 500) => {
		target.style.transitionProperty = 'opacity';
		target.style.transitionDuration = duration + 'ms';
		target.style.opacity = 0;
		window.setTimeout(() => {
			target.style.display = 'none';
			target.style.removeProperty('opacity');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
		}, duration);
	}
});
