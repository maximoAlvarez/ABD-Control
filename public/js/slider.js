var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
	clearTimeout(tiempoRetraso);
	tempDeRetraso();
}
var tiempoRetraso;
function tempDeRetraso() {
	tiempoRetraso = setTimeout(pasar, 4000);
}
function pasar() {
	plusSlides(1);
}
