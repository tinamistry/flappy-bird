

//board
let board;
//exact dimensions of backgorudn image 
let boardWidth = 360; 
let boardHeight = 640;
let context; //drawing on canvas

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;

let bird = {
    x : birdX, 
    y : birdY,
    width : birdWidth, 
    height : birdHeight
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight; 
    board.width = boardWidth; 
    context = board.getContext("2d"); //drawing on the board 

    //draw flappy bird
  /*  context.fillStyle = "green"; //changes pen to green 
    context.fillRect(bird.x, bird.y, bird.width, bird.height); //creates a rectangle in place of the bird */

    //load images
    birdImg = new Image(); 
    birdImg.src = "./flappybird.png";
    birdImg.onload = function() { //when the image loads we "paint" the bird on the canvas
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    requestAnimationFrame(update)
    
}

function update() {

    requestAnimationFrame(update) //everytime we draw on the canvas we want to clear the previous frame
    context.clearRect(0, 0, board.width, board.height)

    

}