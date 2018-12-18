window.onscroll = function() {
	if (window.pageYOffset > 120) {
		document.querySelector("#intro").style.transform = "translateY(-100px)";
    document.querySelector("#intro").style.opacity = 1;

		}
    if (window.pageYOffset < 100) {
  		document.querySelector("#intro").style.transform = "translateY(100px)";
  		}

			if (window.pageYOffset > 220) {
				document.querySelector(".news").style.transform = "translateY(-100px)";
				}
	}
