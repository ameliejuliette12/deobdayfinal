

var mobils = [];
var balloons = [];
//let word =['tambah lucu','tambah pinter','tambah sayang amjul'];
let word =[1,2,3,4,5];
var total = 12;
var font;
var foto, bgStatic;
var txt = "HAPPY BIRTHDAY";
var name = "TO YOU!";
var sfxPop;
var gif_loadImg, gif_createImg;
let song; 
let a=0;

function preload() {
    gif_loadImg = loadImage("assets/img/1.gif");
    gif_createImg = createImg("assets/img/1.gif");
	bgStatic = loadImage("assets/img/jakarta.png");
	font = loadFont("assets/font/Raleway-Italic.ttf");
	sfxPop = loadSound("assets/sfx/pop.mp3");
    music = loadSound("assets/sfx/birthday.mp3");
   // frameRate(3);
    //textAlign(CENTER);
    
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < total; i++) {
		balloons.push(new Ballon());
       // text.push(new texts());
	}
}


function draw() {
   
	background(114, 51, 153);
	
	image(bgStatic, 0, 0, width, height);

	push();
    
	var imgX = width / 2;
	var imgY = height / 2;
	if(frameCount%50 <30)
    {
    // foto
	translate(imgX + (-mouseX + width / 2) / 30, imgY + (-mouseY + height / 2) / 30);
	imageMode(CENTER);
	
    
        //image(gif_loadImg, 50, 50);
    gif_createImg.size(300,300)
    gif_createImg.position (580, 230);

    //image(foto, 0, 0, 200, 200);
	// frame
	fill(255,255,0,80);
    noStroke();
	//stroke(250, 150);
	//strokeWeight(10);
	ellipse(0, 0, 210, 210);
    }
	pop();
    
   
	// name
	push();
	fill(255, 215, 0);
	stroke(255, 215, 0,70);
	strokeWeight(5);
	textFont(font);
	textSize(50);
	textAlign(CENTER);
	
    if(frameCount%50 <30)
    {
    // name
	text(name, imgX + (mouseX - width ) / 30, imgY + 200 + (mouseY - height / 2) / 30);
	// teks hbd
	
    text(txt, imgX + (mouseX - width / 2) / 30, imgY - 150 + (mouseY - height / 2) / 30);
	pop();
    
    }
	// balloons
	for (let i = 0; i < balloons.length; i++)
    {
		balloons[i].show();
		balloons[i].up();
		balloons[i].checkEdge()
		if (balloons[i].mouseHover()) {
			sfxPop.play();
			balloons.splice(i, 1);
		}
        
      
	}
    
    if (balloons.length < 3) {
		for (let i = 0; i < total; i++) {
			balloons.push(new Ballon());
		}
	}
}

    
    //text
    if(a > word.length) {
  	//background(250);
    a = 0;
    }
  
  // get ith element of data array
    let d = word[a];

  // set text color using data
   // let fillCol = Map(d, min(word), max(word), 0, 255);
    //fill (fillCol, fillCol, 0);

	// set text size using data
    let s = map(d, min(word), max(word), 0, 100);
    textSize(s);

  // place text at a random place
    word(d, random(width), random(height));

    a = a + 1;

    
	
 
function mousePressed(){
    if (music.isPlaying())
    {
    // .isPlaying() returns a boolean
    music.stop();
    //background(255, 0, 0);
    } else {
    music.play();
    //background(0, 255, 0);
  }
}
function keyPressed() {
	if (key === 'z' || key === 'Z') {
		for (let i = 0; i < total; i++) {
			balloons.push(new Ballon());
		}
	}

	 if( key === 'a'|| key === "A"){
        let a = createA('game.html','Click Me');
        a.position(700, 700);
    }
    

}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

