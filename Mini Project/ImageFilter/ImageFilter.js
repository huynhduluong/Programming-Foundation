var originalImage = null;
var grayImage = null;
var redImage = null;
var canvas;

function upload() {
	var file = document.getElementById("fileinput");
	canvas = document.getElementById("output");
	originalImage = new SimpleImage(file);
	grayImage = new SimpleImage(file);
	redImage = new SimpleImage(file);
	originalImage.drawTo(canvas);
}
function doGray() {
	if (Isloaded(grayImage)) {
		filterGray();
		grayImage.drawTo(canvas);
	}
}
function filterGray() {
	for(var pixel of grayImage.values()){
		var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
}
function doRed() {
	if (Isloaded(redImage)) {
		filterRed();
		redImage.drawTo(canvas);
	}
}
function filterRed() {
	for(var pixel of redImage.values()){
		var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
		if (avg<128) {
			pixel.setRed(avg*2);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		else{
			pixel.setRed(255);
			pixel.setGreen(avg*2-255);
			pixel.setBlue(avg*2-255);
		}				
	}
}
function resetImage() {
	originalImage.drawTo(canvas);
	grayImage = new SimpleImage(originalImage);
	redImage = new SimpleImage(originalImage);
}
function Isloaded(img) {
	if (img == null || !img.complete()){
		alert("Please choose a image");
		return false;
	}
	else
		return true;
}