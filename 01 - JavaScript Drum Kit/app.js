window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // to reset the play fucntion and play a sound multiple times before it ends playing
  audio.play();
});
