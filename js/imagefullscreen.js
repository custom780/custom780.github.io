function makeFullScreen(e) {

		// image container
		//var i = document.getElementById("myImage3");
		var i = e.currentTarget;
	
		// click event handler
		i.onclick = function() {

			// in full-screen?
			if (
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement ||
				document.msFullscreenElement
			) {

				// exit full-screen
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}

			}
			else {

				// go full-screen
				if (i.requestFullscreen) {
					this.requestFullscreen();
				} else if (i.webkitRequestFullscreen) {
					i.webkitRequestFullscreen();
				} else if (i.mozRequestFullScreen) {
					i.mozRequestFullScreen();
				} else if (i.msRequestFullscreen) {
					i.msRequestFullscreen();
				}

			}

		}

}
