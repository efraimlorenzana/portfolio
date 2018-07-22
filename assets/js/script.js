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
	if(win.width() > 600) {
		sectionContact.height(contact.height()-150);
	}
});

window.addEventListener("load", function () {
	if(win.width() > 600) {
		sectionContact.height(contact.height()-150);
	}
});