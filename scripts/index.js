const asdabutton = document.getElementById('asdabutton');
const asdatitle = document.getElementById('asdatitle');

const dayporterbutton = document.getElementById('dayporterbutton');
const dayporterul = document.getElementById('dayporterul');
const dayportertitle = document.getElementById('dayportertitle');

const drumlessonbutton = document.getElementById('drumlessonbutton');
const drumlessontitle = document.getElementById('drumlessontitle');

const divasdahide = document.getElementById('divasdahide');
const divdayporterhide = document.getElementById('divdayporterhide');
const divdrumlessonhide = document.getElementById('divdrumlessonhide');

const workbuttons = document.getElementById('workbuttons');

function asdashow() {
	if(divasdahide.style.display == 'block') {
		asdabutton.innerHTML = 'Store Assistant';
		asdabutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divasdahide.style.display = 'none';
	} else {
		asdabutton.innerHTML = 'Collapse';
		asdabutton.style.backgroundColor = 'darkkhaki';
		divasdahide.style.display = 'block';
	}

	if(dayporterbutton.innerHTML == 'Collapse' || drumlessonbutton.innerHTML == 'Collapse') {
		divdayporterhide.style.display = 'none';
		dayporterbutton.innerHTML = 'Day Porter';
		dayporterbutton.style.backgroundColor = 'rgb(70, 156, 0)';

		drumlessonbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divdrumlessonhide.style.display = 'none';
		drumlessonbutton.innerHTML = 'Drum lessons';
	}
}

function dayportershow() {
	if(divdayporterhide.style.display == 'block') {
		dayporterbutton.innerHTML = 'Day porter';
		dayporterbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divdayporterhide.style.display = 'none';
	} else {
		dayporterbutton.style.backgroundColor = 'darkkhaki';
		dayporterbutton.innerHTML = 'Collapse';
		divdayporterhide.style.display = 'block';
	}

	if(asdabutton.innerHTML == 'Collapse' || drumlessonbutton.innerHTML == 'Collapse') {
		asdabutton.innerHTML = 'Store Assistant';
		divasdahide.style.display = 'none';
		asdabutton.style.backgroundColor = 'rgb(70, 156, 0)';

		drumlessonbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divdrumlessonhide.style.display = 'none';
		drumlessonbutton.innerHTML = 'Drum lessons';
	}
}

function drumlessonshow() {
	if(divdrumlessonhide.style.display == 'block') {
		drumlessonbutton.innerHTML = 'Drum lessons';
		drumlessonbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divdrumlessonhide.style.display = 'none';
	} else {
		drumlessonbutton.style.backgroundColor = 'darkkhaki';
		drumlessonbutton.innerHTML = 'Collapse';
		divdrumlessonhide.style.display = 'block';
	}

	if(asdabutton.innerHTML == 'Collapse' || dayporterbutton.innerHTML == 'Collapse') {
		asdabutton.innerHTML = 'Store Assistant';
		divasdahide.style.display = 'none';
		asdabutton.style.backgroundColor = 'rgb(70, 156, 0)';

		dayporterbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		dayporterbutton.innerHTML = 'Day porter';
		divdayporterhide.style.display = 'none';
	}
}

function expandwork() {
	if(workbuttons.style.display == 'block') {
		workbuttons.style.display = 'none';
		closework();
	} else {
		workbuttons.style.display = 'block';
		personalstatementhide.style.display = 'none';
	}

	if(skillsbuttons.style.display == 'block' || educationbuttons.style.display == 'block') {
		closeskills();
		closeeducation();
		skillsbuttons.style.display = 'none';
		educationbuttons.style.display = 'none';
	}
}

const skillsbuttons = document.getElementById('skillsbuttons');

function expandskills() {
	if(skillsbuttons.style.display == 'block') {
		skillsbuttons.style.display = 'none';
		closeskills();
	} else {
		skillsbuttons.style.display = 'block';
		personalstatementhide.style.display = 'none';
	}

	if(workbuttons.style.display == 'block' || educationbuttons.style.display == 'block') {
		closework();
		closeeducation();
		workbuttons.style.display = 'none';
		educationbuttons.style.display = 'none';
	}
}

function expandeducation() {
	if(educationbuttons.style.display == 'block') {
		educationbuttons.style.display = 'none';
		closeeducation();
	} else {
		educationbuttons.style.display = 'block';
		personalstatementhide.style.display = 'none';
	}

	if(skillsbuttons.style.display == 'block' || workbuttons.style.display == 'block') {
		closeskills();
		closework();
		skillsbuttons.style.display = 'none';
		workbuttons.style.display = 'none';
	}
}

