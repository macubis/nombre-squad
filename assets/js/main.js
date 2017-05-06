function Miembros(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies =hobbies;
}
	var squad=[];
	var marcela = new Miembros("Marcela","Cabello",31,["cantar","yoga","cocinar"]);
	var melissa = new Miembros("Melissa","Pacheco",25,["dormir","comer","matilda"]);
	var karla = new Miembros("Karla","Jeria",35,["comer chocolate","viajar","ir al cine"]);
	var tanya = new Miembros("Tanya","Ramirez",28,["gatos","viajar","tomar tecito a las 4"]);
	var valentina = new Miembros("Valentina","Amala Kamala",29,["bordar","tejer","dormir"]);
	var paula = new Miembros("Paula","Ponce",28,["Musica","Aves","heroes of the storm"]);
	var mariela = new Miembros("Mariela","Cubillos",36,["tejer","cocinar","comer chocolate"]);

	squad.push(marcela,melissa,karla,tanya,valentina,paula,mariela);

function mostrar(){
	var alum = document.getElementById("alumnas");
	var alumna = squad.forEach(function(elem){
	var compAux = document.createElement("div");	
	alum.appendChild(compAux);
	compAux.innerHTML = "<br>"+"Nombre : "+elem.nombre+" "+elem.apellido+"<br>"+"Edad : "+elem.edad;
	});
}
mostrar();







