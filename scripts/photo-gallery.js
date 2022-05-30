const photoConc = document.querySelectorAll('.photo-group-img')

console.log(photoConc);

photoConc.forEach(function (btn) {
    btn.addEventListener('mouseenter', function(e){
        const hoverElem = btn.childNodes[3].childNodes[1];
        console.log(hoverElem);
        hoverElem.style.fontSize = '22px';
    })

    btn.addEventListener('mouseleave', function(e){
        const hoverElem = btn.childNodes[3].childNodes[1];
        console.log(hoverElem);
        hoverElem.style.fontSize = '18px';

    })
})