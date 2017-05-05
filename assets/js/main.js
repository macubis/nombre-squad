var squad =[
{
	"nombre" : "Marcela",
	"apellido" : "Cabello",
	"edad" : 31,
	"hobbies":["cantar","yoga","cocinar"],
},
{
	"nombre" : "Melissa",
	"apellido" : "Pacheco",
	"edad" : 25,
	"hobbies":["dormir","comer","matilda"],
},
{
	"nombre" : "Karla",
	"apellido" : "Jeria",
	"edad" : 35,
	"hobbies":["comer chocolate","viajar","ir al cine"],
},
{
	"nombre" : "Tanya",
	"apellido" : "Ramirez",
	"edad" : 28,
	"hobbies":["gatos","viajar","tomar tecito a las 4"],
},
{
	"nombre" : "Valentina",
	"apellido" : "Amala Kamala",
	"edad" : 29,
	"hobbies":["bordar","tejer","dormir"],
},
{
	"nombre" : "Paula",
	"apellido" : "Ponce",
	"edad" : 28,
	"hobbies":["Musica","Aves","heroes of the storm"],
},
{
	"nombre" : "Mariela",
	"apellido" : "Cubillos",
	"edad" : 36,
	"hobbies":["tejer","cocinar","comer chocolate"],
},
]

var miembros = document.getElementById("compañeras");
	var mostrar = squad.forEach(function(elemento){
    miembros.innerHTML += "<br>"+"<div>"+"Nombre : "+elemento.nombre+" "+elemento.apellido+"<br>"+"Edad : "+elemento.edad+"<br>" + "Hobbies : "+elemento.hobbies[0]+" , "+elemento.hobbies[1]+" , "+elemento.hobbies[2]+"<br>"+ "</div>";
});
mostrar();
