var g=0;
var c=100;

function setup(){
	createCanvas(displayWidth,displayHeight);
}
function draw(){
	g=g+0.5;
	background(c);
	if (mouseX<width/2){
		c=10;
	}else{
		c=200;
	}

	/*fill(255,0,0);
	rect(width/2,height/2, 200,50);
	fill(255);
	ellipse(mouseX,mouseY,100,100);
	line(width/2,height/2,mouseX,mouseY);
	triangle(100,100,200,200,mouseX,mouseY);*/
	if(g==360){
		g=0;
	}
	if(g>0 && g<90){
		fill(255,0,0);
	}else if(g>90 && g<180){
		fill(0,255,0);
	}else if(g>180 && g<270){
		fill(0,0,255);
	}else{
		fill(0);
	}
	arc(width/2,height/2,100,100,radians(0), radians(g));
	console.log(g);
}
/*mouseX>width/2
mouseX>width/2
mouseY>height/2
mouseY<height/2*/