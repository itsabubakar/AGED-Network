const photoConc = document.querySelectorAll('.photo-group-img')

console.log(photoConc);

photoConc.forEach(function (btn) {
    btn.addEventListener('mouseenter', function(e){
        const hoverElem = btn.childNodes[3].childNodes[1];
        console.log(hoverElem);
        hoverElem.style.fontSize = '20px';
    })

    btn.addEventListener('mouseleave', function(e){
        const hoverElem = btn.childNodes[3].childNodes[1];
        console.log(hoverElem);
        hoverElem.style.fontSize = '18px';

    })
})

// img carosel

// const buttons = document.querySelectorAll("[data-carousel-button]")
// console.log(buttons);


// buttons.forEach(button => {
//     button.addEventListener('click', ()=> {
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//         if(newIndex < 0) newIndex = slides.children.length -1;
//         if(newIndex >= slides.children.length) newIndex = 0;

//         slides.children[newIndex].dataset.active = true;
//         delete activeSlide.dataset.active
//     })
// })

// console.log(buttons);