function closeeducation() {
	secondarybutton.innerHTML = 'GCSEs';
	divsecondaryhide.style.display = 'none';
	secondarybutton.style.backgroundColor = 'rgb(70, 156, 0)';
	collegebutton.innerHTML = 'A-Levels';
	divcollegehide.style.display = 'none';
	collegebutton.style.backgroundColor = 'rgb(70, 156, 0)';
	musicgradesbutton.innerHTML = 'Music Grades';
	divmusicgradeshide.style.display = 'none';
	musicgradesbutton.style.backgroundColor = 'rgb(70, 156, 0)';
}

function closework() {
	dayporterbutton.innerHTML = 'Day porter';
	divdayporterhide.style.display = 'none';
	dayporterbutton.style.backgroundColor = 'rgb(70, 156, 0)';
	asdabutton.innerHTML = 'Store Assistant';
	divasdahide.style.display = 'none';
	asdabutton.style.backgroundColor = 'rgb(70, 156, 0)';
	drumlessonbutton.innerHTML = 'Drum lessons';
	divdrumlessonhide.style.display = 'none';
	drumlessonbutton.style.backgroundColor = 'rgb(70, 156, 0)';
}

function closeskills() {
	gymbutton.innerHTML = 'Gym';
	divgymhide.style.display = 'none';
	gymbutton.style.backgroundColor = 'rgb(70, 156, 0)';

	musicbutton.innerHTML = 'Music';
	divmusichide.style.display = 'none';
	musicbutton.style.backgroundColor = 'rgb(70, 156, 0)';

	surfingbutton.innerHTML = 'Surfing';
	divsurfinghide.style.display = 'none';
	surfingbutton.style.backgroundColor = 'rgb(70, 156, 0)';

	drumsbutton.innerHTML = 'Drumming';
	divdrumshide.style.display = 'none';
	drumsbutton.style.backgroundColor = 'rgb(70, 156, 0)';
}





const divgymhide = document.getElementById('divgymhide');
const gymbutton = document.getElementById('gymbutton');

const divmusichide = document.getElementById('divmusichide');
const musicbutton = document.getElementById('musicbutton');

const divsurfinghide = document.getElementById('divsurfinghide');
const surfingbutton = document.getElementById('surfingbutton');

const divdrumshide = document.getElementById('divdrumshide');
const drumsbutton = document.getElementById('drumsbutton');

function gymshow() {
	if(divgymhide.style.display == 'block') {
		gymbutton.innerHTML = 'Gym';
		gymbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divgymhide.style.display = 'none';
	} else {
		gymbutton.innerHTML = 'Collapse';
		gymbutton.style.backgroundColor = 'darkkhaki';
		divgymhide.style.display = 'block';
	}

	if(musicbutton.innerHTML == 'Collapse' || surfingbutton.innerHTML == 'Collapse' || drumsbutton.innerHTML == 'Collapse') {
		divmusichide.style.display = 'none';
		musicbutton.innerHTML = 'Music';
		musicbutton.style.backgroundColor = 'rgb(70, 156, 0)';

		surfingbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divsurfinghide.style.display = 'none';
		surfingbutton.innerHTML = 'Surfing';

		drumsbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divdrumshide.style.display = 'none';
		drumsbutton.innerHTML = 'Drumming';
	}
}

function musicshow() {
	if(divmusichide.style.display == 'block') {
		musicbutton.innerHTML = 'Music';
		musicbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divmusichide.style.display = 'none';
	} else {
		musicbutton.innerHTML = 'Collapse';
		musicbutton.style.backgroundColor = 'darkkhaki';
		divmusichide.style.display = 'block';
	}

	if(gymbutton.innerHTML == 'Collapse' || surfingbutton.innerHTML == 'Collapse' || drumsbutton.innerHTML == 'Collapse') {
		divgymhide.style.display = 'none';
		gymbutton.innerHTML = 'Gym';
		gymbutton.style.backgroundColor = 'rgb(70, 156, 0)';

		surfingbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divsurfinghide.style.display = 'none';
		surfingbutton.innerHTML = 'Surfing';

		drumsbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divdrumshide.style.display = 'none';
		drumsbutton.innerHTML = 'Drumming';
	}
}

function surfingshow() {
	if(divsurfinghide.style.display == 'block') {
		divsurfinghide.style.display = 'none';
		surfingbutton.innerHTML = 'Surfing';
		surfingbutton.style.backgroundColor = 'rgb(70, 156, 0)';
	} else {
		divsurfinghide.style.display = 'block';
		surfingbutton.innerHTML = 'Collapse';
		surfingbutton.style.backgroundColor = 'darkkhaki';
	}

	if(gymbutton.innerHTML == 'Collapse' || musicbutton.innerHTML == 'Collapse' || drumsbutton.innerHTML == 'Collapse') {
		divgymhide.style.display = 'none';
		gymbutton.innerHTML = 'Gym';
		gymbutton.style.backgroundColor = 'rgb(70, 156, 0)';

		musicbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divmusichide.style.display = 'none';
		musicbutton.innerHTML = 'Music';

		drumsbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divdrumshide.style.display = 'none';
		drumsbutton.innerHTML = 'Drumming';
	}
}

