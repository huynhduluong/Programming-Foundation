var showImage = null;
var hideImage = null;
var output = null;
var showcanvas;
var hidecanvas;
var outputcanvas;

function uploadshowImage() {
	showcanvas = document.getElementById("showOutput");
	var showInput = document.getElementById("showimg");
	showImage = new SimpleImage(showInput);
	showImage.drawTo(showcanvas);
}
function uploadhideImage() {
	hidecanvas = document.getElementById("hideOutput");
	var hideInput = document.getElementById("hideimg");
	hideImage = new SimpleImage(hideInput);
	hideImage.drawTo(hidecanvas);
}

function clearbits(pival) {
	var x = Math.floor(pival/16)*16;
	return x;
}

function chop2hide(image) {
	for (var px of image.values()){
		px.setRed(clearbits(px.getRed()));
		px.setGreen(clearbits(px.getGreen()));
		px.setBlue(clearbits(px.getBlue()));
	}
	return image;
}

function shift(image){
    for (var px of image.values()){
        px.setRed(px.getRed()/16);
        px.setGreen(px.getGreen()/16);
        px.setBlue(px.getBlue()/16);
    }
    return image;
}

function combine(show,hide){
    output = new SimpleImage(show.getWidth(),show.getHeight());
    for (var px of output.values()){
        var x = px.getX();
        var y = px.getY();
        var showPixel = show.getPixel(x,y);
        var hidePixel = hide.getPixel(x,y);
        px.setRed(showPixel.getRed()+hidePixel.getRed());
        px.setGreen(showPixel.getGreen()+hidePixel.getGreen());
        px.setBlue(showPixel.getBlue()+hidePixel.getBlue());
    }
    return output;
}

function Output() {	
	var start = chop2hide(showImage);
	var end = shift(hideImage);
	combine(start,end);
	doClear(showcanvas);
	doClear(hidecanvas);
	outputcanvas = document.getElementById("combineOutput");
	output.drawTo(outputcanvas);		
}

// function multi(image){
//     for (var px of image.values()){
//         px.setRed(px.getRed()%16*16);
//         px.setGreen(px.getGreen()%16*16);
//         px.setBlue(px.getBlue()%16*16);
//     }
//     return image;
// }

// function show2Image(){
// 	var imgInput = output;
// 	if (imgInput == null || !imgInput.complete()) {
// 		alert("Some problem");
// 	}
// 	else{
// 		var Image1 = chop2hide(imgInput);
// 		var Image2 = multi(imgInput);
// 		var ImageCanvas1 = document.getElementById("showOutput");
// 		var ImageCanvas2 = document.getElementById("hideOutput");
// 		Image1.drawTo(ImageCanvas1);
// 		Image2.drawTo(ImageCanvas2);
// 		doClear(outputcanvas);
// 	}
// }

function clearCanvas() {
	doClear(showcanvas);
	doClear(hidecanvas);
	doClear(outputcanvas);
}

function doClear(canvas) {
	var context = canvas.getContext("2d");
	context.clearRect(0,0,canvas.width,canvas.height);
}