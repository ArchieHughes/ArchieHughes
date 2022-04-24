function asdashow() {
	const asdabutton = document.getElementById('asdabutton');
	const asdap = document.getElementById('asdap');
	const asdatitle = document.getElementById('asdatitle');

	if(asdap.style.display == 'block') {
		asdabutton.innerHTML = 'Store Assistant';
		asdap.style.display = 'none';
		asdatitle.style.display = 'none';
	} else {
		asdabutton.innerHTML = 'Collapse';
		asdap.style.display = 'block';
		asdatitle.style.display = 'block';
	}
}

function dayportershow() {
	const dayporterbutton = document.getElementById('dayporterbutton');
	const dayporterp = document.getElementById('dayporterp');
	const dayporterul = document.getElementById('dayporterul');
	const dayportertitle = document.getElementById('dayportertitle');

	if(dayporterp.style.display == 'block') {
		dayporterbutton.innerHTML = 'Day porter';
		dayporterp.style.display = 'none';
		dayporterul.style.display = 'none';
		dayportertitle.style.display = 'none';
	} else {
		dayporterbutton.innerHTML = 'Collapse';
		dayporterp.style.display = 'block';
		dayporterul.style.display = 'block';
		dayportertitle.style.display = 'block';
	}
}

function drumlessonshow() {
	const drumlessonbutton = document.getElementById('drumlessonbutton');
	const drumlessonp = document.getElementById('drumlessonp');
	const drumlessontitle = document.getElementById('drumlessontitle');

	if(drumlessonp.style.display == 'block') {
		drumlessonbutton.innerHTML = 'Day porter';
		drumlessonp.style.display = 'none';
		drumlessontitle.style.display = 'none';
	} else {
		drumlessonbutton.innerHTML = 'Collapse';
		drumlessonp.style.display = 'block';
		drumlessontitle.style.display = 'block';
	}
}