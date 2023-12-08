window.addEventListener("keydown", function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // to reset the play fucntion and play a sound multiple times before it ends playing
  audio.play();
  key.classList.add("playing");
});

// Removing the highlight animation on keys after they finish playing

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //Skip if it isn't a transform property.
  this.classList.remove("playing");
}
