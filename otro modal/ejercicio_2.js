 
let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre + "\n p si esta presente - a si esta ausente");
	if (presencia == "p" || presencia == "P") {
	    alumnosTotales[p][1]++;
	}
}

var diasCole = 10;
var maxima_au = diasCole*0.25
for (i = 0; i < diasCole; i++) {
	for (alumno in alumnosTotales) {
	tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}


for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${diasCole - alumnosTotales[alumno][1]} </b>`;
    let calculo = diasCole - alumnosTotales[alumno][1];
	if (calculo > maxima_au) {
	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
	resultado+= "<br><br>"
	}
	document.write(resultado)
}