function drumsshow() {
	if(divdrumshide.style.display == 'block') {
		divdrumshide.style.display = 'none';
		drumsbutton.innerHTML = 'Drumming';
		drumsbutton.style.backgroundColor = 'rgb(70, 156, 0)';
	} else {
		divdrumshide.style.display = 'block';
		drumsbutton.innerHTML = 'Collapse';
		drumsbutton.style.backgroundColor = 'darkkhaki';
	}

	if(gymbutton.innerHTML == 'Collapse' || musicbutton.innerHTML == 'Collapse' || surfingbutton.innerHTML == 'Collapse') {
		divgymhide.style.display = 'none';
		gymbutton.innerHTML = 'Gym';
		gymbutton.style.backgroundColor = 'rgb(70, 156, 0)';

		musicbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divmusichide.style.display = 'none';
		musicbutton.innerHTML = 'Music';

		surfingbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divsurfinghide.style.display = 'none';
		surfingbutton.innerHTML = 'Surfing';
	}
}

function questionshow() {
	const navigate = document.getElementById('navigate');
	
	if(navigate.style.display == 'block') {
		navigate.style.display = 'none';
	} else {
		navigate.style.display = 'block';
	}
}

const secondarybutton = document.getElementById('secondarybutton');
const divsecondaryhide = document.getElementById('divsecondaryhide');

const collegebutton = document.getElementById('collegebutton');
const divcollegehide = document.getElementById('divcollegehide');

const musicgradesbutton = document.getElementById('musicgradesbutton');
const divmusicgradeshide = document.getElementById('divmusicgradeshide');

const educationbuttons = document.getElementById('educationbuttons');

function secondaryshow() {
	if(divsecondaryhide.style.display == 'block') {
		divsecondaryhide.style.display = 'none';
		secondarybutton.innerHTML = 'GCSEs';
		secondarybutton.style.backgroundColor = 'rgb(70, 156, 0)';
	} else {
		divsecondaryhide.style.display = 'block';
		secondarybutton.innerHTML = 'Collapse';
		secondarybutton.style.backgroundColor = 'darkkhaki';
	}

	if(collegebutton.innerHTML == 'Collapse' || musicgradesbutton.innerHTML == 'Collapse') {
		divcollegehide.style.display = 'none';
		collegebutton.innerHTML = 'A-Levels';
		collegebutton.style.backgroundColor = 'rgb(70, 156, 0)';

		musicgradesbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divmusicgradeshide.style.display = 'none';
		musicgradesbutton.innerHTML = 'Music Grades';
	}
}

function collegeshow() {
	if(divcollegehide.style.display == 'block') {
		divcollegehide.style.display = 'none';
		collegebutton.innerHTML = 'A-Levels';
		collegebutton.style.backgroundColor = 'rgb(70, 156, 0)';
	} else {
		divcollegehide.style.display = 'block';
		collegebutton.innerHTML = 'Collapse';
		collegebutton.style.backgroundColor = 'darkkhaki';
	}

	if(secondarybutton.innerHTML == 'Collapse' || musicgradesbutton.innerHTML == 'Collapse') {
		divsecondaryhide.style.display = 'none';
		secondarybutton.innerHTML = 'GCSEs';
		secondarybutton.style.backgroundColor = 'rgb(70, 156, 0)';

		musicgradesbutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divmusicgradeshide.style.display = 'none';
		musicgradesbutton.innerHTML = 'Music Grades';
	}
}

function musicgradesshow() {
	if(divmusicgradeshide.style.display == 'block') {
		divmusicgradeshide.style.display = 'none';
		musicgradesbutton.innerHTML = 'Music Grades';
		musicgradesbutton.style.backgroundColor = 'rgb(70, 156, 0)';
	} else {
		divmusicgradeshide.style.display = 'block';
		musicgradesbutton.innerHTML = 'Collapse';
		musicgradesbutton.style.backgroundColor = 'darkkhaki';
	}

	if(collegebutton.innerHTML == 'Collapse' || secondarybutton.innerHTML == 'Collapse') {
		divcollegehide.style.display = 'none';
		collegebutton.innerHTML = 'A-Levels';
		collegebutton.style.backgroundColor = 'rgb(70, 156, 0)';

		secondarybutton.style.backgroundColor = 'rgb(70, 156, 0)';
		divsecondaryhide.style.display = 'none';
		secondarybutton.innerHTML = 'GCSEs';
	}
}

const personalstatementhide = document.getElementById('divpersonalstatementhide');
const personalstatementbutton = document.getElementById('personalstatementbutton');

function personalstatementshow() {
	if(personalstatementhide.style.display == 'block') {
		personalstatementhide.style.display = 'none';
	} else {
		closework();
		closeskills();
		closeeducation();

		workbuttons.style.display = 'none';
		skillsbuttons.style.display = 'none';
		educationbuttons.style.display = 'none';
		personalstatementhide.style.display = 'block';
	}
}