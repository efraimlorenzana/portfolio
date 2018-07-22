let sectionContact = $('section#contact');
let win = $(window);
let contact = $('div#contact1');

/// set contact section height to be responsive
let h = win.height();
window.addEventListener("resize", function () {
	let dif = 0;
	if(h > win.height()) {
		dif = h - win.height();
		sectionContact.height(sectionContact.height() + dif);
		h = win.height();
	}
});

window.addEventListener("load", function () {
	sectionContact.height(contact.height()-150);
});