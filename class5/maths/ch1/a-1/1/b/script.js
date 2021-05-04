function check() {
  if (document.getElementById("input").value == "100000") {
    document.getElementById('status').src="../../../../../../correct.png";
    document.getElementById("check").innerHTML='<a href="../../2/a">Next</a>'
  } else {
    document.getElementById("status").src="../../../../../../wrong.png";
    document.getElementById("check").innerHTML='<a href="../../2/a">Next</a>';
   }
}