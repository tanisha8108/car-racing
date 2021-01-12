var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function preload(){
 //backgroundImage = loadImage("images/startbg.png")
 backgroundImage = loadImage("images/background.jpg")
}
function setup(){
 
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background (backgroundImage);
}
