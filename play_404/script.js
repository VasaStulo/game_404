const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(even) {
  jump();
});

function jump() {
  if (dino.classList != "jump"){
    dino.classList.add("jump")
  }
  setTimeout (function(){
    dino.classList.remove("jump")
  }, 500)
}
let isAlive = setInterval( function(){
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"))
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
console.log(cactusLeft);
  if(cactusLeft < 40  && cactusLeft > 0 && dinoTop <= 35){
    alert("GAME OVER!")
  }
},10)