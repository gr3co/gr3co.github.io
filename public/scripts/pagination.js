//
// A few helper functions for pagination in my personal website.
// 
// (c) 2014 Stephen Greco
//


function showHome() {
	document.getElementById("main-home").classList.remove("hidden");
	document.getElementById("main-about").classList.add("hidden");
	document.getElementById("main-projects").classList.add("hidden");
	document.getElementById("main-contact").classList.add("hidden");
}

function showAbout() {

	if (document.getElementById("main-about").innerHTML === "") {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange= function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById("main-about").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","ajax-about.html",true);
		xmlhttp.send();
	}

	document.getElementById("main-home").classList.add("hidden");
	document.getElementById("main-about").classList.remove("hidden");
	document.getElementById("main-projects").classList.add("hidden");
	document.getElementById("main-contact").classList.add("hidden");
}

function showProjects() {

	if (document.getElementById("main-projects").innerHTML === "") {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange= function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById("main-projects").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","ajax-projects.html",true);
		xmlhttp.send();
	}

	document.getElementById("main-home").classList.add("hidden");
	document.getElementById("main-about").classList.add("hidden");
	document.getElementById("main-projects").classList.remove("hidden");
	document.getElementById("main-contact").classList.add("hidden");
}

function showContact() {

	if (document.getElementById("main-contact").innerHTML === "") {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange= function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				document.getElementById("main-contact").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","ajax-contact.html",true);
		xmlhttp.send();
	}

	document.getElementById("main-home").classList.add("hidden");
	document.getElementById("main-about").classList.add("hidden");
	document.getElementById("main-projects").classList.add("hidden");
	document.getElementById("main-contact").classList.remove("hidden");

}

// Load the correct page based on URL
(function onLoad(){
	switch(window.location.hash) {
		case "#about": 
		showAbout(); 
		break;

		case "#projects": 
		showProjects(); 
		break;

		case "#contact": 
		showContact(); 
		break;
		
		default: 
		showHome();
	}
})();
