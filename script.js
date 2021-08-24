const form = document.getElementById("formBirthday");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	form.howOld.textContent = timeSince(form.birthday.value);
});

function timeSince(startDate) {
	let now = Date.now();
	console.log(now);

	let then = Date.parse(startDate);
	console.log(then);

	millisecondsSince = now - then;
	console.log(millisecondsSince);

	return millisecondsSince / 1000 / 60 / 60 / 24 / 365;
}

console.log(form.elements);
