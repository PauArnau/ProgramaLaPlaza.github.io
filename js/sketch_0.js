function setup() {
	createCanvas(displayWidth,displayHeight);
}
function draw(){
	background(255);
	/*fill(0,255,0);
	rect(0,0,width/2,height/2);
	fill(255,0,0);
	rect(width/2,0,width/2,height/2);
	fill(0,0,255);
	rect(0,height/2,width/2,height/2);
	fill(0);
	rect(width/2,height/2,width/2,height/2);*/

	if(((mouseX<width/2)&(mouseX>0)) & ((mouseY>0)&(mouseY<height/2))){
		fill(0,255,0);
		rect(0,0,width/2,height/2);
	}
	if(((mouseX>0)&(mouseX<width/2)) & ((mouseY>height/2)&(mouseY<height))){
		fill(0,0,255);
		rect(0,height/2,width/2,height);
	}
	if(((mouseX>width/2)&(mouseX<width)) & ((mouseY>0)&(mouseY<height/2))){
		fill(255,0,0);
		rect(width/2,0,width,height/2);
	}
	if(((mouseX>width/2)&(mouseX<width)) & ((mouseY>height/2)&(mouseX<height))){
		fill(0);
		rect(width/2,height/2,width,height);
	}
}