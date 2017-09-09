		//zadatak 1
		//Cena manja od 50 dodati 18% poreza, za cene vece od 50 dodati 8% poreza
var nekiNiz = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var cenaManjaOd50 = [];
var cenaVecaOd50 = [];
for (i = 0; i < nekiNiz.length; i++) {
	if (nekiNiz[i] < 50) {
		cenaManjaOd50.push(nekiNiz[i]);
	}
	else {
		cenaVecaOd50.push(nekiNiz[i]);
	}	
}
var porez18posto = [];
var porez8posto = [];

for (i = 0; i < cenaManjaOd50.length; i++) {
porez18posto.push(cenaManjaOd50[i] * 1.18);
}
for (i = 0; i < cenaVecaOd50.length; i++) {
porez8posto.push(cenaVecaOd50[i] * 1.08);
}

console.log(nekiNiz);
console.log("--------");
console.log(cenaVecaOd50);
console.log(porez8posto);
console.log("--------");
console.log(cenaManjaOd50);
console.log(porez18posto);
console.log("------------------------------");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		//zadatak 2
		//proveriti da li je je uneta rec palindrom
function paliOrNot() {
	var palindrom = prompt("Unesi rec koju zelis da proveris:");
	var string = palindrom.toLowerCase();
	var reverse = string.split("").reverse().join("");
	if (reverse == string) {
		console.log("Rec jeste palindrom!");
		alert("Rec jeste palindrom!");
	}
	else {
		console.log("Rec nije palindrom!");
		alert("Rec nije palindrom!");
	}
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		//2.zadatak bez hackovanja...
function noHackPali() {
	var palindrom = prompt("Unesi rec koju zelis da proveris:");
	var turnToArr = palindrom.split("");
	var obrni = [];
	for (i = turnToArr.length - 1; i >= 0; i--) {
		obrni.push(turnToArr[i]);
	}
	console.log(turnToArr);
	console.log(obrni);

	turnToArr = turnToArr.join("");
	obrni = obrni.join("");

	console.log(turnToArr);
	console.log(obrni);

	if (obrni == turnToArr) {
		console.log("Rec je palindrom!");
		alert("Rec je palindrom!");
	}
	else {
		console.log("Rec nije palindrom!");
		alert("Rec nije palindrom!");
	}
}