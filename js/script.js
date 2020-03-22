
function requestPage(url) {

	let ajax = new XMLHttpRequest();

	ajax.open('GET', url);

	console.log(ajax.responseText);

	ajax.send();
	
	ajax.onreadystatechange = function() {
		if(ajax.status == 200) {
			console.log(ajax.status);
			
			document.getElementById('page').innerHTML = ajax.responseText;			
		}

		if(ajax.status == 404) {
			console.log(ajax.status);
			
			document.getElementById('page').innerHTML = 'Try again';			
		}
	}
	
	console.log(ajax);
	
}
