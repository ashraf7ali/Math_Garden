const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 8;


var currentx = 0;
var currenty = 0;
var previousx = 0;
var previousy = 0;

var canvas;
var context;


function prepareCanvas() {
    // console.log('Preparing Canvas');
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    var draw = false

    document.addEventListener('mousedown', function (event) {
        // console.log('Mouse button pressed');
        currentx = event.clientX - canvas.offsetLeft;
        currenty = event.clientY - canvas.offsetTop;

        draw = true;
    });



    canvas.addEventListener('mouseleave', function (event) {

        draw = false;
    });

    document.addEventListener('mousemove', function (event) {

        if (draw) {

            previousx = currentx;
            currentx = event.clientX - canvas.offsetLeft;

            previousy = currenty;
            currenty = event.clientY - canvas.offsetTop;


            drawing()
        }

    });

    document.addEventListener('mouseup', function (event) {
        // console.log('Mouse button is released');

        draw = false;
    });

// Touch events
    canvas.addEventListener('touchstart', function (event) {
        // console.log('touch pressed');
        currentx = event.touches[0].clientX - canvas.offsetLeft;
        currenty = event.touches[0].clientY - canvas.offsetTop;

        draw = true;
    });
    canvas.addEventListener('touchend', function (event) {

        draw = false;
    });

    canvas.addEventListener('touchcancel', function (event) {

        draw = false;
    });

    canvas.addEventListener('touchmove', function (event) {

        if (draw) {

            previousx = currentx;
            currentx = event.touches[0].clientX - canvas.offsetLeft;

            previousy = currenty;
            currenty = event.touches[0].clientY - canvas.offsetTop;


            drawing();
        }

    });


}




function drawing() {
    // console.log('X' + currentx);
    // console.log('Y' + currenty);
    context.beginPath();
    context.moveTo(previousx, previousy);
    context.lineTo(currentx, currenty);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    var currentx = 0;
    var currenty = 0;
    var previousx = 0;
    var previousy = 0;

    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

}

