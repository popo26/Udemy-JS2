
var buttons = document.querySelectorAll(".drum");
console.log(buttons);
for (var i = 0; i<buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimiation(buttonInnerHTML);

  })
}

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonAnimiation(event.key);
})

function makeSound (key) {
  switch (key) {
    case "w":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    case "a":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    case "s":
      var s = new Audio("sounds/snare.mp3");
      s.play();
      break;
    case "d":
      var d = new Audio("sounds/tom-1.mp3");
      d.play();
      break;
    case "j":
      var j = new Audio("sounds/tom-2.mp3");
      j.play();
      break;
    case "k":
      var k = new Audio("sounds/tom-3.mp3");
      k.play();
      break;
    case "l":
      var l = new Audio("sounds/tom-4.mp3");
      l.play();
      break;
    default:
    console.log(buttonInnerHTML);
  }
}

function buttonAnimiation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
