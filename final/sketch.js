var pressStart;
let like;
let sad;
let colorPicker;
let buttonsubmit;
let buttongiveup;
let buttonerase
let slidersize;
let done = false;
let clicked = false;
let startTimer = false;
let input;
let button;
let word;


function setup() {
    


    createCanvas(1000, 1000);
    background("#6D95FE");
    noStroke();
    rect(200, 150, 700, 600);
    fill("white");
    textSize(50);
    textFont(pressStart);
    text('☆Draw Your FEELING☆', 30, 100);
    colorPicker = createColorPicker('#4DC3F5');
    colorPicker.position(70, 300);
    textSize(15);
    textFont(pressStart);
    text('color', 60, 280);

    slidersize = createSlider();
    slidersize.position(30, 200);

    textSize(15);
    textFont(pressStart);
    text('stroke', 55, 190);

    textSize(20);
    textFont(pressStart);
    text('★press E to erase★', 370, 780);

    buttonsubmit = createButton('submit');
    buttonsubmit.style('font-size', '30px');
    buttonsubmit.style('font-type', 'pressStart');
    buttonsubmit.style('background-color', '#9861FF');
    buttonsubmit.size(140, 100);
    buttonsubmit.position(25, 370);
    buttonsubmit.mousePressed(good);


    buttongiveup = createButton('giveup');
    buttongiveup.style('font-size', '30px');
    buttongiveup.style('font-type', 'pressStart');
    buttongiveup.style('background-color', '#FE2935');
    buttongiveup.size(140, 100);
    buttongiveup.position(25, 500);
    buttongiveup.mousePressed(never);

    buttonerase = createButton('erase all');
    buttonerase.style('font-size', '30px');
    buttonerase.style('font-type', 'pressStart');
    buttonerase.style('background-color', 'white');
    buttonerase.size(140, 100);
    buttonerase.position(25, 630);
    buttonerase.mousePressed(erasw);

    input = createInput('HoW aRe U tOdAy?');
    input.position(25, 760);
    input.size(200, 50)

    button = createButton('aPplY');
    button.position(183, 794);
    button.size(50, 21);
    button.mousePressed(updateText);
    
    
    
}

function draw() {
    if (done) {
        location.reload();
        done = false;
    }
    if (mouseIsPressed && mouseX < width * 0.85 && mouseX > width * 0.25 &&
        mouseY < height * 0.70 && mouseY > height * 0.20) {
        fill(colorPicker.color());
        noStroke();
        rect(mouseX - slidersize.value() * 0.5, mouseY - slidersize.value() * 0.5, slidersize.value());
    }

    if (mouseIsPressed && mouseX < width * 0.85 && mouseX > width * 0.25 &&
        mouseY < height * 0.70 && mouseY > height * 0.20 && keyIsPressed === true) {
        fill('white');
        noStroke();
        rect(mouseX - slidersize.value() * 0.5, mouseY - slidersize.value() * 0.5, slidersize.value());
    }
    if (clicked) {
        startTimer++;
        if (startTimer > 120) {
            done = true;
        }
    }
}


function preload() {
    pressStart = loadFont('PressStart2P-Regular.ttf');
    like = loadImage('like.png');
    sad = loadImage('sad.png');

}

function good() {
    if (!clicked) {
        for (let i = 0; i < 30; i++) {
            image(like, random(width), random(height), 50, 50);
        }
    }

    clicked = true;
}

function never() {
    if (!clicked) {

        textSize(40);
        textFont(pressStart);
        fill("red");
        text('★NEVER GIVE UP★', 250, 450);

        for (let i = 0; i < 30; i++) {
            image(sad, random(width), random(height), 50, 50);
        }
    }
    clicked = true;
}

function erasw() {

    noStroke();
    fill("white")
    rect(200, 150, 700, 600);


}

function updateText() {
    // background(255, 255, 0);
    textSize(30);
    word = input.value();
    color1 = input.value();
    

    if (!clicked) {

  
    for (let i = 0; i < 30; i++) {
      fill(random(255));
      text(word, random(width), random(height));
    }

   
}
clicked = true;
  }