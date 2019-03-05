var m;
function setup() {
	createCanvas(192,157);
	background(255);
}
function draw(){
	for(var px=0; px<width; px=px+modul){
			for(var py=0; py<height; py=py+modul){
				/*rect(px,py,modul_w,modul);
				line(px,py,modul_w+modul_h+py);*/
				push();
				translate(px,py);
				rect(0,0,20,20);
				ellipse(10,10,20,20);
				fill(255,255,255);
				pop();
				}

		}
}