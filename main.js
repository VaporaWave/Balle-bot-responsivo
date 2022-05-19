function go (){
    var set = document.querySelector('#mob-menu')
    if(set.classList.contains('section-texto-mobile')){
        set.classList.remove('section-texto-mobile')
        set.classList.add('section-texto-mobile-ativo')
    }

    else{
        set.classList.remove('section-texto-mobile-ativo')
            set.classList.add('section-texto-mobile')
    }
        
}