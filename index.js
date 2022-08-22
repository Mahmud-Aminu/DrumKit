// creat a variable that hold the length of button

var numberOfButton = document.querySelectorAll(".drum").length;

// creating the for loop

for(var i = 0; i < numberOfButton; i++) {

 // specifying all the button on the webpage giving it addEventListener of click and then executing the function

 document.querySelectorAll(".drum")[i].addEventListener("click", function () {

 // variable tergating all the innerHTML of the buuton w,a,s,d,j,k,l
  var buttonBreak = this.innerHTML;
  makeSound(buttonBreak);
  buttonAnime(buttonBreak);

})
// function
// detecting keybord press
document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnime(event.key);
})
}; // for loop end

 // function for sound button

function makeSound(key){
  // switch = changing the sound of each click button

  switch (key) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();

      break;
      case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
      case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
      case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
      case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
      case "k":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
      break;
      case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:

  }
  // ending of switch
}
// ending of makeSound function

// this functionj is for button animation for 0.1secons per click

function buttonAnime(currentKey){
    // variable for active button
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

   // for timeout of button
    setTimeout(function(){
      activeButton.classList.remove("pressed")
    },
     100
  )
}
// end of buttonAnime function
