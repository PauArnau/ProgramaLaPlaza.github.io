var t=3;
var s=0.09;
function setup() {
	createCanvas(192,157);
	background(255);
}
function draw(){
	background(255);
	var dist=[2,8,3,10,9];
	console.log([int(random(dist.length))]);
	t=t+s;
	if (t<=3) {
		s=+0.09;
	}
	if (t>=15) {
		s=-0.09;
	}
	for(var px=0; px<width; px=px+(t*2)+dist[0]){
		for(var py=0; py=height; py=py+(t*2)+dist[3]){
	push();
		translate(px,y);
		line(0,t,t*2,t);
		line(t,0,t,t*2);
	pop();	
		}
	}

}