var hemmeligtall = Math.floor((Math.random() * 100) +1);
var gjettetTall;
var antallforsok = 5;

function gjett()  {
  console.log(6);
  gjettetTall = parseInt(document.getElementById("tall").value);
  if (antallforsok <= 0)
  {
    document.getElementById("svar").innerHTML = "Du har brukt opp alle forsøk";
    document.getElementById("gjett").disabled = true;
  }
  else {
    if (gjettetTall > hemmeligtall)
    {
      document.getElementById("svar").innerHTML = "Feil Tallet er Lavere";
    }
    else if (gjettetTall < hemmeligtall)
    {
      document.getElementById("svar").innerHTML = "Feil Tallet er Høyere";
    }
    else
    {
      document.getElementById("svar").innerHTML = "Riktig svar";
    }
  antallforsok--;
  document.getElementById("forsok").innerHTML = "" + antallforsok;
  }
}
