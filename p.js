var hamburger=document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector(".navip").classList.toggle("c");
	document.querySelector(".hamburger").classList.toggle("o");
},false);

