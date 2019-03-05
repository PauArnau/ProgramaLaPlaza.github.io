var modul_w;
var modul_h;
var m;
var r;
function setup(){
	createCanvas(192,157);
	background(255);
}
function draw(){
	m=3;
	r=r+vel;
	if(r==0){
		vel=1;
	}
	if(==255){
		vel=-1;
	}
	m_w+m_w+w;
	if(m_w==0.1);
	strokeWeight(1);
	fill(255,0,0);
	modul_w= width/6;
	modul_h= height/8;
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

	console.log(m);
	/*//line(0,0,20,20);
	//line(0,20,20,0);
	rect(0,0,20,20);
	ellipse(20,20,20,20);
	//fill(100,0,0);
	//arc(10,10,20,20 radians(0), radians(90));*/

}