// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

document.addEventListener('touchstart',function(){
  document.getElementById('music').play();                  
}, false);  

document.addEventListener('click',function(){
  document.getElementById('music').play();                 
}, false);  



document.addEventListener('touchend',function(){
  document.getElementById('music').play();                  
}, false);


document.addEventListener('keydown',function(){
  document.getElementById('music').play();                  
}, false);

document.addEventListener('keypress',function(){
  document.getElementById('music').play();                  
}, false);

document.addEventListener('keyup',function(){
  document.getElementById('music').play();                  
}, false);