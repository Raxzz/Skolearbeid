function visDato() {
    document.getElementById("demo").innerHTML =Date();
};
window.onload = function() {
  var name = prompt("Skriv in dit navn")
  console.log (name);
  var før = (1998);
  var nå = new Date().getFullYear();
document.getElementById("skrivut").innerHTML = ("alderen min er ") + (nå - før)
};
