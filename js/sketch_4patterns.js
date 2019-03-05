//1. dibuixem els elements primitius, linees, punts, quad...
//2. formes primitives passen a un for/translate
//3.Construïm el objecte. Class/function
//4.Passar les variables al objecte. Display(variables)
//5.Arraid objectes



var a,a1,a2;
function setup() {
	createCanvas(192,157);
	background(255);
	a=new Antena();
	a1=new Antena();
	a2=new Antena();
}
function draw(){
	background(255);
	a.move();
	a.display(5, 100, 4, 50, 2, color(100,100,0), 1);
	a1.move();
	a1.display(2, 20, 4, 100, 8, color(100, 0, 100), 2);
	a2.move();
	a2.display(20, 100, 20, 100, 10 color(100, 100, 200), 1);
}
class Antena{
	constructor(){

		this.x=random(width);
		this.y=random(height);
	}
	move(){
		this.x= this.x + random(-1, 1);
		this.y= this.y + random(-1, 1);
	}
	display(t,ampr,sx, altr, sy, c, g){
		stroke(c);
		strokeWeight(g);
		for(var posx=0; posx<ampr; posx=posx+sx){
			for(var posy=0; posy<altr; posy=posy+sy){
			push();
			translate(posx+this.x-ampr, posy+this.y-altr);
				line(0,t,t*2,t);
				line(t,0,t,t*2);
			pop();
			}
			
		}
	}
}