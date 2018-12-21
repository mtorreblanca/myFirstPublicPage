// useful to have them as global variables
var canvas, ctx, w, h;
var rectangleX = 0;
 
 
window.onload =  init();


function init() {
  //get the canvas tag from HTML
  canvas = document.querySelector("#myCanvas");

  //assign the 2d to the getContext Method from the canvas Object
  ctx = canvas.getContext('2d');
  //make the animation function
  requestAnimationFrame(animate);
}

function animate (){
  // - 1 Clear Canvas
  ctx.clearRect(0,0, canvas.width, canvas.height);


  //2 - draw a red rectangle
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(rectangleX, 20, 150, 100);
  
  rectangleX = rectangleX + 1;
  requestAnimationFrame(animate);
}