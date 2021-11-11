const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const closeEls2 = document.querySelectorAll("[data-close2]");
const isVisible = "is-visible";

for (const el of openEls) {
	el.addEventListener("click", function () {
		const modalId = this.dataset.open;
		document.getElementById(modalId).classList.add(isVisible);
		scrollTop();
	});
}
function scrollTop() {
	var elmnt = document.getElementsByClassName("modal-body");
	for (e of elmnt) {
		e.scrollTo(0, 0);
	}
}

for (const el of closeEls) {
		
	el.addEventListener("click", function () {
		this.parentElement.parentElement.parentElement.classList.remove(
			isVisible
		);
	});
}

for (const el of closeEls2) {
	el.addEventListener("click", function () {
		this.parentElement.parentElement.parentElement.classList.remove(
			isVisible
		);
	});
}

document.addEventListener("click", (e) => {
	if (e.target == document.querySelector(".modal.is-visible")) {
		document.querySelector(".modal.is-visible").classList.remove(isVisible);
	}
});

document.addEventListener("keyup", (e) => {
	// if we press the ESC
	if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
		document.querySelector(".modal.is-visible").classList.remove(isVisible);
	}
});
