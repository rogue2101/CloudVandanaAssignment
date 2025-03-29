const images = [
  "https://fastly.picsum.photos/id/549/400/300.jpg?hmac=FNY52ReiLVnPOtIEEgcTC8iCCk39Iynw51HoLGTEoeA",
  "https://fastly.picsum.photos/id/768/400/300.jpg?hmac=UIO6RBQ-V1ZaB-2_22VKJEBly2PUZoKctVwDRBHVnCE",
  "https://fastly.picsum.photos/id/372/400/300.jpg?hmac=YtVXw1Hm4vYWRH43n27vGaVAZ-nTPCUsRnKrDolLQE0",
  "https://fastly.picsum.photos/id/760/400/300.jpg?hmac=BigFpHXW1l9vJGw0x3t1_6leHyaSXaLPrm8cQ8FpC-c",
];

let currIdx = 0;
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
  slider.src = images[currIdx];

  prevBtn.disabled = currIdx === 0;
  nextBtn.disabled = currIdx === images.length - 1;
}

function nextImage() {
  if (currIdx < images.length - 1) {
    currIdx++;
    updateImage();
  }
}

function prevImage() {
  if (currIdx > 0) {
    currIdx--;
    updateImage();
  }
}

updateImage();
