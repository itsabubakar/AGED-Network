const title = document.querySelectorAll('.directorate');
const text = document.querySelectorAll('.d-text');



title.forEach(box => {
    box.addEventListener('click', () => {
        console.log(box.children[0].children[0]);
        box.children[0].children[0].classList.toggle('d-icon')
        box.children[1].classList.toggle('d-show');
    })
})