//1. Dibuixem els elements.linea, punt, quad,... formes primitives.
//2. formes primitives les passem a un for/translate
//3. Construim l'objecte. class/function
//4. Passem variables a l'objecte display(variables);
//5. Array d'objectes.
let paraules=['centrocentro', 'artes vivas', 'creación', 'lenguaje escénicos', 'creadores','artes visuales', 'transmedia'];
let c;
let col;
let inc;

function setup(){
	createCanvas(192,157);
	background(255);
}
function draw(){
	background(255);
	stroke(0,0,255);
	textSize(40);
	textAlign(CENTER);
	c=c+0.005;
	col=lerpColor(from, to, c);

	
	console.log(c);
}