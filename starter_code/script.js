const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;


class Player {
  constructor (position) {
    this.position = position;
    this.image = new Image();
    this.image.src = "images/car.png"
     this.image.addEventListener('load', () => {
      context.drawImage(this.image, 200, 400, 50, 85);
      drawRoad()
        }); 
  } 
    drawPlayer() {
      context.drawImage(this.image, this.position, 400, 50, 85);
      
  }
  moveRight() {
    this.position +=20 
  }

  moveLeft() {
    this.position -=20
  }
}

const player = new Player(200)

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    drawRoad()
    player.drawPlayer()
  }
}; 

// board 

function drawRoad()
  {
  context.fillStyle = "green";
  context.fillRect(0, 0, 400, 600);  
  context.fillStyle = "grey";
  context.fillRect(30, 0, 340, 600);

  context.lineWidth = "6";
  context.strokeStyle = `white`;
  context.strokeRect (50, 0, 300, 606)


  for (let i =0; i<100; i=i+5)
  {
  context.beginPath();
  let startPoint = i*10;
  context.moveTo(200,startPoint);
  context.lineTo(200,startPoint+20);
  context.stroke();
  context.closePath();
  }}

 
  window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    // React based on the key pressed
    switch (event.keyCode) {
        case 37:
            player.moveLeft();
            console.log('left');
            drawEverything();
            break;
        
        case 39:
            player.moveRight();
            console.log('right');
            drawEverything();
            break;
        
    }
});

function drawEverything() {
  drawRoad()
 player.drawPlayer()
}