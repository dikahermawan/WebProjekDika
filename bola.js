let canvasKita = document.querySelector('#myCanvas');
canvasKita.width = 300;
canvasKita.height = 100;
let ctx = canvasKita.getContext('2d');
let imageData = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

function lingkaran(x, y, r, w, kanan, kiri, atas, bawah, speed) {
    this.x = x; this.atas = atas;
    this.y = y; this.bawah = bawah;
    this.r = r; this.kanan = kanan;
    this.w = w; this.kiri = kiri;
    this.render = function () {
        ctx.fillStyle = this.w;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 4);
        ctx.fill();

        if (this.kanan) {
            this.x += speed;
        }
        if (this.kiri) {
            this.x -= speed;
        }
        if (this.atas) {
            this.y -= speed;
        }
        if (this.bawah) {
            this.y += speed;
        }

        if (this.y + this.r > canvasKita.height) {
            this.bawah = false;
            this.atas = true;
        } else if (this.y - this.r < 0) {
            this.bawah = true;
            this.atas = false;
        }

        if (this.x + this.r > canvasKita.width) {
            this.kanan = false;
            this.kiri = true;
        } else if (this.x - this.r < 0) {
            this.kanan = true;
            this.kiri = false;
        }

    }
}

let lingkaranmerah = new lingkaran(100, 200, 50, "#77B6EA", true, false, false, true, 4);
let lingkaranhijau = new lingkaran(100, 200, 50, "grey", false, true, true, false, 4);
let lingkarankuning = new lingkaran(100, 200, 50, "#77B6EA", true, false, true, false, 3);
let lingkaranbiru = new lingkaran(100, 200, 50, "grey", true, false, true, false, 5);
function animasi() {
    ctx.save();
    ctx.clearRect(0, 0, canvasKita.width, canvasKita.height);

    ctx.globalAlpha = 0.7;
    lingkaranmerah.render();
    lingkaranhijau.render();
    lingkarankuning.render();
    lingkaranbiru.render();

    ctx.restore();
}
setInterval(animasi, 10);