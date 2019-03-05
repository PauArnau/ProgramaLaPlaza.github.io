//1. Dibuixem els elements.linea, punt, quad,... formes primitives.
//2. formes primitives les passem a un for/translate
//3. Construim l'objecte. class/function
//4. Passem variables a l'objecte display(variables);
//5. Array d'objectes.

let a = [];
let tamany =[2,5,8,20,14];
let ample =[20,50,80,10,140];
let alt=[20,50,80,10,140];
let paleta=['#FF6138','#FFFF9D', '#BEEB9F', '#79BD8F','#00A388'];
let espaix=[2,10,20,30,40];
let espaiy=[2,10,20,30,40];
let grossor=[1,2,3,4,5];
let velocitat=[0.5,1,0.2,10,2]
let wx=[0.1,0.2,0.3,0.25,0.4];
let gx=[1,0.2,0.12,0.4,0.06];
let wind;
let gravity;

function setup(){
	createCanvas(192,157);
	background(255);
	for(let i=0; i<5; i=i+1 ){
		a.push(new Antena());
	}
}
function draw(){
	background(255);
	

	for(let i=0; i<a.length; i=i+1){
		gravity= new creativeVector(gx[i],2);
		wind= new creativeVector(wx[i],wx[i]);
		a[i].update();
		a[i].applyForce(wind);
		a[i].applyForce(gravity);
		a[i].display(tamany[i], ample[i], espaix[i], alt[i], espaiy[i], paleta[i], 1);
		a[i].checkEdges();
	}
}
class Antena{
	constructor(){
		this.mass=0;
		this.position= new creativeVector(80,50);
		this.velocity= new creativeVector(-2,2);
		this.acceleration= new creativeVector(1,0.1);
	}
	applyForce(force){
		var f 
	}
	update(){
		this.position.add(this.velocity);
		if((this.position.x=width)(this.position.x<0)){
			this.velocity.x=this.velocity.x*-1;
		}
		if((this.position.y=heith)(this.position.y<0)){
			this.velocity.y=this.velocity.y*-1;
		}
	}
	display(t,ampr, sx, altr, sy, c, g){
		stroke(c);
		strokeWeight(g);
		for(var posx=0; posx<ampr; posx=posx+sx){
			for(var posy=0; posy<altr; posy=posy+sy){
				push();
				translate(posx+this.position.x-ampr,posy+this.position.y-altr);
					line(0,t,t*2,t);
					line(t,0,t,t*2);
				pop();
			}
		}
	}
	checkEdges(){
		if(this.position.x=width){
			this.position.x=width;
			this.velocity.x=this.velocity.x*-1;
		}else if(this.position.x<0){
			this.position.x=0;
			this.velocity.x=this.velocity.x*-1;

		}
		if(this.position.y=heith){
			this.position.y=heith;
			this.velocity.y=this.velocity.y*-1;
		} 
		else if(this.position.y<-100){
			this.position.y=-50;
			this.velocity.y*=-1;
		}
}