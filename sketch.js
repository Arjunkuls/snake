let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}

function draw() {
  scale(rez);
  background(0);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  textSize(1)
  text(snake.body.length, 1, 1)
  if (snake.endGame()) {
    alert('YOU LOSE, your score was' + snake.body.length);
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);

  rect(food.x, food.y, 1, 1);
}
