const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
	event.preventDefault();

	var errores = "";

	// Validado Nombre ==============================
	let nombre = document.getElementById("nombre");

	if (nombre.value == "") {
		errores += "<p>Escriba un nombre</p>";
		nombre.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
	} else {
		nombre.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
	}

	// Validado Correo ==============================
	let email = document.getElementById("email");
	if (email.value == "") {
		errores += "<p>Ingrese un correo</p>";
		email.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
	} else {
		if (
			/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email.value)
		) {
			email.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
		} else {
			errores += "<p>La dirección de email no es válida</p>";
			email.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
		}
	}

	// Validado Mensaje ==============================
	let mensaje = document.getElementById("mensaje");
	if (mensaje.value == "") {
		errores += "<p>Escriba un mensaje</p>";
		mensaje.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
	} else {
		if (mensaje.value.length > 4) {
			mensaje.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
		} else {
			errores += "<p>El mensaje es muy corto</p>";
			mensaje.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
		}
	}

	// ENVIANDO MENSAJE ============================
	if (errores !== "") {
		var mensajeModal = errores;
		mostrarErrores.innerHTML = mensajeModal;
		title_mensaje.innerHTML = "Errores encontrados:";

		const isVisible = "is-visible";
		document.getElementById("C1").classList.add(isVisible);
	} else {
		document.getElementById("formulario_contato").submit();
	}

	// CERRANDO MODAL ==============================
	var btnClose = document.getElementById("btnClose");
	btnClose.addEventListener("click", function () {
		const isVisible = "is-visible";
		this.parentElement.parentElement.parentElement.classList.remove(
			isVisible
		);
	});
});
