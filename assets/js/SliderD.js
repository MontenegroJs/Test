function Changesectioncontent1() {
	document.getElementById("Sectioncontent1").innerHTML = "Holas"
	document.getElementById("Sectioncontent2").innerHTML = "Directorio de Docentes"
	document.getElementById("Sectioncontent3").innerHTML = "Directorio del Personal"
	document.getElementById("Sectioncontent4").innerHTML = "Directorio de PPFF y estudiantes"
	document.getElementById("Sectioncontent5").innerHTML = "Asistencia diaria del Personal"
	document.getElementById("Sectioncontent6").innerHTML = "Control de envío de fichas"
	document.getElementById("Sectioncontent7").innerHTML = "Asistencia de la reunión semanal"
	document.getElementById("Sectioncontent8").innerHTML = "Comité de PPFF y estudiantes"
}

function Select1() {
	document.getElementById("S1").classList.add ("Slider1active")
	document.getElementById("S2").classList.remove ("Slider2active")
	document.getElementById("S1").classList.remove ("Slider1inactive")
}

function Changesectioncontent2() {
	document.getElementById("Sectioncontent1").innerHTML = "Registro del III Bimestre 2021"
	document.getElementById("Sectioncontent2").innerHTML = "Monitoreo pedagógico"
	document.getElementById("Sectioncontent3").innerHTML = "Instrumentos de Gestión Institucional"
	document.getElementById("Sectioncontent4").innerHTML = "-"
	document.getElementById("Sectioncontent5").innerHTML = "-"
	document.getElementById("Sectioncontent6").innerHTML = "-"
	document.getElementById("Sectioncontent7").innerHTML = "-"
	document.getElementById("Sectioncontent8").innerHTML = "-"
}

function Select2() {
	document.getElementById("S2").classList.add ("Slider2active")
	document.getElementById("S1").classList.add ("Slider1inactive")
}