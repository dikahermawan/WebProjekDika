const canvasKita3 = document.querySelector("#Canvas3");
canvasKita3.width = 400;
canvasKita3.height = 400;
const ctx3 = canvasKita3.getContext("2d");
const imageData3 = ctx3.getImageData(0, 0, canvasKita3.width, canvasKita3.height);

ctx3.beginPath();
ctx3.arc(190, 180, 110, 0, Math.PI * 2, false);
ctx3.fillStyle = "black";
ctx3.fill();

var sources = {
    dika3: 'img/bs.png',

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
    ctx3.drawImage(images.dika3, 90, 80, 200, 200);
});