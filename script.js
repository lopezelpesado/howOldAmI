const form = document.getElementById("formBirthday");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	form.howOld.textContent = form.birthday.value;
});

console.log(form.elements);
