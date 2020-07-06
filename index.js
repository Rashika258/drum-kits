// alert("Workiing")

//DETECTING MOUSE CLICKS
var totalNumberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<totalNumberOfDrums;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",listeningToMe);
}
  function listeningToMe() {
    // alert("I am Listening");

    // console.log(this.innerHTML);//helps to identify the line that got clicked
  //  this.style.color="white";
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
}

//No parenthesis is used while function call because the function should be called when when the button is clicked so the function name is apssed as a parameter




//DETECTING KEYBOARD PRESS
document.addEventListener("keypress",function(event){
  // alert("A key was pressed");
  makeSound(event.key);

  buttonAnimation(event.key);
});

//addEventListener ->HIGHER ORDER FUNCTIONS
//function(EVENT) ->CALLBACKFUNCTION

//DETECTING THE KEYS USED
function makeSound(key) {
  switch(key){
    case "w":
             var tom1=new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;

    case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
    case "k":
            var kickBass=new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
    case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

    default:console.log(buttonInnerHtml);
  }
}


//BUTTON ANIMATION

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);
}


//SET TIME OUT IS A METHOD THAT TAKES 2 PARAMETERS 1.ANONYMOUS FUNCTION THAT HAS TO BE CARRIED outline
//2.TIME DELAY THAT HAS TO BE APPLIED
