

	

		let x = 0;
let y = 0;
let z = 0;
let r = 0;
let g = 0;
let b = 0;


function setup() {
	createCanvas(1000, 1000);
}
  

function draw() {
 x = random(10,1000);
 y = random(10,1000);
 z = random(10,100);
 r = random (0,100);
 g = random (0,100);
 b = random (0,100);
 ellipse(x,y,z,z);
 fill(r,g,b);
}