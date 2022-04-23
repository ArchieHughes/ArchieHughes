function asdashow() {
	const asdabutton = document.getElementById('asdabutton');
	const asdap = document.getElementById('asdap');

	if(asdap.style.display == 'block') {
		asdabutton.innerHTML = 'Store Assistant';
		asdap.style.display = 'none';
	} else {
		asdabutton.innerHTML = 'Collapse';
		asdap.style.display = 'block';
	}
}