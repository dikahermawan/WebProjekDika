const canvasKita5 = document.querySelector("#Canvas5");
canvasKita5.width = 600;
canvasKita5.height = 320;
const ctx5 = canvasKita5.getContext("2d");
const imageData5 = ctx5.getImageData(0, 0, canvasKita5.width, canvasKita5.height);

ctx5.beginPath();
ctx5.arc(190, 180, 110, 0, Math.PI * 2, false);
ctx5.fillStyle = "black";
ctx5.fill();

var sources = {
    dika5: 'img/laravel.png',

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
    ctx5.drawImage(images.dika5, 90, 80, 200, 200);
});