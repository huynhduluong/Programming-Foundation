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
function doBorder() {
	if (Isloaded(img)) {
		setBorder();
		img.drawTo(canvas);
	}
}
function setBorder() {
	for(var pixel of img.values()){
		if (pixel.getX()<10 || pixel.getX()>img.getWidth()-10) {
			pixel.setRed(255);
			pixel.setGreen(152);
			pixel.setBlue(80);
		}
		if (pixel.getY()<10 || pixel.getY()>img.getHeight()-10) {
			pixel.setRed(255);
			pixel.setGreen(152);
			pixel.setBlue(80);
		}
	}
}
function doGrid() {
	if (Isloaded(img)) {
		setGrid();
		img.drawTo(canvas);
	}
}
function setGrid() {
	for(var pixel of img.values()){
		var x = pixel.getX();
		var y = pixel.getY();
		var w = img.getWidth();
		var h = img.getHeight();
		if (x>w/3-5 && x<w/3+5) {
			pixel.setRed(255);
			pixel.setGreen(152);
			pixel.setBlue(80);
		}
		if (x>w*2/3-5 && x<w*2/3+5) {
			pixel.setRed(255);
			pixel.setGreen(152);
			pixel.setBlue(80);
		}
		if (y>h/2-5 && y<h/2+5) {
			pixel.setRed(255);
			pixel.setGreen(152);
			pixel.setBlue(80);
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