const canvasKita1 = document.querySelector("#Canvas1");
canvasKita1.width = 400;
canvasKita1.height = 400;
const ctx1 = canvasKita1.getContext("2d");
const imageData1 = ctx1.getImageData(0, 0, canvasKita1.width, canvasKita1.height);

// ctx1.beginPath();
// ctx1.arc(190, 180, 110, 0, Math.PI * 2, false);
// ctx1.fillStyle = "black";
// ctx1.fill();

var sources = {
    dika1: 'img/figma.png',

};
function loadImages(sources, callback) {
    let images = {};
    let loadImages = 0;
    let numImages = 0;

    //mendapatkan jumlah source
    for (let src in sources) {
        numImages++;
    }
    for (let idx in sources) {
        images[idx] = new Image();
        images[idx].onload = function () {
            if (++loadImages >= numImages) {
                callback(images);
            }
        };
        images[idx].src = sources[idx];
    }
};
//pemanggilan fungsi loadImages
loadImages(sources, function (images) {
    ctx1.drawImage(images.dika1, 90, 80, 200, 200);
});