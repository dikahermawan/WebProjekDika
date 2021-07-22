const canvasKita2 = document.querySelector("#Canvas2");
canvasKita2.width = 400;
canvasKita2.height = 400;
const ctx2 = canvasKita2.getContext("2d");
const imageData2 = ctx2.getImageData(0, 0, canvasKita2.width, canvasKita2.height);

ctx2.beginPath();
ctx2.arc(190, 180, 110, 0, Math.PI * 2, false);
ctx2.fillStyle = "black";
ctx2.fill();

var sources = {
    dika2: 'img/corel.png',

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
    ctx2.drawImage(images.dika2, 90, 80, 200, 200);
});