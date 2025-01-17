var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");

  car1_img = loadImage ("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage ("assets/track.jpg");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);

  if (playerCount === 2){ //se tiver 2 jogadores registrados
    game.update(1); //atualizar o estado de jogo para 1 (PLAY)
  }

  if (gameState === 1) {
    game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
