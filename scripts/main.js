$(document).ready(function() {

	function slideshow() {

		$("#intro-image-container > img:gt(0)").hide();

		setInterval(function() {

			$("#intro-image-container > img:first")
				.delay(1000)
				.fadeOut(3000)
				.next()
				.delay(1000)
				.fadeIn(2000)
				.end()
				.appendTo("#intro-image-container");
		}, 6000);
	}

	slideshow();
});