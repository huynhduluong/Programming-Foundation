var img = null;
var originalimg = null;
var canvas;

function upload() {
	var file = document.getElementById("fileinput");
	canvas = document.getElementById("output");
	img = new SimpleImage(file);
	originalimg = new SimpleImage(file);
	img.drawTo(canvas);
}
function doRainbow() {
	if (Isloaded(img)) {
		setRainbow();
		img.drawTo(canvas);
	}
}
function setRainbow() {

	for(var pixel of img.values()){
		var y = pixel.getY();
		var h = img.getHeight();
		var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;

		if (y < h/7) {
			if (avg<128) {
				pixel.setRed(2*avg);
				pixel.setGreen(0);
				pixel.setBlue(0);
			}
			else{
				pixel.setRed(255);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(2*avg-255);
			}			
		}
		else if (y < 2*h/7) {
			if (avg<128) {
				pixel.setRed(2*avg);
				pixel.setGreen(0.8*avg);
				pixel.setBlue(0);
			}
			else{
				pixel.setRed(255);
				pixel.setGreen(1.2*avg-51);
				pixel.setBlue(2*avg-255);
			}			
		}
		else if (y < 3*h/7) {
			if (avg<128) {
				pixel.setRed(2*avg);
				pixel.setGreen(2*avg);
				pixel.setBlue(0);
			}
			else{
				pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(2*avg-255);
			}			
		}
		else if (y < 4*h/7) {
			if (avg<128) {
				pixel.setRed(0);
				pixel.setGreen(2*avg);
				pixel.setBlue(0);
			}
			else{
				pixel.setRed(2*avg-255);
				pixel.setGreen(255);
				pixel.setBlue(2*avg-255);
			}			
		}
		else if (y < 5*h/7) {
			if (avg<128) {
				pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(2*avg);
			}
			else{
				pixel.setRed(2*avg-255);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(255);
			}			
		}
		else if (y < 6*h/7) {
			if (avg<128) {
				pixel.setRed(0.8*avg);
				pixel.setGreen(0);
				pixel.setBlue(2*avg);
			}
			else{
				pixel.setRed(1.2*avg-51);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(255);
			}			
		}
		else {
			if (avg<128) {
				pixel.setRed(1.6*avg);
				pixel.setGreen(0);
				pixel.setBlue(1.6*avg);
			}
			else{
				pixel.setRed(0.4*avg+153);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(0.4*avg+153);
			}			
		}
	}
}
function resetImage() {
	originalimg.drawTo(canvas);
	img = new SimpleImage(originalimg);
}
function Isloaded(img) {
	if (img == null || !img.complete()){
		alert("Please choose a image");
		return false;
	}
	else
		return true;
}