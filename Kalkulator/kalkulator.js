window.onload = function() {
  var tall1 = prompt("skriv in første tall");
  var tall2 = prompt("skriv in andre tall");
  document.getElementById("kalkulator").innerHTML = "svaret er " + (parseInt(tall1) + parseInt(tall2));
  alert("svaret er " + (parseFloat(tall1)-parseFloat(tall2)));
}
