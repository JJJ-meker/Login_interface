document.getElementById("sign-up").onclick = function() { 
	var request = new XMLHttpRequest();
	request.open("GET", "server.php?number=" + document.getElementById("password").value);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState===4) {
			if (request.status===200) { 
				document.getElementById("searchResult").innerHTML = request.responseText;
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}
}
