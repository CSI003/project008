function showPrice(elem){
	elem.classList.toggle("one");
}

// this function is relative to the images in my html that are priced at $1. My css file contains the image url. This also works the same as the "showImage" function; the only difference is they are showing different prices. 

function showImage(elem){
	elem.classList.toggle("two");
}

function playSound(e){
	document.getElementById("boop").play();
}

// this function is relative to the div class, "soon" because it triggers a sound file in the mainframe by grabbing its id and playing it once the div is clicked.
