const btnList = document.querySelectorAll(".drum");
const drumSet = {
  crash: new Audio("sounds/crash.mp3"),
  kick: new Audio("sounds/kick-bass.mp3"),
  snare: new Audio("sounds/snare.mp3"),
  tom1: new Audio("sounds/tom-1.mp3"),
  tom2: new Audio("sounds/tom-2.mp3"),
  tom3: new Audio("sounds/tom-3.mp3"),
  tom4: new Audio("sounds/tom-4.mp3"),
};

btnList.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    makeSound(event.target.innerHTML);
    btnAnimation(event.target.innerHTML)
  });
});

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  btnAnimation(event.key)
});

function makeSound(key) {
  switch (key) {
    case "w":
      drumSet.tom1.currentTime = 0;
      drumSet.tom1.play();
      break;

    case "a":
      drumSet.tom2.currentTime = 0;
      drumSet.tom2.play();
      break;

    case "s":
      drumSet.tom3.currentTime = 0;
      drumSet.tom3.play();
      break;

    case "d":
      drumSet.tom4.currentTime = 0;
      drumSet.tom4.play();
      break;

    case "j":
      drumSet.snare.currentTime = 0;
      drumSet.snare.play();
      break;

    case "k":
      drumSet.crash.currentTime = 0;
      drumSet.crash.play();
      break;

    case "l":
      drumSet.kick.currentTime = 0;
      drumSet.kick.play();
      break;
  }
}
function btnAnimation(key) {
  let activeButton = document.querySelector(`.${key}`);

  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 300);
}
