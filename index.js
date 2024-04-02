//Your code here

// Implementation of moveDodgerLeft function
function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// Implementation of moveDodgerRight function
function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
    if (left < 360) { // Assuming right edge is at 360px
        dodger.style.left = `${left + 1}px`;
    }
}



