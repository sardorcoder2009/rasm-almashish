const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        let target = e.currentTarget;

        boxes.forEach((b) => b.classList.remove('clicked'));

        target.classList.add('clicked');
    });
});
