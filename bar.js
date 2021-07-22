function update1() {
    var element = document.getElementById("Bar1");
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if (width >= 70) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}

function update2() {
    var element = document.getElementById("Bar2");
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if (width >= 50) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}

function update3() {
    var element = document.getElementById("Bar3");
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if (width >= 85) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}

function update4() {
    var element = document.getElementById("Bar4");
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if (width >= 70) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}

function update5() {
    var element = document.getElementById("Bar5");
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if (width >= 40) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}