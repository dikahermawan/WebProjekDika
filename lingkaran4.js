const canvasKita4 = document.querySelector("#Canvas4");
canvasKita4.width = 400;
canvasKita4.height = 400;
const ctx4 = canvasKita4.getContext("2d");
const imageData4 = ctx4.getImageData(0, 0, canvasKita4.width, canvasKita4.height);

ctx4.beginPath();
ctx4.arc(190, 180, 110, 0, Math.PI * 2, false);
ctx4.fillStyle = "black";
ctx4.fill();

var sources = {
    dika4: 'img/js.png',

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
    ctx4.drawImage(images.dika4, 90, 80, 200, 200);
});