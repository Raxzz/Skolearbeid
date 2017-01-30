/*command for pluss*/
function regnUt() {
 var textb1 = parseInt(document.getElementById("tall1").value);
 var textb2 = parseInt(document.getElementById("tall2").value);
 document.getElementById("resultat").innerHTML = "svaret er: " + leggsammen(textb1, textb2);
}

function leggsammen(tall1, tall2) {
 return (tall1+tall2);

}
/*command for munus*/
function minus() {
 var textb1 = parseInt(document.getElementById("minus1").value);
 var textb2 = parseInt(document.getElementById("minus2").value);
 document.getElementById("minusresultat").innerHTML = "svaret er: " + trekkfra(textb1, textb2);
}

function trekkfra(minus1, minus2) {
 return (minus1-minus2);

}

function gange() {
 var textb1 = parseInt(document.getElementById("gange1").value);
 var textb2 = parseInt(document.getElementById("gange2").value);
 document.getElementById("gangeresultat").innerHTML = "svaret er: " + Gangesvar(textb1, textb2);
}

function gangesvar(gange1, gange2) {
 return (gange1+gange2);

}
