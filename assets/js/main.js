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
	var paulina = new Miembros("Paulina","Aros",28,["hacer libretas", "acariciar gatos", "manicure"])

	squad.push(marcela,melissa,karla,tanya,valentina,paula,mariela,paulina);

var mosmarcela=document.getElementById("marcela");
var mosmelissa = document.getElementById("melissa");
var moskarla = document.getElementById("karla");
var mostanya = document.getElementById("tanya");
var mosvalentina = document.getElementById("valentina");
var mospaula = document.getElementById("paula");
var mosmariela = document.getElementById("mariela");
var mospaulina = document.getElementById("paulina");

mosmarcela.innerHTML = "<br>"+"<b>"+"Nombre : "+"</b>"+marcela.nombre+" "+marcela.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+marcela.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+marcela.hobbies[0]+"<br>"+marcela.hobbies[1]+"<br>"+marcela.hobbies[2]+"</li></ul>";
mosmelissa.innerHTML = "<br>"+"<b>"+"Nombre : "+"</b>"+melissa.nombre+" "+melissa.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+melissa.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+melissa.hobbies[0]+"<br>"+melissa.hobbies[1]+"<br>"+melissa.hobbies[2]+"</li></ul>";
moskarla.innerHTML= "<br>"+"<b>"+"Nombre : "+"</b>"+karla.nombre+" "+karla.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+karla.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+karla.hobbies[0]+"<br>"+karla.hobbies[1]+"<br>"+karla.hobbies[2]+"</li></ul>";
mostanya.innerHTML = "<br>"+"<b>"+"Nombre : "+"</b>"+tanya.nombre+" "+tanya.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+tanya.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+tanya.hobbies[0]+"<br>"+tanya.hobbies[1]+"<br>"+tanya.hobbies[2]+"</li></ul>";
mosvalentina.innerHTML= "<br>"+"<b>"+"Nombre : "+"</b>"+valentina.nombre+" "+valentina.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+valentina.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+valentina.hobbies[0]+"<br>"+valentina.hobbies[1]+"<br>"+valentina.hobbies[2]+"</li></ul>";
mospaula.innerHTML ="<br>"+"<b>"+"Nombre : "+"</b>"+paula.nombre+" "+paula.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+paula.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+paula.hobbies[0]+"<br>"+paula.hobbies[1]+"<br>"+paula.hobbies[2]+"</li></ul>";
mosmariela.innerHTML="<br>"+"<b>"+"Nombre : "+"</b>"+mariela.nombre+" "+mariela.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+mariela.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+mariela.hobbies[0]+"<br>"+mariela.hobbies[1]+"<br>"+mariela.hobbies[2]+"</li></ul>";
mospaulina.innerHTML="<br>"+"<b>"+"Nombre : "+"</b>"+paulina.nombre+" "+paulina.apellido+"<br>"+"<b>"+"Edad : "+"</b>"+paulina.edad+"<br>"+"<b>"+"Hobbies : "+"</b>"+"<ul><li>"+paulina.hobbies[0]+"<br>"+paulina.hobbies[1]+"<br>"+paulina.hobbies[2]+"</li></ul>";
function comentar(){
    var contTex = document.getElementById("sumarTexto","sumarTexto1","sumarTexto2");
    var text = document.getElementById("coment");
    
    contTex.innerHTML += "<br>" +text.value +"<br>";
    text.innerHTML += contTex.value;
    text.value = "";
}

