const boxes = document.querySelectorAll('.box');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let clickedBox = 0;

function check() {
    if (clickedBox >= 1) {
        btnPrev.classList.add('clickedable');
    } else {
        btnPrev.classList.remove('clickedable');
    }

    if (clickedBox === boxes.length - 1) {
        btnNext.classList.remove('clickedable');
    } else {
        btnNext.classList.add('clickedable');
    }
}

check();

btnNext.addEventListener('click', () => {
    if (clickedBox < boxes.length - 1) {
        clickedBox++; 
        boxes[clickedBox].classList.add('clicked');
    }
    check();
});

btnPrev.addEventListener('click', () => {
    if (clickedBox > 0) {
        boxes[clickedBox].classList.remove('clicked');
        clickedBox--; 
    }
    check();
});

