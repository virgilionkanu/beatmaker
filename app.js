class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    console.log(step);
    const activeBars = document.querySelectorAll(`.b${step}`);
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumkit = new DrumKit();

drumkit.pads.forEach((pad) => {
  pad.addEventListener("click", drumkit.activePad);
});

drumkit.playBtn.addEventListener("click", function () {
  drumkit.start();
});
