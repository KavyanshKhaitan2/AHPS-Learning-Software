function check() {
  if (document.getElementById("in1a").value == "99999") {
    document.getElementById('s1a').src="../../../../../../correct.png";
    document.getElementById("b1a").innerHTML='<a href="../b">Next</a>'
  } else {
    document.getElementById("s1a").src="../../../../../../wrong.png";
    document.getElementById("b1a").innerHTML='<a href="../b">Next</a>';
   }
}