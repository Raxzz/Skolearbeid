function regnUt() {
 var textb1 = parseInt(document.getElementById("tall1").value);
 var textb2 = parseInt(document.getElementById("tall2").value);
 document.getElementById("resultat").innerHTML = "svaret er: " + leggsammen(textb1, textb2);
}

function leggsammen(tall1, tall2) {
 return (tall1+tall2);

}
