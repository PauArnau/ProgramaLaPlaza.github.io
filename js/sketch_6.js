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
			ellipse(m+3,m,m+2,m+2);
			ellipse(m,m+3,m+2,m+2);
			ellipse(m+5,m+3,m+2,m+2);
			ellipse(m+3,m+5,m+2,m+2);
			pop();
			}
		}
}