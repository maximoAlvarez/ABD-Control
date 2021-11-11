window.onscroll = function () {
	if (document.documentElement.scrollTop > 300) {
		document.querySelector("#toTop").classList.add("show");
	} else {
		document.querySelector("#toTop").classList.remove("show");
	}
};
