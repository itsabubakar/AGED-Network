const btns = document.querySelectorAll('.text-tab-btn');
const texts = document.querySelector('.texts');
const pText = document.querySelectorAll('.p-text');

texts.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id) {
        // remove btn-active from other buttons
        btns.forEach(function(btn) {
            btn.classList.remove("btn-active");
            e.target.classList.add("btn-active");
        })
        
        //hide pText, display article with matching id
        pText.forEach(function(article){
            article.classList.remove('p-active');
        })
        const element = document.getElementById(id);
        element.classList.add('p-active')
    }
})