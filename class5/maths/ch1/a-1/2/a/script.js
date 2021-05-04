function check() {
  if (document.getElementById("input").value == "23110") {
    document.getElementById('status').src="../../../../../../correct.png";
    document.getElementById("check").innerHTML='<a href="../../2/b">Next</a>'
  } else {
    document.getElementById("status").src="../../../../../../wrong.png";
    document.getElementById("check").innerHTML='<a href="../../2/b">Next</a>';
   }
}